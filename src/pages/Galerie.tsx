import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Video, Image, Users, Calendar, Download, Share2, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Galerie = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec mosaïque sur fond bleu pâle */}
      <section className="relative h-96 bg-gradient-to-br from-blue-100 via-sky-200 to-blue-300 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane artistique en transparence */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" 
            alt="Aire Culturelle Soudano-Sahélienne" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-sky-300/20 to-blue-500/30"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Galerie Multimédia
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-blue-900">Galerie</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-blue-800">
            Explorez nos photos, vidéos et œuvres d'artistes inspirés par le monument. 
            Revivez les plus beaux moments et découvrez la richesse culturelle de Sangmélima.
          </p>
        </div>
      </section>

      {/* Introduction avec fond bleu pâle */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Plongez dans l'image</h2>
            <p className="text-xl text-blue-800 leading-relaxed">
              Explorez nos photos, vidéos et œuvres d'artistes inspirés par le monument. 
              Revivez les plus beaux moments et découvrez la richesse culturelle de Sangmélima.
            </p>
          </div>
        </div>
      </section>

      {/* Categories de Galerie avec nuances de bleu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Collections</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Architecture",
                count: "120+ photos",
                color: "from-blue-400 to-blue-500",
                icon: <Camera className="w-8 h-8" />
              },
              {
                title: "Événements",
                count: "45 vidéos",
                color: "from-blue-500 to-blue-600",
                icon: <Video className="w-8 h-8" />
              },
              {
                title: "Œuvres d'Art",
                count: "80+ créations",
                color: "from-blue-600 to-blue-700",
                icon: <Image className="w-8 h-8" />
              },
              {
                title: "Visiteurs",
                count: "200+ témoignages",
                color: "from-blue-700 to-blue-800",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Construction",
                count: "60 étapes",
                color: "from-blue-800 to-blue-900",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                title: "Paysages",
                count: "90+ vues",
                color: "from-sky-500 to-blue-600",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-200">
                <div className={`h-48 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 border-blue-300 text-blue-600">
                    Explorer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Principal */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Photos Récentes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }, (_, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow border-blue-100">
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-sky-200 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white/0 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white border-blue-300 text-blue-600">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Photo {index + 1}</span>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="p-1 text-blue-600 hover:bg-blue-50">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-1 text-blue-600 hover:bg-blue-50">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Participative avec fond bleu */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Partagez vos Souvenirs</h2>
            <p className="text-xl text-blue-800 mb-12">
              Vous avez visité le monument ? Partagez vos photos et vidéos avec la communauté !
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center border-blue-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Téléchargez</h3>
                <p className="text-gray-600 text-sm">Partagez vos plus belles photos du monument</p>
              </Card>

              <Card className="p-6 text-center border-blue-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Créez</h3>
                <p className="text-gray-600 text-sm">Réalisez des vidéos créatives de votre visite</p>
              </Card>

              <Card className="p-6 text-center border-blue-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-900">Partagez</h3>
                <p className="text-gray-600 text-sm">Utilisez #MonumentPaulBiya sur les réseaux</p>
              </Card>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white shadow-xl">
              <Camera className="w-5 h-5 mr-2" />
              Contribuer à la Galerie
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
