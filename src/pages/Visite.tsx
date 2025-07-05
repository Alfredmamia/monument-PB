import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, CreditCard, Users, Camera, Smartphone, Car, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Visite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu ciel lumineux et filigrane carte */}
      <section className="relative h-96 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 flex items-center justify-center text-white overflow-hidden">
        {/* Photo du Président en fond */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/60 via-sky-500/40 to-blue-600/60"></div>
        </div>
        {/* Photo en petit format en bas */}
        <div className="absolute bottom-4 right-4 opacity-25">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-16 h-20 object-cover rounded-lg"
          />
        </div>
        {/* Filigrane carte stylisé */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-repeat opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 30h60v40H20V30zm10 10h40v20H30V40z'/%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3Cpath d='M15 80l20-10 20 5 15-5 15 5v10H15V80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
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

      <section className="py-20 bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">Planifiez votre découverte</h2>
            <p className="text-xl text-sky-800 leading-relaxed">
              Préparez votre visite : horaires, tarifs, accès, règles à suivre et visite virtuelle 360°. 
              Vivez une expérience immersive au cœur du patrimoine camerounais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Informations Essentielles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Horaires",
                icon: <Clock className="w-8 h-8" />,
                color: "from-sky-500 to-blue-500",
                details: ["Lun-Ven: 8h - 18h", "Sam-Dim: 9h - 19h", "Jours fériés: 10h - 16h"]
              },
              {
                title: "Localisation",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                details: ["Carrefour MEPHO", "Sangmélima", "Région du Sud"]
              },
              {
                title: "Tarifs",
                icon: <CreditCard className="w-8 h-8" />,
                color: "from-cyan-500 to-sky-600",
                details: ["Adulte: 2 500 FCFA", "Enfant: 1 000 FCFA", "Groupe: Tarif préférentiel"]
              },
              {
                title: "Capacité",
                icon: <Users className="w-8 h-8" />,
                color: "from-sky-600 to-blue-600",
                details: ["Max 50 personnes", "Visite guidée incluse", "Réservation conseillée"]
              }
            ].map((info, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300 border-sky-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-sky-900">{info.title}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{detail}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Types de Visites</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Visite Guidée Standard",
                duration: "1h30",
                price: "2 500 FCFA",
                description: "Découverte complète du monument avec guide professionnel",
                includes: ["Accès au monument", "Guide francophone", "Brochure souvenir"],
                color: "from-sky-400 to-blue-400"
              },
              {
                title: "Visite Premium",
                duration: "2h30",
                price: "5 000 FCFA",
                description: "Expérience enrichie avec accès aux espaces VIP",
                includes: ["Tout inclus Standard", "Accès sommet", "Rafraîchissement", "Photos professionnelles"],
                color: "from-blue-500 to-cyan-500",
                popular: true
              },
              {
                title: "Visite Groupe/Scolaire",
                duration: "1h15",
                price: "1 500 FCFA",
                description: "Adaptée aux groupes scolaires et associations",
                includes: ["Guide pédagogique", "Support éducatif", "Tarif préférentiel"],
                color: "from-cyan-500 to-sky-500"
              }
            ].map((visit, index) => (
              <Card key={index} className={`group overflow-hidden hover:shadow-lg transition-shadow ${visit.popular ? 'border-2 border-sky-500' : 'border-sky-200'}`}>
                {visit.popular && (
                  <Badge className="absolute top-2 right-2 z-10 bg-sky-500 text-white">
                    Populaire
                  </Badge>
                )}
                <div className={`h-32 bg-gradient-to-br ${visit.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{visit.title}</h3>
                    <p className="text-sm opacity-90">{visit.duration}</p>
                  </div>
                  <div className="absolute top-4 right-4 text-white">
                    <div className="text-lg font-bold">{visit.price}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{visit.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sky-900">Inclus :</h4>
                    {visit.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    Réserver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Conseils pour votre Visite</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Équipement Recommandé",
                icon: <Camera className="w-8 h-8" />,
                tips: ["Appareil photo", "Chaussures confortables", "Chapeau/casquette", "Crème solaire"]
              },
              {
                title: "Application Mobile",
                icon: <Smartphone className="w-8 h-8" />,
                tips: ["Téléchargez l'app", "Audio-guide gratuit", "Réalité augmentée", "Plan interactif"]
              },
              {
                title: "Accès et Parking",
                icon: <Car className="w-8 h-8" />,
                tips: ["Parking gratuit", "Accès transport public", "Zone handicapés", "Navette depuis le centre"]
              },
              {
                title: "Règlement",
                icon: <Info className="w-8 h-8" />,
                tips: ["Respect du site", "Photos autorisées", "Silence dans certaines zones", "Guidage obligatoire"]
              }
            ].map((conseil, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-sky-200">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-sky-600">{conseil.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center text-sky-900">{conseil.title}</h3>
                <ul className="space-y-2">
                  {conseil.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">Visite Virtuelle 360°</h2>
            <p className="text-xl text-sky-800 mb-12">
              Explorez le monument depuis chez vous avec notre visite virtuelle immersive
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-sky-200 to-blue-300 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                  <p className="text-sky-800 font-semibold">Visite Virtuelle 360°</p>
                  <p className="text-sky-600 text-sm">Cliquez pour démarrer l'expérience</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Compatible VR</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Haute définition</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Audio immersif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visite;
