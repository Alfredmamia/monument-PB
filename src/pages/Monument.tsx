
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Ruler, Palette, Eye, Camera, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Monument = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
      <Header />
      
      {/* Hero Section avec bleu ciel dominant et filigrane architectural */}
      <section className="relative h-96 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-900 flex items-center justify-center text-white overflow-hidden">
        {/* Photo du Président en fond */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/50 to-blue-900/70"></div>
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
      <section className="py-20 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Un chef-d'œuvre architectural</h2>
            <p className="text-xl text-blue-800 leading-relaxed mb-8">
              Admirez l'architecture et la symbolique du Monument Paul Biya. 
              Un chef-d'œuvre qui célèbre les quatre grandes aires culturelles du Cameroun à travers ses formes et ses décors uniques.
            </p>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-blue-900 mb-4">
                <strong>Maître d'Œuvre Architectural</strong>
              </p>
              <p className="text-blue-800 italic">
                "Cette œuvre architecturale moderne dialogue avec les traditions ancestrales du Cameroun, 
                créant un symbole d'unité nationale à travers la diversité culturelle."
              </p>
              <cite className="text-sm text-blue-700 block mt-2">
                - KPOLOM BILONG Dieudonné, Concepteur architectural du Monument et des structures connexes
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Évolution du Projet avec Images */}
      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Évolution du Projet</h2>
          
          {/* Présentation des composantes */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-xl">
              <div className="h-96 relative">
                <img 
                  src="/lovable-uploads/7152caed-1e07-4b62-b75e-43ee466390e9.png" 
                  alt="Composantes du projet Monument Paul Biya"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Composantes du Programme Global</h3>
                <p className="text-blue-800">
                  Évolution des composantes du programme global du monument Paul Biya et ses équipements connexes 
                  dans la ville de Sangmélima, de l'initiative en janvier 2021 aux réalisations concrètes en avril 2025.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Statue et Architecture Principale */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden shadow-xl">
              <div className="h-80 relative">
                <img 
                  src="/lovable-uploads/fd7d2281-1023-47f3-9daa-80f39ede1664.png" 
                  alt="Statue du Monument Paul Biya"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Statue Monumentale</h3>
                <p className="text-blue-800 text-sm">
                  Juste face à l'entrée principale du monument, Paul BIYA, lui-même admirera ainsi l'immensité 
                  de son parcours et de ses œuvres.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl">
              <div className="h-80 relative">
                <img 
                  src="/lovable-uploads/7f307549-6fc5-4315-a87a-c49a295a0543.png" 
                  alt="Symbolisme architectural"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Symbolisme Architectural</h3>
                <p className="text-blue-800 text-sm">
                  Le Monument Paul BIYA est matérialisé par une calebasse renversée, signe de sauvegarde 
                  des acquis durant le Magistère du Fils Prodigue du Dja et Lobo.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Variantes Architecturales */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Variantes Architecturales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-xl">
                <div className="h-96 relative">
                  <img 
                    src="/lovable-uploads/972e95e9-d4e4-42af-b5e3-faebfca0e4a5.png" 
                    alt="Variantes architecturales du monument"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Études Architecturales</h4>
                  <p className="text-blue-800 text-sm">
                    Différentes variantes d'images initiales du Monument prévues au lieu-dit Ayebe Yekombo 
                    et celles reconfigurées pour le lieu-dit MEPHO dans la ville de Sangmélima.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl">
                <div className="h-96 relative">
                  <img 
                    src="/lovable-uploads/e6f228dd-e8d6-4929-8122-8b72b2ac7eb3.png" 
                    alt="Monument sous différents angles"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Perspectives Finales</h4>
                  <p className="text-blue-800 text-sm">
                    Autres variantes d'images initiales du Monument prévu au lieu-dit Ayebe Yekombo 
                    et celles reconfigurées pour le lieu-dit MEPHO dans la ville de Sangmélima.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Équipements Connexes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Équipements Connexes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-xl">
                <div className="h-80 relative">
                  <img 
                    src="/lovable-uploads/44198484-3ff1-44da-a83d-bb2fb0e43300.png" 
                    alt="Case d'accueil présidentiel"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Case d'Accueil Présidentiel</h4>
                  <p className="text-blue-800 text-sm">
                    La Construction d'une case d'accueil VVIP conçue et réalisée pour constituer un espace 
                    de repos et d'accueil VIP durant et après la cérémonie d'inauguration du Monument.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl">
                <div className="h-80 relative">
                  <img 
                    src="/lovable-uploads/98207a5b-f77a-4173-8cd0-005a5c1bf4b8.png" 
                    alt="Bloc boutique et snack bar"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Bloc Boutique et Snack Bar</h4>
                  <p className="text-blue-800 text-sm">
                    Le bloc boutique et petit snack bar restaurant de la cité décongestionnés de six bungalows 
                    aux berges du fleuve Lobo connexes au monument Paul Biya à Sangmélima.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl">
                <div className="h-80 relative">
                  <img 
                    src="/lovable-uploads/498466bf-d895-4904-9894-f15bac0badbe.png" 
                    alt="Cercle municipal"
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Modernisation du Cercle Municipal</h4>
                  <p className="text-blue-800 text-sm">
                    Le cercle municipal actuel devrait également être restructuré pour moderniser une salle 
                    de fête à proximité du restaurant du boulevard Paul Biya à Sangmélima.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Évolution Construction */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Évolution de la Construction</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-xl">
                <div className="h-96 relative">
                  <img 
                    src="/lovable-uploads/0af22208-5b03-433d-bd03-ee1b9e9ab49b.png" 
                    alt="Images d'études et photos des chantiers"
                    className="w-full h-full object-contain bg-blue-400"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Évolution du Chantier</h4>
                  <p className="text-blue-800 text-sm">
                    Quelques images du chantier dans son évolution entre janvier 2021 et fin avril 2025. 
                    Images d'études et photos des chantiers/extraits des rapports de l'architecte et maître d'œuvre.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl">
                <div className="h-96 relative">
                  <img 
                    src="/lovable-uploads/039d4b5e-36f7-4b0f-ad16-49fc4e3b8c7c.png" 
                    alt="Variantes finales"
                    className="w-full h-full object-contain bg-blue-400"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Finitions et Aménagements</h4>
                  <p className="text-blue-800 text-sm">
                    Variantes finales présentant les recollements des VRD, de la clôture, ainsi que de la cage 
                    ascenseur donnant sur terrasse panoramique supportant écrans géants au sommet du Monument.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Caractéristiques Architecturales</h2>
          
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
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300 bg-white">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">{feature.title}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{feature.value}</div>
                <p className="text-blue-700 text-sm">{feature.description}</p>
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

      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Vision Architecturale</h2>
            <div className="bg-gradient-to-r from-white/80 to-white/90 p-8 rounded-lg">
              <blockquote className="text-xl italic text-blue-900 mb-6 leading-relaxed">
                "Le Monument Paul Biya incarne l'unité dans la diversité. Chaque élément architectural 
                raconte l'histoire d'un Cameroun multiple et uni, où les traditions se mêlent à la modernité 
                pour créer une œuvre d'art vivante au service de la mémoire collective."
              </blockquote>
              <cite className="text-lg font-semibold text-blue-800">
                KPOLOM BILONG Dieudonné - Concepteur architectural du Monument et des structures connexes
              </cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monument;
