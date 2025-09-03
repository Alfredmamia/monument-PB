import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ShoppingBag, Crown, Award, Star, CreditCard, Truck, Gift, Watch, Shield, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import boutiqueBanner from '@/assets/boutique-banner-new.jpg';

// Import product images
import pinsPresidentielImage from '@/assets/products/pins-presidentiel-dore.jpg';
import porteClesMonumentImage from '@/assets/products/porte-cles-monument.jpg';
import braceletTricoloreImage from '@/assets/products/bracelet-tricolore.jpg';
import medailleCommemorativeImage from '@/assets/products/medaille-commemorative.jpg';
import masqueFangImage from '@/assets/products/masque-fang.jpg';
import marquePagePresidentielImage from '@/assets/products/marque-page-presidentiel.jpg';
import pendentifLionImage from '@/assets/products/pendentif-lion.jpg';
import mugPalaisUniteImage from '@/assets/products/mug-palais-unite.jpg';
import collierBamounImage from '@/assets/products/collier-bamoun.jpg';
import calendrier2025Image from '@/assets/products/calendrier-2025.jpg';
import eventailBassaImage from '@/assets/products/eventail-bassa.jpg';
import badgeUniteNationaleImage from '@/assets/products/badge-unite-nationale.jpg';
import cahierPresidentielImage from '@/assets/products/cahier-presidentiel.jpg';
import tambourinKotokoImage from '@/assets/products/tambourin-kotoko.jpg';
import coffretVipImage from '@/assets/products/coffret-vip.jpg';

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = [
    {
      name: "Pin's Présidentiel Doré",
      price: "2 500 FCFA",
      category: "Héritage Présidentiel",
      description: "Pin's officiel à l'effigie du Président Paul BIYA en métal doré",
      tooltip: "Insigne de prestige porté lors des cérémonies officielles, symbole de respect et d'honneur",
      color: "from-yellow-600 to-yellow-700",
      bestseller: true,
      icon: <Crown className="w-8 h-8" />,
      image: pinsPresidentielImage
    },
    {
      name: "Porte-clés Monument",
      price: "1 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Miniature du Monument Paul BIYA en métal précieux",
      tooltip: "Réplique détaillée du Monument, parfaite pour emporter un morceau d'histoire avec soi",
      color: "from-emerald-600 to-emerald-700",
      icon: <Award className="w-8 h-8" />,
      image: porteClesMonumentImage
    },
    {
      name: "Bracelet Tricolore",
      price: "3 200 FCFA",
      category: "Symboles de l'Unité",
      description: "Bracelet aux couleurs du drapeau camerounais",
      tooltip: "Symbole d'unité nationale porté fièrement par les citoyens patriotes",
      color: "from-red-600 to-red-700",
      icon: <Star className="w-8 h-8" />,
      image: braceletTricoloreImage
    },
    {
      name: "Médaille Commémorative",
      price: "8 500 FCFA",
      category: "Collections Millésimées",
      description: "Médaille édition spéciale 42 ans de leadership",
      tooltip: "Pièce collector gravée commemorant les réalisations exceptionnelles du Président",
      color: "from-purple-600 to-purple-700",
      limited: true,
      icon: <Gift className="w-8 h-8" />,
      image: medailleCommemorativeImage
    },
    {
      name: "Masque Miniature Fang",
      price: "4 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Réplique authentique du masque traditionnel Fang",
      tooltip: "Art sacré de l'aire culturelle forestière, symbole de sagesse ancestrale",
      color: "from-emerald-600 to-emerald-700",
      bestseller: true,
      icon: <Shield className="w-8 h-8" />,
      image: masqueFangImage
    },
    {
      name: "Marque-page Présidentiel",
      price: "1 200 FCFA",
      category: "Héritage Présidentiel",
      description: "Marque-page élégant avec citation présidentielle",
      tooltip: "Accompagne vos lectures avec les paroles inspirantes du Chef de l'État",
      color: "from-yellow-600 to-yellow-700",
      icon: <Award className="w-8 h-8" />,
      image: marquePagePresidentielImage
    },
    {
      name: "Pendentif Lion Indomptable",
      price: "6 800 FCFA",
      category: "Symboles de l'Unité",
      description: "Pendentif représentant l'emblème national",
      tooltip: "Symbole de courage et de détermination du peuple camerounais",
      color: "from-red-600 to-red-700",
      limited: true,
      icon: <Crown className="w-8 h-8" />,
      image: pendentifLionImage
    },
    {
      name: "Mug Palais de l'Unité",
      price: "3 500 FCFA",
      category: "Héritage Présidentiel",
      description: "Mug premium avec image du Palais présidentiel",
      tooltip: "Commencez vos matinées avec l'élégance présidentielle",
      color: "from-yellow-600 to-yellow-700",
      bestseller: true,
      icon: <Star className="w-8 h-8" />,
      image: mugPalaisUniteImage
    },
    {
      name: "Collier Perles Bamoun",
      price: "7 200 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Collier traditionnel de l'aire culturelle de l'Ouest",
      tooltip: "Bijou royal inspiré des parures des reines Bamoun",
      color: "from-emerald-600 to-emerald-700",
      icon: <Crown className="w-8 h-8" />,
      image: collierBamounImage
    },
    {
      name: "Calendrier Présidentiel 2025",
      price: "4 200 FCFA",
      category: "Collections Millésimées",
      description: "Calendrier officiel avec photos présidentielles",
      tooltip: "Calendrier de luxe avec les moments marquants de la présidence",
      color: "from-purple-600 to-purple-700",
      icon: <Gift className="w-8 h-8" />,
      image: calendrier2025Image
    },
    {
      name: "Éventail Royal Bassa",
      price: "5 500 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Éventail décoratif de l'aire culturelle du Littoral",
      tooltip: "Accessoire traditionnel utilisé lors des danses royales Bassa",
      color: "from-emerald-600 to-emerald-700",
      bestseller: true,
      icon: <Star className="w-8 h-8" />,
      image: eventailBassaImage
    },
    {
      name: "Badge Unité Nationale",
      price: "2 800 FCFA",
      category: "Symboles de l'Unité",
      description: "Badge officiel de l'unité camerounaise",
      tooltip: "Porté avec fierté par les citoyens attachés à l'unité nationale",
      color: "from-red-600 to-red-700",
      icon: <Shield className="w-8 h-8" />,
      image: badgeUniteNationaleImage
    },
    {
      name: "Cahier Présidentiel",
      price: "3 800 FCFA",
      category: "Héritage Présidentiel",
      description: "Carnet de notes couverture présidentielle",
      tooltip: "Consignez vos pensées dans un carnet digne du Palais de l'Unité",
      color: "from-yellow-600 to-yellow-700",
      icon: <Award className="w-8 h-8" />,
      image: cahierPresidentielImage
    },
    {
      name: "Tambourin Kotoko",
      price: "9 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Petit tambour traditionnel du Nord Cameroun",
      tooltip: "Instrument de musique sacrée de l'aire culturelle Soudano-Sahélienne",
      color: "from-emerald-600 to-emerald-700",
      limited: true,
      icon: <Package className="w-8 h-8" />,
      image: tambourinKotokoImage
    },
    {
      name: "Coffret Cadeau VIP",
      price: "14 500 FCFA",
      category: "Collections Millésimées",
      description: "Coffret luxe avec 5 objets présidentiels",
      tooltip: "Ensemble prestige contenant les plus beaux souvenirs du Monument",
      color: "from-purple-600 to-purple-700",
      limited: true,
      icon: <Gift className="w-8 h-8" />,
      image: coffretVipImage
    }
  ];

  const categories = [
    {
      name: "Héritage Présidentiel Paul BIYA",
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-600 to-yellow-700",
      count: `${products.filter(p => p.category === "Héritage Présidentiel").length} trésors`,
      description: "Objets d'art présidentiels, médailles d'honneur, portraits officiels dorés",
      tooltip: "Collection exclusive dédiée aux symboles et objets représentant la grandeur présidentielle"
    },
    {
      name: "Monument des Quatre Royaumes",
      icon: <Award className="w-8 h-8" />,
      color: "from-emerald-600 to-emerald-700",
      count: `${products.filter(p => p.category === "Monument des Quatre Royaumes").length} chefs-d'œuvre`,
      description: "Sculptures miniatures des aires culturelles, maquettes architecturales sacrées",
      tooltip: "Objets inspirés des quatre grandes aires culturelles camerounaises unies dans le Monument"
    },
    {
      name: "Symboles de l'Unité Nationale",
      icon: <Star className="w-8 h-8" />,
      color: "from-red-600 to-red-700",
      count: `${products.filter(p => p.category === "Symboles de l'Unité").length} emblèmes`,
      description: "Armoiries royales, drapeaux de prestige, insignes des traditions ancestrales",
      tooltip: "Articles célébrant l'unité et la diversité culturelle du Cameroun"
    },
    {
      name: "Collections Millésimées d'Excellence",
      icon: <Gift className="w-8 h-8" />,
      color: "from-purple-600 to-purple-700",
      count: `${products.filter(p => p.category === "Collections Millésimées").length} raretés`,
      description: "Pièces numérotées signées, éditions anniversaires, trésors de collection",
      tooltip: "Éditions limitées et pièces collector pour les connaisseurs et collectionneurs"
    }
  ];

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleExploreCategory = (categoryName: string) => {
    const categoryKey = categoryName.includes("Héritage") ? "Héritage Présidentiel" :
                        categoryName.includes("Monument") ? "Monument des Quatre Royaumes" :
                        categoryName.includes("Symboles") ? "Symboles de l'Unité" :
                        "Collections Millésimées";
    setSelectedCategory(categoryKey);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <Header />
        
        {/* Hero Section avec fond boutique */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 flex items-center justify-center text-white overflow-hidden">
          {/* Image de bannière boutique en fond */}
          <div className="absolute inset-0 opacity-80">
            <img 
              src={boutiqueBanner} 
              alt="Boutique Souvenir du Monument Paul BIYA" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-blue-900/40 to-indigo-900/50"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Boutique Souvenir du Monument Paul BIYA
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Boutique Officielle</h1>
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
              Découvrez la collection exclusive du Monument Paul Biya et des emblèmes du Cameroun. 
              Gadgets authentiques inspirés des plus grands musées du monde.
            </p>
          </div>
        </section>

        {/* Collections Présidentielles */}
        <section className="py-20 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-center text-blue-900 flex-1">Collections Présidentielles</h2>
              {selectedCategory && (
                <Button 
                  onClick={() => setSelectedCategory(null)}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Voir toutes les collections
                </Button>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {categories.map((category, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className="group text-center p-6 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm cursor-pointer">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <div className="text-white">{category.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-blue-900">{category.name}</h3>
                      <Badge variant="outline" className="mb-2 border-blue-300 text-blue-700">{category.count}</Badge>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <Button 
                        onClick={() => handleExploreCategory(category.name)}
                        variant="outline" 
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Explorer
                      </Button>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{category.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        {/* Produits Vedettes Présidentiels */}
        <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
              {selectedCategory ? `${selectedCategory}` : "Produits Vedettes"}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className={`group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm cursor-pointer ${product.bestseller ? 'border-2 border-blue-500 ring-2 ring-blue-200' : product.limited ? 'border-2 border-red-500 ring-2 ring-red-200' : ''}`}>
                      {product.bestseller && (
                        <Badge className="absolute top-2 left-2 z-10 bg-blue-500 text-white animate-pulse">
                          ⭐ Best-seller
                        </Badge>
                      )}
                      {product.limited && (
                        <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white animate-pulse">
                          🔥 Édition limitée
                        </Badge>
                      )}
                      <div className="h-48 relative group-hover:scale-105 transition-transform overflow-hidden rounded-t-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className="bg-white/95 text-blue-700 text-xs backdrop-blur-sm">{product.category}</Badge>
                        </div>
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-green-600 text-white font-bold shadow-lg">
                            {product.price}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transform group-hover:scale-105 transition-all shadow-lg">
                          🛒 Ajouter au Panier
                        </Button>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="font-semibold text-blue-900 mb-1">{product.name}</p>
                    <p className="text-sm">{product.tooltip}</p>
                    <p className="font-bold text-green-600 mt-1">{product.price}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Services Premium</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentification Officielle",
                icon: <Award className="w-8 h-8" />,
                description: "Tous nos produits sont certifiés et authentifiés",
                features: ["Certificat d'authenticité", "Garantie officielle", "Traçabilité complète"]
              },
              {
                title: "Livraison Sécurisée",
                icon: <Truck className="w-8 h-8" />,
                description: "Livraison premium avec assurance tous risques",
                features: ["Emballage de luxe", "Livraison express", "Assurance incluse"]
              },
              {
                title: "Service Concierge",
                icon: <Crown className="w-8 h-8" />,
                description: "Service personnalisé digne de l'excellence présidentielle",
                features: ["Conseiller dédié", "Personnalisation possible", "Service VIP"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
        </section>

        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Boutique;