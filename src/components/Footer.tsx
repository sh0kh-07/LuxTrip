import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-brand/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-brand">Lux<span className="text-text-main">Trip</span></span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed">
            {t('about.mission')}
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/luxtrip.uz?igsh=aWxlamdsa2dxcHhj&utm_source=qr" },
              { Icon: Send, href: "https://t.me/LuxTripuzz" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center hover:bg-brand hover:text-white transition-all text-brand">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-text-main font-bold mb-6">{t('footer.quick_links')}</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link to="/" className="hover:text-brand transition-colors">{t('nav.home')}</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">{t('nav.services')}</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-main font-bold mb-6">{t('footer.regions')}</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li><Link to="/region/Samarkand" className="hover:text-brand transition-colors">Samarkand</Link></li>
            <li><Link to="/region/Bukhara" className="hover:text-brand transition-colors">Bukhara</Link></li>
            <li><Link to="/region/Khiva" className="hover:text-brand transition-colors">Khiva</Link></li>
            <li><Link to="/region/Tashkent" className="hover:text-brand transition-colors">Tashkent</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-main font-bold mb-6">{t('footer.contact_info')}</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand mt-1" />
              <div className="flex flex-col gap-1">
                <span>+998 91 023 72 72</span>
                <span>+998 99 616 72 72</span>
                <span>+998 99 940 00 23</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand" />
              <span>luxtripuz@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand" />
              <span>{t('contact.address')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-brand/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <p>© 2026 LuxTrip. {t('footer.rights')}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand transition-colors">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-brand transition-colors">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
