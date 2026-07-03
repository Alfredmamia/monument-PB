import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoMonument from '@/assets/logo-monument.png';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const mainNavItems = [
    { label: t('nav.home'), path: '/' },
    {
      label: 'Découvrir',
      submenu: [
        { label: t('nav.history'), path: '/histoire' },
        { label: 'Monument', path: '/monument' },
        { label: t('nav.cultural-areas'), path: '/aires-culturelles' }
      ]
    },
    {
      label: 'Visiter',
      submenu: [
        { label: t('nav.visit'), path: '/visite' },
        { label: t('nav.gallery'), path: '/galerie' },
        { label: t('nav.events'), path: '/evenements' }
      ]
    },
    {
      label: 'Services',
      submenu: [
        { label: t('nav.glam'), path: '/glam' },
        { label: t('nav.education'), path: '/education' },
        { label: t('nav.restaurant'), path: '/restaurant' },
        { label: t('nav.accommodation'), path: '/hebergement' },
        { label: 'Boutique', path: '/boutique' }
      ]
    },
    { label: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const isSubmenuActive = (submenu: any[]) => submenu.some(item => isActive(item.path));

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-national-gold">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo avec le design de l'image */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoMonument} 
              alt="Monument Paul Biya - Sangmelima" 
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Navigation Desktop avec sous-menus */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                          isSubmenuActive(item.submenu)
                            ? 'bg-national-green text-white'
                            : 'text-gray-700 hover:bg-national-gold/10 hover:text-national-green'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link
                            to={subItem.path}
                            className={`w-full px-3 py-2 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? 'bg-national-gold/15 text-national-green font-medium'
                                : 'text-gray-700 hover:bg-national-gold/10'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-national-green text-white'
                        : 'text-gray-700 hover:bg-national-gold/10 hover:text-national-green'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Actions section avec sélecteur de langue et réseaux sociaux */}
          <div className="flex items-center space-x-3">
            {/* Sélecteur de langue */}
            <LanguageSelector />
            
            {/* Réseaux sociaux */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://facebook.com/monumentpaulbiya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-national-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/monumentpaulbiya" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-national-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/monument_biya" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-gray-500 hover:text-national-green transition-colors">
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
                  {mainNavItems.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <div className="px-4 py-2 text-base font-semibold text-gray-800 border-b border-gray-200">
                            {item.label}
                          </div>
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-6 py-2 text-sm transition-colors ${
                                isActive(subItem.path)
                                  ? 'bg-national-green text-white font-medium'
                                  : 'text-gray-600 hover:bg-national-gold/10'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive(item.path)
                              ? 'bg-national-green text-white'
                              : 'text-gray-700 hover:bg-national-gold/10'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center space-x-2 pt-6 border-t">
                    <a href="https://facebook.com/monumentpaulbiya" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 text-national-green hover:bg-national-green/10 rounded-full transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/monumentpaulbiya" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 text-pink-600 hover:bg-pink-50 rounded-full transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/monument_biya" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="p-3 text-national-green hover:bg-national-green/10 rounded-full transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
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