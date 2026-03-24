import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, REGIONS } from '../data/services';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ArrowRight, 
  Landmark, 
  ShieldCheck, 
  Map, 
  Headphones, 
  Zap, 
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const places = SERVICES.filter(s => s.type === 'place');

  const swiperBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 1.2, spaceBetween: 20 },
    640: { slidesPerView: 2.2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 32 },
    1280: { slidesPerView: 4, spaceBetween: 32 }
  };

  const whyUsFeatures = [
    { icon: ShieldCheck, key: 'reliability' },
    { icon: Map, key: 'routes' },
    { icon: Headphones, key: 'support' },
    { icon: Zap, key: 'service' }
  ];

  const faqs = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' }
  ];

  return (
    <div className="space-y-20 md:space-y-32 pb-20 md:pb-32 overflow-hidden">
      <Hero />

      {/* Popular Regions */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-brand font-bold tracking-widest uppercase text-xs md:text-sm">{t('home.popular_regions')}</span>
          <h2 className="text-3xl md:text-6xl font-black text-text-main tracking-tighter">
            {t('home.explore')}
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
            {t('home.regions_subtitle')}
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={2.2}
          navigation
          breakpoints={{
            480: { slidesPerView: 2.5, spaceBetween: 16 },
            640: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 5.2, spaceBetween: 24 },
            1280: { slidesPerView: 7, spaceBetween: 24 }
          }}
          className="pb-4 [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden md:[&_.swiper-button-next]:flex md:[&_.swiper-button-prev]:flex"
        >
          {REGIONS.map((region) => (
            <SwiperSlide key={region}>
              <Link
                to={`/services?region=${region}`}
                className="group relative aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden bg-white card-shadow border border-brand/5 flex flex-col items-center justify-center gap-3 md:gap-4 hover:bg-brand transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand group-hover:text-white" />
                </div>
                <span className="text-sm md:text-base font-bold text-text-main group-hover:text-white px-2 text-center wrap-break-word">{region}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Places to Visit */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-5 md:gap-6">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-text-main flex items-center gap-3 md:gap-4 tracking-tighter">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center shrink-0">
                <Landmark className="text-brand w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="leading-tight">{t('home.places_title')}</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg">{t('home.places_subtitle')}</p>
          </div>
          <Link to="/services?type=place" className="w-full md:w-auto justify-center bg-brand/5 text-brand px-6 py-3.5 md:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand hover:text-white transition-all">
            {t('common.view_all')} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={swiperBreakpoints}
          className="pb-12! md:pb-14! [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden md:[&_.swiper-button-next]:flex md:[&_.swiper-button-prev]:flex"
        >
          {places.map(service => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand/5 py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-text-main tracking-tighter">
              {t('home.why_us_title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-[40px] border border-brand/5 card-shadow hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-[24px] bg-brand/5 flex items-center justify-center mb-8 group-hover:bg-brand transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-brand group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black text-text-main mb-4 tracking-tight">
                  {t(`why_us.${feature.key}.title`)}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {t(`why_us.${feature.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">
            {t('home.faq_title')}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.key}
              className="bg-white rounded-[32px] border border-brand/5 card-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand/5 transition-colors"
              >
                <span className="text-xl font-bold text-text-main">{t(`faq.${faq.key}.q`)}</span>
                <ChevronDown className={`w-6 h-6 text-brand transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-text-muted text-lg leading-relaxed">
                      {t(`faq.${faq.key}.a`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="bg-brand rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-10 max-w-3xl mx-auto py-4 md:py-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-white font-bold backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{t('common.verified')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight md:leading-none">
              {t('home.cta_title')}
            </h2>
            <p className="text-white/80 text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-xl md:max-w-2xl mx-auto">
              {t('home.cta_subtitle')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
