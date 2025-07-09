
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
    
    // Homepage
    'home.welcome': 'Bienvenue',
    'home.hero.description': 'Bienvenue au Monument Paul Biya, symbole de l\'unité et de la diversité camerounaise. Découvrez un lieu unique où histoire, culture et modernité se rencontrent. Plongez dans l\'expérience !',
    'home.discover': 'Découvrir le Monument',
    'home.plan.visit': 'Planifier ma Visite',
    'home.explore': 'Explorez le Monument',
    'home.stats.height': 'Hauteur du Monument',
    'home.stats.areas': 'Aires Culturelles',
    'home.stats.year': 'Année d\'Inauguration',
    'home.stats.visitors': 'Visiteurs Attendus',
    'home.services': 'Nos Services',
    'home.events': 'Événements à Venir',
    
    // Contact
    'contact.title': 'Contact',
    'contact.hero.description': 'Une question ? Besoin d\'aide ? Contactez notre équipe ou venez nous rendre visite à Sangmélima. Carte interactive et réseaux sociaux à disposition.',
    'contact.stay.connected': 'Restons connectés',
    'contact.coordinates': 'Nos Coordonnées',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.hours': 'Horaires',
    'contact.send.message': 'Envoyez-nous un Message',
    'contact.location': 'Localisation',
    'contact.follow': 'Suivez-nous',
    'contact.form.name': 'Nom',
    'contact.form.firstname': 'Prénom',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.address.line1': 'Carrefour MEPHO',
    'contact.address.line2': 'Sangmélima',
    'contact.address.line3': 'Région du Sud',
    'contact.hours.weekdays': 'Lun-Ven: 8h - 18h',
    'contact.hours.weekend': 'Sam-Dim: 9h - 19h',
    'contact.hours.holidays': 'Jours fériés: 10h - 16h',
    'contact.location.description': 'Situé au cœur de Sangmélima, le Monument Paul Biya est facilement accessible par la route et dispose d\'un parking gratuit pour les visiteurs.',
    'contact.social.description': 'Restez connecté pour les dernières actualités et événements',
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
    
    // Homepage
    'home.welcome': 'Welcome',
    'home.hero.description': 'Welcome to the Paul Biya Monument, symbol of Cameroonian unity and diversity. Discover a unique place where history, culture and modernity meet. Dive into the experience!',
    'home.discover': 'Discover the Monument',
    'home.plan.visit': 'Plan my Visit',
    'home.explore': 'Explore the Monument',
    'home.stats.height': 'Monument Height',
    'home.stats.areas': 'Cultural Areas',
    'home.stats.year': 'Inauguration Year',
    'home.stats.visitors': 'Expected Visitors',
    'home.services': 'Our Services',
    'home.events': 'Upcoming Events',
    
    // Contact
    'contact.title': 'Contact',
    'contact.hero.description': 'A question? Need help? Contact our team or come visit us in Sangmélima. Interactive map and social networks available.',
    'contact.stay.connected': 'Let\'s stay connected',
    'contact.coordinates': 'Our Coordinates',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.send.message': 'Send us a Message',
    'contact.location': 'Location',
    'contact.follow': 'Follow us',
    'contact.form.name': 'Name',
    'contact.form.firstname': 'First Name',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.address.line1': 'MEPHO Crossroads',
    'contact.address.line2': 'Sangmélima',
    'contact.address.line3': 'South Region',
    'contact.hours.weekdays': 'Mon-Fri: 8am - 6pm',
    'contact.hours.weekend': 'Sat-Sun: 9am - 7pm',
    'contact.hours.holidays': 'Holidays: 10am - 4pm',
    'contact.location.description': 'Located in the heart of Sangmélima, the Paul Biya Monument is easily accessible by road and has free parking for visitors.',
    'contact.social.description': 'Stay connected for the latest news and events',
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
