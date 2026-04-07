import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES, REGIONS, ServiceType, Region } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { Search, Filter, MapPin, Tag, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

export default function Services() {
  const { t, i18n } = useTranslation();
  const language = i18n.language as 'ru' | 'en' | 'uz';
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [search, setSearch] = useState('');
  const regionFilter = searchParams.get('region') || 'All';
  const typeFilter = searchParams.get('type') || 'All';

  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      const matchesRegion = regionFilter === 'All' || service.region === regionFilter;
      const matchesType = typeFilter === 'All' || service.type === typeFilter;
      const matchesSearch = service.title[language].toLowerCase().includes(search.toLowerCase());
      return matchesRegion && matchesType && matchesSearch;
    });
  }, [regionFilter, typeFilter, search, language]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearch('');
  };

  return (
    <div className="pb-20 md:pb-32">
      <PageHero 
        title={t('nav.services')} 
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1920" 
      />

      <div className="px-4 md:px-6 max-w-7xl mx-auto -mt-8 md:-mt-16 relative z-10 space-y-8 md:space-y-12">
        {/* Filters Bar */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] card-shadow border border-brand/5 space-y-6 md:space-y-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-black text-text-main tracking-tight flex items-center gap-2 md:gap-3">
              <Filter className="text-brand w-5 h-5 md:w-6 md:h-6" />
              {t('filter.title')}
            </h2>
            {(regionFilter !== 'All' || typeFilter !== 'All' || search) && (
              <button 
                onClick={clearFilters}
                className="text-xs md:text-sm font-bold text-brand hover:underline flex items-center gap-1 shrink-0"
              >
                <X className="w-3 h-3 md:w-4 md:h-4" />
                {t('filter.clear')}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-text-muted group-focus-within:text-brand transition-colors" />
              <input
                type="text"
                placeholder={t('filter.search_placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 pl-11 md:pl-14 pr-4 md:pr-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all"
              />
            </div>

            {/* Region Filter */}
            <div className="relative group">
              <MapPin className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-brand" />
              <select
                value={regionFilter}
                onChange={(e) => updateFilter('region', e.target.value)}
                className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 pl-11 md:pl-14 pr-4 md:pr-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all appearance-none cursor-pointer"
              >
                <option value="All">{t('filter.all_regions')}</option>
                {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative group">
              <Tag className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-brand" />
              <select
                value={typeFilter}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 pl-11 md:pl-14 pr-4 md:pr-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all appearance-none cursor-pointer"
              >
                <option value="All">{t('filter.all_types')}</option>
                <option value="hotel">{t('type.hotel')}</option>
                <option value="restaurant">{t('type.restaurant')}</option>
                <option value="place">{t('type.place')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[40px] card-shadow border border-brand/5 space-y-6">
            <div className="w-20 h-20 bg-brand/5 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-brand/40" />
            </div>
            <div className="space-y-2">
              <p className="text-text-main text-2xl font-bold">{t('filter.no_results')}</p>
              <p className="text-text-muted">{t('filter.no_results_subtitle')}</p>
            </div>
            <button 
              onClick={clearFilters} 
              className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              {t('filter.clear')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
