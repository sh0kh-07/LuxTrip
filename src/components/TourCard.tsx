import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Tour } from '../data/tours';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand/10"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={tour.image}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="glass-dark px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/90">
            {tour.category}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 glass-dark px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] font-bold">{tour.rating}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-1 text-white/50 text-xs mb-1">
            <MapPin className="w-3 h-3" />
            <span>{tour.location}</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
            {tour.title}
          </h3>
        </div>

        <div className="flex items-center justify-between text-sm text-white/60">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="text-right">
            <span className="text-xs block opacity-50">From</span>
            <span className="text-lg font-bold text-white">${tour.price}</span>
          </div>
        </div>

        <Link
          to={`/tour/${tour.id}`}
          className="w-full py-3 rounded-2xl bg-white/5 hover:bg-brand text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all group/btn"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
