import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Ruler, Palette, Eye, Camera, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Monument = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu foncé dominant et filigrane architectural */}
      <section className="relative h-96 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 flex items-center justify-center text-white overflow-hidden">
        {/* Photo du Président en fond */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 via-blue-900/50 to-indigo-900/70"></div>
        </div>
        {/* Photo en petit format en bas */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-16 h-20 object-cover rounded-lg"
          />
        </div>
        {/* Filigrane architectural en pleine page */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Crect x='10' y='20' width='80' height='60' rx='5'/%3E%3Crect x='20' y='10' width='60' height='10'/%3E%3Crect x='30' y='85' width='40' height='10'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Architecture Symbolique
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Monument</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            Admirez l'architecture et la symbolique du Monument Paul Biya. 
            Un chef-d'œuvre qui célèbre les quatre grandes aires culturelles du Cameroun à travers ses formes et ses décors uniques.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Un chef-d'œuvre architectural</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Admirez l'architecture et la symbolique du Monument Paul Biya. 
              Un chef-d'œuvre qui célèbre les quatre grandes aires culturelles du Cameroun à travers ses formes et ses décors uniques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Caractéristiques Architecturales</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Hauteur Imposante",
                value: "42 mètres",
                icon: <Ruler className="w-8 h-8" />,
                description: "Une structure majestueuse visible de loin",
                color: "from-indigo-500 to-blue-500"
              },
              {
                title: "Design Moderne",
                value: "Architecture contemporaine",
                icon: <Building className="w-8 h-8" />,
                description: "Mélange harmonieux tradition-modernité",
                color: "from-blue-500 to-slate-500"
              },
              {
                title: "Symbolisme Culturel",
                value: "4 Aires représentées",
                icon: <Palette className="w-8 h-8" />,
                description: "Chaque façade honore une aire culturelle",
                color: "from-slate-500 to-indigo-600"
              },
              {
                title: "Point de Vue Panoramique",
                value: "360° sur Sangmélima",
                icon: <Eye className="w-8 h-8" />,
                description: "Vue imprenable depuis le sommet",
                color: "from-indigo-600 to-blue-600"
              },
              {
                title: "Éclairage Nocturne",
                value: "LED multicolore",
                icon: <Camera className="w-8 h-8" />,
                description: "Illumination spectaculaire la nuit",
                color: "from-blue-600 to-slate-600"
              },
              {
                title: "Emplacement Stratégique",
                value: "Carrefour MEPHO",
                icon: <MapPin className="w-8 h-8" />,
                description: "Au cœur de la ville de Sangmélima",
                color: "from-slate-600 to-indigo-700"
              }
            ].map((feature, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{feature.value}</div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Les Quatre Aires Culturelles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Aire Sawa",
                image: "/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png",
                description: "Représentation des peuples côtiers avec leurs traditions maritimes et leur riche patrimoine culturel.",
                symbolism: "Façade Est du monument",
                colors: "Bleu océan et blanc"
              },
              {
                name: "Aire Grassfield",
                image: "/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png",
                description: "Hommage aux hauts plateaux de l'Ouest avec leurs chefferies traditionnelles et leur artisanat.",
                symbolism: "Façade Ouest du monument", 
                colors: "Vert émeraude et or"
              },
              {
                name: "Aire Fang-Beti",
                image: "/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png",
                description: "Célébration de la forêt équatoriale et des traditions des peuples du Centre et du Sud.",
                symbolism: "Façade Sud du monument",
                colors: "Vert forêt et terre"
              },
              {
                name: "Aire Soudano-Sahélienne",
                image: "/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png",
                description: "Représentation du Nord avec ses traditions pastorales et son patrimoine islamique.",
                symbolism: "Façade Nord du monument",
                colors: "Ocre et rouge brique"
              }
            ].map((aire, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={aire.image} 
                    alt={aire.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{aire.name}</h3>
                    <p className="text-sm opacity-90">{aire.symbolism}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{aire.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{aire.colors}</Badge>
                    <span className="text-sm text-gray-500">Façade représentative</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Vision Architecturale</h2>
            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-lg">
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "Le Monument Paul Biya incarne l'unité dans la diversité. Chaque élément architectural 
                raconte l'histoire d'un Cameroun multiple et uni, où les traditions se mêlent à la modernité 
                pour créer une œuvre d'art vivante au service de la mémoire collective."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-700">Concept architectural du monument</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monument;
