import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.years'), value: '15+' },
    { label: t('about.clients'), value: '10k+' },
    { label: t('about.destinations'), value: '120+' },
    { label: t('about.partners'), value: '500+' },
  ];

  return (
    <div className="pb-32 space-y-32">
      <PageHero 
        title={t('nav.about')} 
        image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1920" 
      />

      {/* Story */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-brand font-bold tracking-widest uppercase text-sm">{t('about.story')}</span>
            <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tighter">{t('about.redefining')}</h2>
          </div>
          <p className="text-text-muted text-lg leading-relaxed">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-4xl font-black text-brand tracking-tighter">{stat.value}</div>
                <div className="text-sm text-text-muted uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden card-shadow">
            <img 
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Travel" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-lg p-8 rounded-[32px] hidden md:block max-w-[320px] space-y-4 card-shadow border border-brand/5">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-brand" />
            </div>
            <p className="text-base font-bold text-text-main">{t('about.award_text')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-bg-light py-32">
        <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[40px] card-shadow border border-brand/5 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t('about.mission_title')}</h3>
            <p className="text-text-muted text-base leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
          <div className="bg-white p-10 rounded-[40px] card-shadow border border-brand/5 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t('about.team_title')}</h3>
            <p className="text-text-muted text-base leading-relaxed">
              {t('about.team_description')}
            </p>
          </div>
          <div className="bg-white p-10 rounded-[40px] card-shadow border border-brand/5 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t('about.values_title')}</h3>
            <p className="text-text-muted text-base leading-relaxed">
              {t('about.values_description')}
            </p>
          </div>
        </div>
      </section>
      {/* Founders */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-brand text-white rounded-[40px] p-10 md:p-16 card-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 max-w-3xl space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">{t('founders.title')}</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              {t('founders.description')}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
