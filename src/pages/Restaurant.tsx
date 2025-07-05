
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Clock, Users, Star, Phone, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Restaurant = () => {
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
            Gastronomie Camerounaise
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Restaurant</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Savourez la gastronomie camerounaise et internationale dans un cadre prestigieux
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Saveurs et convivialité</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Savourez la gastronomie camerounaise et internationale dans un cadre prestigieux. 
              Réservez votre table pour un moment inoubliable.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nos Spécialités</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ndolé aux Crevettes",
                description: "Plat traditionnel camerounais aux feuilles de ndolé, crevettes fraîches et arachides",
                price: "8 500 FCFA",
                category: "Plats Traditionnels",
                rating: 5
              },
              {
                name: "Poisson Braisé",
                description: "Poisson frais grillé aux épices locales, accompagné de plantain et légumes",
                price: "7 200 FCFA",
                category: "Grillades",
                rating: 5
              },
              {
                name: "Poulet DG",
                description: "Poulet aux légumes sautés, recette du Directeur Général",
                price: "6 800 FCFA",
                category: "Plats Signature",
                rating: 4
              },
              {
                name: "Koki de Maïs",
                description: "Spécialité de l'Ouest à base de maïs, haricots et épices",
                price: "4 500 FCFA",
                category: "Végétarien",
                rating: 4
              },
              {
                name: "Saumon Grillé",
                description: "Saumon atlantique grillé, sauce citron-gingembre",
                price: "12 000 FCFA",
                category: "International",
                rating: 5
              },
              {
                name: "Tarte aux Fruits Tropicaux",
                description: "Dessert maison aux fruits de saison et crème pâtissière",
                price: "3 200 FCFA",
                category: "Desserts",
                rating: 4
              }
            ].map((dish, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-cyan-200 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-white/90">{dish.category}</Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 flex">
                    {Array.from({ length: dish.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{dish.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{dish.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
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
                <p>Événements privés</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Réservation</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>+237 620004018</p>
                <p>resto@monumentpaulbiya.cm</p>
                <p>Réservation recommandée</p>
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
                  <h3 className="text-xl font-bold text-gray-800">Réservation en ligne</h3>
                  <p className="text-gray-700">
                    Réservez directement via notre plateforme sécurisée
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="w-5 h-5 mr-2" />
                    Réserver en Ligne
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">Réservation téléphonique</h3>
                  <p className="text-gray-700">
                    Appelez-nous pour une réservation personnalisée
                  </p>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Phone className="w-5 h-5 mr-2" />
                    +237 620004018
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
