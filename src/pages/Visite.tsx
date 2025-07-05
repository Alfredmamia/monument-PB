
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Camera, Users, Car, Wifi, Phone, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Visite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu ciel lumineux */}
      <section className="relative h-96 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane carte ou plan stylisé */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm0-30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <img 
            src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" 
            alt="Plan du monument" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Informations Pratiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Visite</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            Préparez votre visite : horaires, tarifs, accès, règles à suivre et visite virtuelle 360°. 
            Vivez une expérience immersive au cœur du patrimoine camerounais.
          </p>
        </div>
      </section>

      {/* Informations pratiques avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Informations Pratiques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Horaires</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Lun-Ven: 8h - 18h</p>
                <p>Sam-Dim: 9h - 19h</p>
                <p>Fermé les jours fériés</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Tarifs</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Adultes: 2 000 FCFA</p>
                <p>Étudiants: 1 000 FCFA</p>
                <p>Enfants: Gratuit</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Accès</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Carrefour MEPHO</p>
                <p>Sangmélima</p>
                <p>Parking gratuit</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">Contact</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>+237 620004018</p>
                <p>info@monumentpaulbiya.cm</p>
                <p>Réservation conseillée</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visite 360° avec bleu lumineux */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-sky-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Visite Virtuelle 360°</h2>
            <p className="text-xl text-gray-700 mb-12">
              Découvrez le monument depuis chez vous avec notre visite virtuelle immersive
            </p>
            
            <div className="bg-gradient-to-br from-sky-200 to-blue-300 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20"></div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white relative z-10 shadow-xl">
                <Camera className="w-6 h-6 mr-2" />
                Lancer la Visite 360°
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services disponibles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Services Disponibles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wifi Gratuit",
                icon: <Wifi className="w-8 h-8" />,
                color: "from-sky-500 to-blue-600",
                description: "Connexion internet haut débit dans tout le monument"
              },
              {
                title: "Parking Sécurisé",
                icon: <Car className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
                description: "Stationnement gratuit et surveillé"
              },
              {
                title: "Réservation Groupes",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-blue-700 to-blue-800",
                description: "Visites guidées pour groupes sur réservation"
              }
            ].map((service, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow border-blue-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visite;
