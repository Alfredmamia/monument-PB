
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Histoire', path: '/histoire' },
    { label: 'Visite', path: '/visite' },
    { label: 'Galerie', path: '/galerie' },
    { label: 'Événements', path: '/evenements' },
    { label: 'GLAM', path: '/glam' },
    { label: 'Restaurant', path: '/restaurant' },
    { label: 'Hébergement', path: '/hebergement' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-600">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 via-red-600 to-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">MPB</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-800">Monument Paul Biya</h1>
              <p className="text-xs text-gray-600">Gardien de notre mémoire</p>
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
      </nav>
    </header>
  );
};

export default Header;
