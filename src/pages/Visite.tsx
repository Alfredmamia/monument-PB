
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Camera, Users, Car, Eye, Calendar, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Visite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Sawa selon la répartition */}
      <section className="relative h-96 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" 
            alt="Aire Culturelle Sawa" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-cyan-500/40 to-teal-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Informations Pratiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Visite</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Préparez votre visite : horaires, tarifs, accès et visite virtuelle 360°
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Préparez votre venue !</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Préparez votre visite : horaires, tarifs, accès, règles à suivre et visite virtuelle 360°. 
              Vivez une expérience immersive au cœur du patrimoine camerounais.
            </p>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Informations Pratiques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Horaires</h3>
              <div className="space-y-2 text-gray-600">
                <p>Lundi - Vendredi: 8h - 18h</p>
                <p>Samedi: 9h - 19h</p>
                <p>Dimanche: 10h - 17h</p>
                <p className="text-sm text-blue-600 mt-3">Fermeture les jours fériés</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Localisation</h3>
              <div className="space-y-2 text-gray-600">
                <p>Carrefour MEPHO</p>
                <p>Sangmélima, Cameroun</p>
                <p>Région du Sud</p>
                <Button variant="outline" size="sm" className="mt-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  Voir sur la carte
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tarifs</h3>
              <div className="space-y-2 text-gray-600">
                <p>Adulte: 2000 FCFA</p>
                <p>Enfant (-12 ans): 1000 FCFA</p>
                <p>Étudiant: 1500 FCFA</p>
                <p className="text-sm text-green-600 mt-3">Groupe (+10): -20%</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accès</h3>
              <div className="space-y-2 text-gray-600">
                <p>Parking gratuit disponible</p>
                <p>Accès PMR</p>
                <p>Transport public: Bus 15, 22</p>
                <p className="text-sm text-blue-600 mt-3">Navette depuis l'aéroport</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visites Guidées</h3>
              <div className="space-y-2 text-gray-600">
                <p>Français, Anglais, Ewondo</p>
                <p>Durée: 1h30</p>
                <p>Groupes max: 25 personnes</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Réserver
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>+237 620004018</p>
                <p>info@monumentpaulbiya.cm</p>
                <p>Réservations recommandées</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Appeler
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visite Virtuelle */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Visite Virtuelle 360°</h2>
            <p className="text-xl text-gray-600 mb-12">
              Découvrez le monument depuis chez vous avec notre visite immersive
            </p>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-white/80 rounded-lg flex items-center justify-center mb-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Eye className="w-6 h-6 mr-2" />
                  Lancer la Visite 360°
                </Button>
              </div>
              <p className="text-gray-700">
                Explorez chaque espace, découvrez les détails architecturaux et plongez dans l'histoire du monument
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Règles et Conseils */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Règles et Conseils</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">À faire</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Respecter les horaires de visite</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Porter une tenue correcte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Suivre les indications du guide</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Prendre des photos (zones autorisées)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600">À éviter</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Toucher les œuvres d'art</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Faire du bruit excessif</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Fumer à l'intérieur</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Introduire de la nourriture</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visite;
