import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, CreditCard, Users, Camera, Smartphone, Car, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Panorama360 from '@/components/Panorama360';

const Visite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero immersif — la visite 360° EST le hero, pas une section parmi d'autres */}
      <section className="relative h-[85dvh] min-h-[520px] max-h-[900px] bg-slate-900 overflow-hidden">
        <Panorama360
          className="absolute inset-0 h-full"
          scenes={[
            { id: 'entree', title: 'Entrée principale', imageUrl: 'https://pannellum.org/images/alma.jpg',
              hotSpots: [{ pitch: -5, yaw: 120, text: 'Vers le hall central', targetSceneId: 'hall' }] },
            { id: 'hall', title: 'Hall central', imageUrl: 'https://pannellum.org/images/bma-0.jpg',
              hotSpots: [{ pitch: -5, yaw: -60, text: "Retour à l'entrée", targetSceneId: 'entree' }] },
          ]}
        />
        {/* Voile de lecture pour le texte, sans masquer l'interactivité du panorama */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-900/85 via-slate-900/20 to-transparent h-56 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent h-32 pointer-events-none"></div>

        <div className="absolute top-0 inset-x-0 pt-10 text-center text-white pointer-events-none px-4">
          <Badge className="mb-3 bg-white/10 text-white/90 border-white/20 tracking-wide">Visite Virtuelle 360°</Badge>
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-2xl">Entrez dans le Monument</h1>
          <p className="text-sm md:text-base opacity-80 mt-2 max-w-xl mx-auto">
            Explorez librement — cliquez-glissez pour regarder autour de vous, puis découvrez les
            informations pratiques ci-dessous
          </p>
        </div>

        <p className="absolute bottom-4 inset-x-0 text-center text-[11px] text-amber-200/90 pointer-events-none">
          Panoramas de démonstration — remplacement par les prises de vue réelles du Monument à venir
        </p>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-50 via-sky-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">Planifiez votre découverte</h2>
            <p className="text-xl text-sky-800 leading-relaxed">
              Préparez votre visite : horaires, tarifs, accès et règles à suivre pour votre venue sur site.
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
                color: "from-sky-500 to-sky-500",
                details: ["Lun-Ven: 8h - 18h", "Sam-Dim: 9h - 19h", "Jours fériés: 10h - 16h"]
              },
              {
                title: "Localisation",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-sky-500 to-cyan-500",
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
                color: "from-sky-600 to-sky-600",
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
                color: "from-sky-400 to-sky-400"
              },
              {
                title: "Visite Premium",
                duration: "2h30",
                price: "5 000 FCFA",
                description: "Expérience enrichie avec accès aux espaces VIP",
                includes: ["Tout inclus Standard", "Accès sommet", "Rafraîchissement", "Photos professionnelles"],
                color: "from-sky-500 to-cyan-500",
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

      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4">La visite immersive se trouve en haut de cette page ↑</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-national-green rounded-full"></div>Navigation à la souris / tactile</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-national-green rounded-full"></div>Points d'intérêt cliquables</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-national-green rounded-full"></div>Multi-scènes (entrée → hall)</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visite;
