import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
  const { t } = useTranslation();

  const slides = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/RegistanSquare_Samarkand.jpg',
      region: 'Samarkand',
      title: 'Registan Square'
    },
    {
      image: 'https://storage.otpusk.uz/source/1/qK37EJqx21PzDAtzjc6OfrAMhNSe9ide.webp',
      region: 'Khiva',
      title: 'Itchan Kala'
    },
    {
      image: 'https://trvlland.com/wp-content/uploads/2022/09/uzbekistan_tashkent-3.jpg',
      region: 'Tashkent',
      title: 'Modern Capital'
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute inset-0 flex items-center px-6">
                <div className="max-w-7xl mx-auto w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl space-y-8"
                  >
                    <div className="flex items-center gap-3 text-white/90 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                      <div className="w-8 h-px bg-brand" />
                      <MapPin className="w-5 h-5 text-brand" />
                      <span>{slide.region}</span>
                    </div>
                    
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-[1.1] text-white tracking-tighter">
                      {t('hero.title')}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium">
                      {t('hero.subtitle')}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/services"
                        className="bg-brand text-white px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-2xl shadow-brand/40"
                      >
                        {t('hero.cta')}
                        <ArrowRight className="w-6 h-6" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
