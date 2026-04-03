import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, Region } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { MapPin, ArrowLeft, Hotel, Utensils, Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

export default function RegionPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const region = id as Region;

  const regionServices = SERVICES.filter(s => s.region === region);
  const hotels = regionServices.filter(s => s.type === 'hotel');
  const restaurants = regionServices.filter(s => s.type === 'restaurant');
  const places = regionServices.filter(s => s.type === 'place');

  const regionImages: Record<string, string> = {
    'Termiz': 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1920',
    'Moynaq': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920',
    'Khiva': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920',
    'Kokand': 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1920',
    'Namangan': 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1920',
    'Zaamin': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1920',
    'Samarkand': 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1920',
    'Shahrisabz': 'https://images.unsplash.com/photo-1580637250188-062e17707f45?auto=format&fit=crop&q=80&w=1920',
    'Bukhara': 'https://images.unsplash.com/photo-1580637250188-062e17707f45?auto=format&fit=crop&q=80&w=1920',
    'Tashkent': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1920'
  };

  return (
    <div className="pb-32">
      <PageHero 
        title={region} 
        image={regionImages[region] || regionImages['Samarkand']} 
      />

      <div className="px-6 max-w-7xl mx-auto -mt-16 relative z-10 space-y-20">
        <div className="bg-white p-8 rounded-[40px] card-shadow border border-brand/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[32px] bg-brand/5 flex items-center justify-center">
              <MapPin className="w-10 h-10 text-brand" />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-text-main tracking-tight">{region}</h2>
              <p className="text-text-muted font-medium">{t('region.explore_subtitle', { region })}</p>
            </div>
          </div>
          <Link to="/" className="bg-brand/5 text-brand px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5" /> {t('common.back_to_home')}
          </Link>
        </div>

        {/* Hotels */}
        {hotels.length > 0 && (
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center">
                <Hotel className="text-brand w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{t('home.best_hotels')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hotels.map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </section>
        )}

        {/* Restaurants */}
        {restaurants.length > 0 && (
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center">
                <Utensils className="text-brand w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{t('home.restaurants')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {restaurants.map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </section>
        )}

        {/* Places */}
        {places.length > 0 && (
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center">
                <Landmark className="text-brand w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{t('home.places')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {places.map(s => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </section>
        )}

        {regionServices.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[40px] card-shadow border border-brand/5 space-y-6">
            <div className="w-20 h-20 bg-brand/5 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-10 h-10 text-brand/40" />
            </div>
            <p className="text-text-muted text-xl font-bold">{t('region.no_services')}</p>
            <Link to="/" className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              {t('common.back_to_home')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
