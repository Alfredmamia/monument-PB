
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Clock, Users, Star, Phone, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Restaurant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300">
      <Header />
      
      {/* Hero Section avec image phare du restaurant */}
      <section className="relative h-96 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond du restaurant */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/07343eb9-7b5a-4c93-8b44-eb37c618a84d.png" 
            alt="Restaurant La Marraine"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/60 via-blue-400/40 to-blue-500/60"></div>
        </div>
        
        {/* Petite image en coin */}
        <div className="absolute bottom-4 right-4 w-24 h-24 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Monument Paul Biya"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Restaurant La Marraine
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-white">Restaurant</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-white">
            Savourez la gastronomie camerounaise dans un cadre prestigieux. 
            Commandes et livraisons à domicile disponibles.
          </p>
        </div>
      </section>

      {/* Introduction avec images des plats */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Saveurs et convivialité</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Découvrez nos spécialités grillées et nos plats traditionnels camerounais 
                  préparés avec passion dans notre restaurant La Marraine.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Commandes et Livraisons</h3>
                  <p className="text-blue-700 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-bold">6 90 34 31 66</span>
                  </p>
                  <p className="text-sm text-blue-600 mt-1">Livraison à domicile disponible</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/aae48f70-425f-4116-90cc-4942e4c1b471.png" 
                  alt="Grillades de crevettes"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/lovable-uploads/1a3d5a42-8617-4007-bca2-2c0dfa79db14.png" 
                  alt="Plat traditionnel camerounais"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Menu avec images des plats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Notre Menu</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Porc fumé",
                  price: "3 000 FCFA",
                  emoji: "🥓",
                  description: "Porc fumé aux épices locales, tendre et savoureux",
                  image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Poulet fumé",
                  price: "3 000 FCFA", 
                  emoji: "🍗",
                  description: "Poulet fumé traditionnel, grillé à la perfection",
                  image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Bar frais",
                  price: "à partir de 4 000 FCFA",
                  emoji: "🐟",
                  description: "Poisson bar frais du jour, grillé ou braisé",
                  image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Gambas",
                  price: "5 000 FCFA",
                  emoji: "🍤", 
                  description: "Grosses crevettes grillées aux épices",
                  image: "/lovable-uploads/aae48f70-425f-4116-90cc-4942e4c1b471.png"
                },
                {
                  name: "Poisson Sol",
                  price: "7 000/8 000 FCFA et plus",
                  emoji: "🐟",
                  description: "Poisson Sol frais selon taille et préparation",
                  image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Beignets & Omelettes",
                  price: "1 000 - 1 500 FCFA",
                  emoji: "🥞",
                  description: "Beignets haricots, omelettes garnies au saucisson",
                  image: "/lovable-uploads/81a852a2-5ee7-43df-ab5a-4900c14c3b9e.png"
                }
              ].map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{dish.emoji}</span>
                            <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
                          </div>
                          <span className="text-lg font-bold text-blue-600">{dish.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{dish.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
              <img 
                src="/lovable-uploads/07343eb9-7b5a-4c93-8b44-eb37c618a84d.png" 
                alt="Restaurant La Marraine" 
                className="w-32 h-24 object-cover rounded-lg mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commandez maintenant !</h3>
              <p className="text-gray-700 mb-6">Appelez-nous pour passer commande ou pour une livraison à domicile</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4">
                <Phone className="w-6 h-6 mr-3" />
                6 90 34 31 66
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Informations Pratiques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Horaires</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Déjeuner: 12h - 15h</p>
                <p>Dîner: 19h - 23h</p>
                <p>Service continu week-end</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Capacité</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Salle principale: 120 places</p>
                <p>Terrasse: 60 places</p>
                <p>Salons privés: 40 places</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Services</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Wifi gratuit</p>
                <p>Parking valet</p>
                <p>Livraison à domicile</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-bold">6 90 34 31 66</p>
                <p>resto@monumentpaulbiya.com</p>
                <p>Commandes & Livraisons</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Réservez votre Table</h2>
            <p className="text-xl text-gray-600 mb-12">
              Garantissez-vous une expérience culinaire exceptionnelle
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Réservation & Commandes</h3>
                  <p className="text-gray-700">
                    Appelez-nous pour réserver ou commander
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    6 90 34 31 66
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Livraison à domicile</h3>
                  <p className="text-gray-700">
                    Service de livraison disponible dans Sangmélima
                  </p>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Calendar className="w-5 h-5 mr-2" />
                    Commander maintenant
                  </Button>
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

export default Restaurant;
