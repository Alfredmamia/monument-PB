import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Crown, Award, Star, CreditCard, Truck, Gift, Watch, Shield, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import boutiqueBanner from '@/assets/boutique-banner.jpg';

const Boutique = () => {
  return (
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
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Collections Présidentielles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Collection Paul Biya",
                icon: <Crown className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
                count: "25+ articles",
                description: "Portraits officiels, biographies, objets commemoratifs"
              },
              {
                name: "Collection Monument",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-700 to-blue-800",
                count: "40+ modèles",
                description: "Répliques, maquettes, souvenirs architecturaux"
              },
              {
                name: "Emblèmes du Cameroun",
                icon: <Star className="w-8 h-8" />,
                color: "from-blue-800 to-blue-900",
                count: "30+ symboles",
                description: "Drapeaux, armoiries, insignes officiels"
              },
              {
                name: "Éditions Limitées",
                icon: <Gift className="w-8 h-8" />,
                color: "from-blue-900 to-indigo-900",
                count: "15+ pièces",
                description: "Objets de collection rares et numérotés"
              }
            ].map((category, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">{category.name}</h3>
                <Badge variant="outline" className="mb-2 border-blue-300 text-blue-700">{category.count}</Badge>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explorer
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Vedettes Présidentiels */}
      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Produits Vedettes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pin's Monument Paul Biya",
                price: "8 500 FCFA",
                category: "Collection Monument",
                description: "Pin's en métal émaillé représentant le monument",
                color: "from-blue-600 to-blue-700",
                bestseller: true,
                icon: <Shield className="w-8 h-8" />
              },
              {
                name: "Montre Édition Paul Biya",
                price: "75 000 FCFA",
                category: "Collection Présidentielle",
                description: "Montre élégante avec cadran aux couleurs du Cameroun",
                color: "from-blue-700 to-blue-800",
                limited: true,
                icon: <Watch className="w-8 h-8" />
              },
              {
                name: "Chapeau Officiel Cameroun",
                price: "25 000 FCFA",
                category: "Emblèmes Cameroun",
                description: "Chapeau brodé aux armoiries du Cameroun",
                color: "from-blue-800 to-blue-900",
                icon: <Crown className="w-8 h-8" />
              },
              {
                name: "Polo Monument Heritage",
                price: "35 000 FCFA",
                category: "Collection Monument",
                description: "Polo de qualité premium avec logo du monument",
                color: "from-blue-600 to-blue-700",
                bestseller: true,
                icon: <Star className="w-8 h-8" />
              },
              {
                name: "Sac Cameroun Excellence",
                price: "45 000 FCFA",
                category: "Emblèmes Cameroun",
                description: "Sac en cuir véritable aux couleurs nationales",
                color: "from-blue-700 to-blue-800",
                icon: <Package className="w-8 h-8" />
              },
              {
                name: "Épinglette Armoiries du Cameroun",
                price: "15 000 FCFA",
                category: "Emblèmes Cameroun",
                description: "Épinglette officielle en émail et métal doré",
                color: "from-blue-800 to-blue-900",
                bestseller: true,
                icon: <Shield className="w-8 h-8" />
              },
              {
                name: "Maquette Monument - Or",
                price: "120 000 FCFA",
                category: "Édition Limitée",
                description: "Réplique prestige en métal doré (20cm)",
                color: "from-blue-900 to-indigo-900",
                limited: true,
                icon: <Award className="w-8 h-8" />
              },
              {
                name: "Porte-clés Monument",
                price: "5 500 FCFA",
                category: "Collection Monument",
                description: "Porte-clés miniature du monument en métal",
                color: "from-blue-600 to-blue-700",
                icon: <Gift className="w-8 h-8" />
              },
              {
                name: "T-shirt Fierté Camerounaise",
                price: "18 000 FCFA",
                category: "Emblèmes Cameroun",
                description: "T-shirt coton bio aux couleurs du drapeau",
                color: "from-blue-700 to-blue-800",
                bestseller: true,
                icon: <Star className="w-8 h-8" />
              }
            ].map((product, index) => (
              <Card key={index} className={`group overflow-hidden hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm ${product.bestseller ? 'border-2 border-blue-500' : product.limited ? 'border-2 border-red-500' : ''}`}>
                {product.bestseller && (
                  <Badge className="absolute top-2 left-2 z-10 bg-blue-500 text-white">
                    Best-seller
                  </Badge>
                )}
                {product.limited && (
                  <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white">
                    Édition limitée
                  </Badge>
                )}
                <div className={`h-48 bg-gradient-to-br ${product.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className="bg-white/90 text-blue-700">{product.category}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white opacity-80">{product.icon}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-blue-900">{product.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ajouter au Panier
                  </Button>
                </CardContent>
              </Card>
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
  );
};

export default Boutique;