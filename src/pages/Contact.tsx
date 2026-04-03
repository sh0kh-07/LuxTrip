import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pb-20 md:pb-32">
      <PageHero 
        title={t('nav.contact')} 
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920" 
      />

      <div className="px-4 md:px-6 max-w-7xl mx-auto -mt-8 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] card-shadow border border-brand/5 space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <span className="text-brand font-bold tracking-widest uppercase text-xs md:text-sm">{t('contact.get_in_touch')}</span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tighter">{t('contact.title')}</h2>
              <p className="text-text-muted text-base md:text-lg">{t('contact.subtitle')}</p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-0.5 md:mb-1">{t('contact.call')}</h4>
                  <div className="flex flex-col gap-1">
                    <p className="text-text-muted text-base md:text-lg">+998 91 023 72 72</p>
                    <p className="text-text-muted text-base md:text-lg">+998 99 616 72 72</p>
                    <p className="text-text-muted text-base md:text-lg">+998 99 940 00 23</p>
                  </div>
                  <p className="text-text-muted/60 text-xs md:text-sm mt-1">{t('contact.hours')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-0.5 md:mb-1">{t('contact.email')}</h4>
                  <p className="text-text-muted text-base md:text-lg">luxtripuz@gmail.com</p>
                  <p className="text-text-muted/60 text-xs md:text-sm">{t('contact.reply_time')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-0.5 md:mb-1">{t('contact.visit')}</h4>
                  <p className="text-text-muted text-base md:text-lg">{t('contact.address')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-10 md:p-16 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] card-shadow border border-brand/5 space-y-5 md:space-y-8"
            >
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold text-text-main ml-1 md:ml-2">{t('contact.name')}</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold text-text-main ml-1 md:ml-2">{t('contact.email')}</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold text-text-main ml-1 md:ml-2">{t('contact.message')}</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-bg-light border border-brand/10 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 text-sm md:text-base focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/5 transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-2xl hover:shadow-brand/40 active:scale-95"
              >
                {t('contact.send')}
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-600 font-bold bg-emerald-50 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base"
                >
                  {t('contact.success')}
                </motion.div>
              )}
            </motion.form>

            <div className="aspect-video rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden card-shadow border border-brand/5 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3035.028388428679!2d68.77866207601384!3d40.474636971430336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI4JzI4LjciTiA2OMKwNDYnNTIuNSJF!5e0!3m2!1sru!2s!4v1774508566595!5m2!1sru!2s" 
                className="w-full h-full border-0" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
