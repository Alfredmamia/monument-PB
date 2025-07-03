
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Camera, Users, Award, Play, ArrowRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Bannière pleine page avec les 4 aires réunies */}
      <section className="relative h-screen bg-gradient-to-br from-yellow-600 via-red-600 to-green-700 flex items-center justify-center text-white overflow-hidden">
        {/* Effet de parallaxe avec motifs des 4 aires */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Crect x='20' y='20' width='40' height='40'/%3E%3Cpolygon points='40,10 60,50 20,50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            Patrimoine National du Cameroun
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight">
            Monument
            <span className="block text-yellow-300 drop-shadow-lg">Paul Biya</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-95 animate-fade-in font-light max-w-4xl mx-auto leading-relaxed">
            « Gardien de notre mémoire, reflet de notre avenir »
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold">
              <Play className="w-6 h-6 mr-3" />
              Découvrir l'Histoire
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 text-lg px-8 py-4 rounded-full font-semibold">
              <Camera className="w-6 h-6 mr-3" />
              Voir la Galerie
            </Button>
          </div>
        </div>
      </section>

      {/* Section Présentation Rapide */}
      <section className="py-24 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 relative">
        {/* Motifs traditionnels en filigrane */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D97706'%3E%3Cpath d='M50 15c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35 15.67-35 35-35zm0 10c-13.81 0-25 11.19-25 25s11.19 25 25 25 25-11.19 25-25S63.81 25 50 25z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Un Patrimoine Vivant</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Le Monument Paul Biya incarne l'essence de notre nation, témoignant de l'héritage exceptionnel 
              d'un leader visionnaire et de l'unité culturelle du Cameroun moderne. Un lieu où l'histoire 
              rencontre l'avenir, où la mémoire nourrit l'espoir.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold">
              En Savoir Plus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section Cards avec les 3 piliers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Trois Piliers Fondamentaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les valeurs qui font de ce monument un symbole national incontournable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Héritage Présidentiel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Célébrant des décennies de leadership exceptionnel et de service dévoué à la nation camerounaise, 
                  ce monument honore un parcours politique remarquable.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-pink-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Unité Nationale</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un symbole puissant d'unité et de cohésion pour tous les Camerounais, 
                  transcendant les différences pour célébrer notre diversité dans l'harmonie.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Patrimoine Culturel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une œuvre architecturale exceptionnelle qui enrichit le patrimoine culturel national 
                  et inspire les générations futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Actualités & Événements */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Actualités & Événements</h2>
            <p className="text-xl text-gray-600">
              Restez informé des dernières nouvelles et événements culturels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inauguration Officielle",
                date: "15 Décembre 2024",
                description: "Cérémonie d'inauguration en présence des plus hautes autorités",
                image: "ceremony"
              },
              {
                title: "Exposition Culturelle",
                date: "20 Janvier 2025",
                description: "Exposition sur les quatre aires culturelles du Cameroun",
                image: "culture"
              },
              {
                title: "Visite Guidée Spéciale",
                date: "5 Février 2025",
                description: "Visite guidée avec l'architecte concepteur du monument",
                image: "visit"
              }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-yellow-200 to-red-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <Camera className="w-12 h-12 text-white/80 relative z-10" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-yellow-600 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                    En Savoir Plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie d'images & vidéos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Galerie Immersive</h2>
            <p className="text-xl text-gray-600">
              Découvrez la beauté architecturale et l'importance historique du monument
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Architecture", color: "from-blue-500 to-cyan-500" },
              { category: "Cérémonies", color: "from-purple-500 to-pink-500" },
              { category: "Visiteurs", color: "from-green-500 to-emerald-500" },
              { category: "Paysages", color: "from-orange-500 to-red-500" },
              { category: "Art & Culture", color: "from-yellow-500 to-orange-500" },
              { category: "Histoire", color: "from-indigo-500 to-purple-500" }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="text-center relative z-10">
                    <Camera className="w-16 h-16 text-white/90 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">{item.category}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black font-semibold">
                    Explorer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
