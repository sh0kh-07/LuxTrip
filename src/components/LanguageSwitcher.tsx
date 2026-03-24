import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  isTransparent?: boolean;
}

export default function LanguageSwitcher({ isTransparent }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const langs = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' },
  ];

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Globe className={cn(
        "w-4 h-4 transition-colors hidden sm:block",
        isTransparent ? "text-white/60" : "text-brand/60"
      )} />
      <div className={cn(
        "flex border rounded-full p-0.5 sm:p-1 transition-colors",
        isTransparent ? "bg-white/10 border-white/20" : "bg-white/50 border-brand/10"
      )}>
        {langs.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={cn(
              "px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all",
              i18n.language === lang.code
                ? (isTransparent ? "bg-white text-brand shadow-sm" : "bg-brand text-white shadow-sm")
                : (isTransparent ? "text-white/60 hover:text-white" : "text-text-muted hover:text-brand")
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
