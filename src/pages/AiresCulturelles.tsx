
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Camera, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AiresCulturelles = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond des 4 Aires réunies */}
      <section className="relative h-96 bg-gradient-to-br from-blue-600 via-green-600 to-orange-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/a5ac5fed-04d5-4a22-b854-b99492e91b7a.png" 
            alt="Les 4 Aires Culturelles du Cameroun" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Patrimoine Culturel Camerounais
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Aires Culturelles</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Découvrez la richesse et la diversité des quatre aires culturelles du Cameroun
          </p>
        </div>
      </section>

      {/* Introduction générale */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Les Universaux Culturels du Cameroun</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Le Cameroun, véritable mosaïque culturelle, se distingue par la richesse de ses quatre grandes aires 
              culturelles qui témoignent de la diversité et de l'unité de notre patrimoine national. Chaque aire 
              représente un univers unique avec ses traditions, ses arts, ses langues et ses savoir-faire ancestraux.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <blockquote className="text-lg italic text-gray-800 mb-4">
                "La diversité culturelle du Cameroun est notre plus grande richesse. Elle forge notre identité 
                nationale et unit nos peuples dans leur singularité."
              </blockquote>
              <cite className="text-sm text-gray-600">- Concepteur M. HAMAN</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Aires Culturelles Détaillées */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Aire Culturelle Grassfield */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-80 bg-gradient-to-br from-green-500 to-emerald-600">
                <img 
                  src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" 
                  alt="Aire Culturelle Grassfield" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  Grassfield
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Aire Culturelle Grassfield</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  L'aire Grassfield représente les hauts plateaux de l'Ouest et du Nord-Ouest du Cameroun. 
                  Cette culture se distingue par ses <strong>trônes sculptés majestueux</strong>, symboles du pouvoir royal, 
                  ses <strong>masques rituels</strong> aux formes expressives, et son <strong>artisanat du bronze</strong> 
                  d'une finesse remarquable. Les <strong>tissages traditionnels</strong> et les <strong>instruments de musique</strong> 
                  comme les tambours royaux témoignent d'un savoir-faire ancestral préservé.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Trônes Sculptés</Badge>
                  <Badge variant="outline">Masques Rituels</Badge>
                  <Badge variant="outline">Bronze d'Art</Badge>
                  <Badge variant="outline">Tissages</Badge>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Camera className="w-4 h-4 mr-2" />
                  Explorer cette Aire
                </Button>
              </CardContent>
            </Card>

            {/* Aire Culturelle Sawa */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="relative h-80 bg-gradient-to-br from-blue-500 to-cyan-600">
                <img 
                  src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" 
                  alt="Aire Culturelle Sawa" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Sawa
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Aire Culturelle Sawa</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  L'aire Sawa évoque la culture côtière et fluviale du Cameroun. Elle se caractérise par 
                  ses <strong>pirogues traditionnelles</strong> finement sculptées, ses <strong>habitations sur pilotis</strong> 
                  adaptées aux zones humides, et son <strong>artisanat de la vannerie</strong>. Les <strong>instruments de pêche</strong> 
                  traditionnels et les <strong>masques aquatiques</strong> reflètent l'harmonie avec l'environnement aquatique.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Pirogues Sculptées</Badge>
                  <Badge variant="outline">Architecture Aquatique</Badge>
                  <Badge variant="outline">Vannerie</Badge>
                  <Badge variant="outline">Pêche Traditionnelle</Badge>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Camera className="w-4 h-4 mr-2" />
                  Explorer cette Aire
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Section Vision du Concepteur */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Vision du Concepteur</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "Chaque aire culturelle du Cameroun porte en elle l'âme de nos ancêtres et la promesse de notre avenir. 
                En préservant ces universaux culturels dans le Monument Paul Biya, nous célébrons non seulement notre 
                diversité, mais aussi notre unité indéfectible. Ces objets, ces symboles, ces traditions ne sont pas 
                de simples vestiges du passé, mais des ponts vivants entre nos générations."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-700">M. HAMAN - Concepteur du Monument</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Section Interactive */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Explorez Notre Héritage</h2>
            <p className="text-xl text-gray-600">
              Découvrez comment ces aires culturelles s'intègrent dans l'architecture du monument
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Intégration Architecturale",
                description: "Découvrez comment les motifs de chaque aire sont intégrés dans le design du monument",
                icon: <MapPin className="w-8 h-8" />
              },
              {
                title: "Galerie Interactive",
                description: "Explorez une collection d'objets traditionnels de chaque aire culturelle",
                icon: <Camera className="w-8 h-8" />
              },
              {
                title: "Témoignages Vivants",
                description: "Écoutez les gardiens de la tradition expliquer le sens de chaque élément",
                icon: <Star className="w-8 h-8" />
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                  Découvrir
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiresCulturelles;
