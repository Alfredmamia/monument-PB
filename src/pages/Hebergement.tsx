import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Wifi, Car, Coffee, Phone, Calendar, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Hebergement = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu pastel et filigrane bungalow/nature */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-sky-950 to-national-green flex items-center justify-center text-white overflow-hidden pattern-institutional">
        {/* Filigrane bungalow et nature */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-repeat opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M10 40h20l10-15 10 15h20v30H10V40z'/%3E%3Ccircle cx='60' cy='20' r='8'/%3E%3Cpath d='M5 70c0-5 5-10 10-10s10 5 10 10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-sky-300/30 to-sky-400/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Hospitalité Camerounaise
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-sky-900">Hébergement</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-sky-800">
            Des bungalows tout confort sont en cours de finalisation à deux pas du monument. 
            Ouverture prochaine — revenez bientôt pour réserver votre séjour à Sangmélima.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Dormez sur place</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Des bungalows tout confort sont en cours de finalisation à deux pas du monument.
              Ouverture prochaine — revenez bientôt pour réserver votre séjour à Sangmélima.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'Hébergement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nos Bungalows</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bungalow Standard",
                capacity: "2 personnes",
                price: "25 000 FCFA/nuit",
                features: ["Lit double", "Salle de bain privée", "Climatisation", "Wifi gratuit"],
                color: "from-orange-400 to-red-400",
                rating: 4
              },
              {
                name: "Bungalow Familial",
                capacity: "4 personnes",
                price: "40 000 FCFA/nuit",
                features: ["2 lits doubles", "Salon", "Kitchenette", "Terrasse privée"],
                color: "from-red-400 to-pink-400",
                rating: 5,
                popular: true
              },
              {
                name: "Suite Présidentielle",
                capacity: "6 personnes",
                price: "65 000 FCFA/nuit",
                features: ["3 chambres", "Salon VIP", "Cuisine équipée", "Jacuzzi"],
                color: "from-pink-400 to-purple-400",
                rating: 5
              }
            ].map((room, index) => (
              <Card key={index} className={`group overflow-hidden hover:shadow-xl transition-shadow ${room.popular ? 'border-2 border-orange-500' : ''}`}>
                {room.popular && (
                  <Badge className="absolute top-2 right-2 z-10 bg-orange-500 text-white">
                    Le plus populaire
                  </Badge>
                )}
                <div className={`h-48 bg-gradient-to-br ${room.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bed className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 flex">
                    {Array.from({ length: room.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{room.name}</h3>
                    <span className="text-lg font-bold text-orange-600">{room.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.capacity}</p>
                  <ul className="space-y-1 mb-4">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" disabled>
                    Bientôt Disponible
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services et Équipements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Services Inclus</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wifi Gratuit",
                icon: <Wifi className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                description: "Internet haut débit dans tous les bungalows"
              },
              {
                title: "Parking Privé",
                icon: <Car className="w-8 h-8" />,
                color: "from-red-500 to-pink-500",
                description: "Stationnement sécurisé gratuit"
              },
              {
                title: "Petit-déjeuner",
                icon: <Coffee className="w-8 h-8" />,
                color: "from-pink-500 to-purple-500",
                description: "Petit-déjeuner continental inclus"
              },
              {
                title: "Conciergerie",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500",
                description: "Service 24h/24 pour votre confort"
              }
            ].map((service, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-300">Ouverture Prochaine</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">L'Hébergement Arrive Bientôt</h2>
            <p className="text-xl text-gray-600 mb-12">
              Les bungalows sont en cours de finalisation. La réservation en ligne ouvrira dès la mise
              en service — en attendant, notre équipe reste joignable pour toute question.
            </p>
            
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Réservation en ligne</h3>
                  <p className="text-gray-700">
                    Disponible dès l'ouverture officielle de l'hébergement
                  </p>
                  <Button size="lg" className="bg-orange-300 text-white cursor-not-allowed" disabled>
                    <Calendar className="w-5 h-5 mr-2" />
                    Bientôt Disponible
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Besoin d'aide ?</h3>
                  <p className="text-gray-700">
                    Notre équipe peut déjà répondre à vos questions
                  </p>
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50" asChild>
                    <a href="tel:+237620004018">
                      <Phone className="w-5 h-5 mr-2" />
                      +237 620004018
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Galerie Photos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Bed className="w-8 h-8 text-white/0 group-hover:text-white/80 transition-colors" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hebergement;
