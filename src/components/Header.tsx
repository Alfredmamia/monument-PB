
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.history'), path: '/histoire' },
    { label: 'Monument', path: '/monument' },
    { label: t('nav.visit'), path: '/visite' },
    { label: t('nav.gallery'), path: '/galerie' },
    { label: t('nav.events'), path: '/evenements' },
    { label: t('nav.glam'), path: '/glam' },
    { label: t('nav.cultural-areas'), path: '/aires-culturelles' },
    { label: t('nav.education'), path: '/education' },
    { label: t('nav.restaurant'), path: '/restaurant' },
    { label: t('nav.accommodation'), path: '/hebergement' },
    { label: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-600">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo avec le nouveau design */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/0f981698-f7fd-4371-9a21-73ac8361dfc3.png" 
                alt="Monument Paul Biya - Sangmelima" 
                className="w-16 h-20 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-gray-800">{t('site.title')}</h1>
                <img 
                  src="/lovable-uploads/1c121526-a924-4856-8137-02c40c261581.png" 
                  alt="Drapeau du Cameroun" 
                  className="w-8 h-6 object-cover rounded-sm"
                />
              </div>
              <p className="text-xs text-gray-600">{t('site.subtitle')}</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-yellow-600 text-white'
                    : 'text-gray-700 hover:bg-yellow-100 hover:text-yellow-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions section avec sélecteur de langue et réseaux sociaux */}
          <div className="flex items-center space-x-3">
            {/* Sélecteur de langue */}
            <LanguageSelector />
            
            {/* Réseaux sociaux */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Menu Mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? 'bg-yellow-600 text-white'
                          : 'text-gray-700 hover:bg-yellow-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex justify-center space-x-4 pt-6 border-t">
                    <Facebook className="w-6 h-6 text-blue-600 cursor-pointer" />
                    <Instagram className="w-6 h-6 text-pink-600 cursor-pointer" />
                    <Twitter className="w-6 h-6 text-blue-400 cursor-pointer" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
