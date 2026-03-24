import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { MapPin, Star, ArrowLeft, Phone, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = i18n.language as 'ru' | 'en' | 'uz';
  const service = SERVICES.find(s => s.id === id);

  if (!service) return null;

  return (
    <div className="pb-32">
      {/* Gallery */}
      <section className="relative h-[60vh] w-full">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-32 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-brand hover:text-white transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {service.gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={service.title[language]} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t(`type.${service.type}`)}
                </span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-yellow-500" />
                  <span className="font-bold text-text-main">{service.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-main">{service.title[language]}</h1>
              <div className="flex flex-wrap gap-8 text-text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand" />
                  <span>{service.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-brand" />
                  <span>{service.phone}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-main flex items-center gap-3">
                <Info className="text-brand" /> Description
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                {service.description[language]}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-main">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Verified Service', 'Best Price Guarantee', '24/7 Support', 'Authentic Experience'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] card-shadow border border-brand/5 sticky top-32 space-y-8">
              {service.price ? (
                <div className="space-y-1">
                  <span className="text-text-muted text-sm block">Starting from</span>
                  <span className="text-4xl font-bold text-brand">${service.price}</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="text-text-muted text-sm block">Entry Fee</span>
                  <span className="text-4xl font-bold text-brand">Free</span>
                </div>
              )}

              <button className="w-full bg-brand text-white py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-brand/20 active:scale-95">
                {t('common.book_now')}
              </button>

              <div className="pt-6 border-t border-brand/5 space-y-4">
                <h4 className="font-bold text-text-main">Need Help?</h4>
                <p className="text-sm text-text-muted">Contact our support team for any questions regarding this service.</p>
                <a href={`tel:${service.phone}`} className="block text-brand font-bold hover:underline">{service.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
