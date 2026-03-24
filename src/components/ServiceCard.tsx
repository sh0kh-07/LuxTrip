import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight, Hotel, Utensils, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../data/services';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  service: Service;
  key?: string | number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.language as 'ru' | 'en' | 'uz';

  const TypeIcon = {
    hotel: Hotel,
    restaurant: Utensils,
    place: Landmark
  }[service.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden card-shadow border border-brand/5"
    >
      <div className="aspect-16/10 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title[language]}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand shadow-sm flex items-center gap-1.5">
            <TypeIcon className="w-3 h-3" />
            {t(`type.${service.type}`)}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px] font-bold text-text-main">{service.rating}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center gap-1 text-text-muted text-[10px] sm:text-xs mb-1">
            <MapPin className="w-3 h-3 text-brand" />
            <span>{service.region}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-text-main group-hover:text-brand transition-colors line-clamp-1 leading-tight">
            {service.title[language]}
          </h3>
        </div>

        <p className="text-text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
          {service.description[language]}
        </p>

        <div className="flex items-center justify-between pt-2">
          {service.price ? (
            <div>
              <span className="text-xs text-text-muted block">{t('common.book_now')}</span>
              <span className="text-lg font-bold text-brand">${service.price} <span className="text-xs font-normal text-text-muted">/ night</span></span>
            </div>
          ) : (
            <span className="text-xs font-bold text-brand uppercase tracking-widest">Free Entry</span>
          )}
          
          <Link
            to={`/service/${service.id}`}
            className="w-10 h-10 rounded-full bg-brand/5 hover:bg-brand text-brand hover:text-white flex items-center justify-center transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
