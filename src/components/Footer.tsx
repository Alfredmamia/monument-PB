
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Partenaires avec nouveaux logos */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-semibold mb-6">Nos Partenaires</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/01edca7f-ea9e-4ce1-b0b0-c687c13518e8.png" 
                alt="MINDDEVEL" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/9d8a3fa4-ed3d-4569-a631-6a833b221ce2.png" 
                alt="MINHDU" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/376e527c-1b03-4a9e-82f5-9f98a3a2d74b.png" 
                alt="République du Cameroun" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/69a94ac9-e2db-46b4-81f6-5d66a4b8de0e.png" 
                alt="Tourisme et Loisirs" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/5c2aa87f-65c3-478e-a687-72ee959abc75.png" 
                alt="MINDCAF" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/948950a3-54b2-4f2f-8366-1d63e9e254c5.png" 
                alt="Ministère des Arts et de la Culture" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/442af48f-4a71-413a-9148-808a020be5aa.png" 
                alt="Mairie de Sangmélima" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/cdb45303-444a-4b18-8939-8f2057231b0e.png" 
                alt="SOPECAM" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/dc79591a-5ef3-40fc-9e11-01db558d2e28.png" 
                alt="CAMTEL" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/lovable-uploads/3cbabc46-d657-4881-bd09-ef68aeb0d1db.png" 
                alt="FEICOM" 
                className="h-12 w-auto object-contain"
              />
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
                <span className="text-sm text-gray-300">Carrefour MEPHO, Sangmélima, Cameroun</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">+237 620004018</span>
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
              <li><a href="/aires-culturelles" className="text-gray-300 hover:text-yellow-400 transition-colors">Aires Culturelles</a></li>
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
              © 2025 Monument Paul Biya - République du Cameroun
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Inauguration officielle: 22 août 2025
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
