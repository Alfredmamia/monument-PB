
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Partenaires */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-semibold mb-6">Nos Partenaires</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="bg-white p-3 rounded-lg">
              <span className="text-gray-800 font-bold">CAMTEL</span>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="text-gray-800 font-bold">FEICOM</span>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="text-gray-800 font-bold">MINAC</span>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="text-gray-800 font-bold">SOPECAM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Informations */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Monument Paul Biya</h4>
            <p className="text-gray-300 mb-4">
              Gardien de notre mémoire, reflet de notre avenir
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">+237 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">info@monumentpaulbiya.cm</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/histoire" className="text-gray-300 hover:text-yellow-400 transition-colors">Histoire</a></li>
              <li><a href="/visite" className="text-gray-300 hover:text-yellow-400 transition-colors">Visite</a></li>
              <li><a href="/galerie" className="text-gray-300 hover:text-yellow-400 transition-colors">Galerie</a></li>
              <li><a href="/evenements" className="text-gray-300 hover:text-yellow-400 transition-colors">Événements</a></li>
              <li><a href="/glam" className="text-gray-300 hover:text-yellow-400 transition-colors">GLAM</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="/restaurant" className="text-gray-300 hover:text-yellow-400 transition-colors">Restaurant</a></li>
              <li><a href="/hebergement" className="text-gray-300 hover:text-yellow-400 transition-colors">Hébergement</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Restez informé de nos actualités et événements
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Votre email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux et mentions légales */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Monument Paul Biya - République du Cameroun
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2 text-xs">
              <a href="#" className="text-gray-400 hover:text-yellow-400">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">Accessibilité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
