
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.history': 'Histoire',
    'nav.visit': 'Visite',
    'nav.gallery': 'Galerie',
    'nav.events': 'Événements',
    'nav.glam': 'GLAM',
    'nav.cultural-areas': 'Aires Culturelles',
    'nav.education': 'Éducation',
    'nav.restaurant': 'Restaurant',
    'nav.accommodation': 'Hébergement',
    'nav.contact': 'Contact',
    
    // Common
    'site.title': 'Monument Paul Biya',
    'site.subtitle': 'Gardien de notre mémoire',
    'language': 'Langue',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.history': 'History',
    'nav.visit': 'Visit',
    'nav.gallery': 'Gallery',
    'nav.events': 'Events',
    'nav.glam': 'GLAM',
    'nav.cultural-areas': 'Cultural Areas',
    'nav.education': 'Education',
    'nav.restaurant': 'Restaurant',
    'nav.accommodation': 'Accommodation',
    'nav.contact': 'Contact',
    
    // Common
    'site.title': 'Paul Biya Monument',
    'site.subtitle': 'Guardian of our memory',
    'language': 'Language',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
