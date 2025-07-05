
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Book, Shirt, Award, CreditCard, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Boutique = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Grassfield */}
      <section className="relative h-96 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" 
            alt="Aire Culturelle Grassfield" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/60 via-emerald-500/40 to-teal-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Souvenirs Authentiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Boutique</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Offrez-vous un souvenir unique du Monument Paul Biya
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Souvenirs et cadeaux</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Offrez-vous un souvenir unique du Monument Paul Biya : livres, objets d'art, textiles et plus encore. 
              Paiement sécurisé garanti.
            </p>
          </div>
        </div>
      </section>

      {/* Catégories de Produits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nos Collections</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Livres & Publications",
                icon: <Book className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                count: "25+ titres",
                description: "Biographies, guides, livres d'art"
              },
              {
                name: "Textiles Traditionnels",
                icon: <Shirt className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500",
                count: "40+ articles",
                description: "Pagnes, broderies, vêtements"
              },
              {
                name: "Objets d'Art",
                icon: <Award className="w-8 h-8" />,
                color: "from-teal-500 to-cyan-500",
                description: "Sculptures, masques, peintures"
              },
              {
                name: "Accessoires",
                icon: <ShoppingBag className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-500",
                count: "60+ produits",
                description: "Bijoux, sacs, porte-clés"
              }
            ].map((category, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                {category.count && (
                  <Badge variant="outline" className="mb-2">{category.count}</Badge>
                )}
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Explorer
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Vedettes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Produits Vedettes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Biographie Officielle Paul Biya",
                price: "12 500 FCFA",
                category: "Livre",
                description: "Ouvrage de référence sur la vie et l'œuvre du Président",
                color: "from-green-400 to-emerald-400",
                bestseller: true
              },
              {
                name: "Pagne Traditionnel Camerounais",
                price: "25 000 FCFA",
                category: "Textile",
                description: "Pagne authentique aux motifs des quatre aires culturelles",
                color: "from-emerald-400 to-teal-400"
              },
              {
                name: "Sculpture Miniature du Monument",
                price: "18 000 FCFA",
                category: "Art",
                description: "Réplique détaillée en bronze du Monument Paul Biya",
                color: "from-teal-400 to-cyan-400"
              },
              {
                name: "T-shirt Commémoratif",
                price: "8 500 FCFA",
                category: "Vêtement",
                description: "T-shirt de qualité avec logo officiel du monument",
                color: "from-cyan-400 to-blue-400"
              },
              {
                name: "Masque Traditionnel (Reproduction)",
                price: "35 000 FCFA",
                category: "Art",
                description: "Reproduction fidèle d'un masque traditionnel camerounais",
                color: "from-blue-400 to-indigo-400",
                limited: true
              },
              {
                name: "Carnet de Notes Personnalisé",
                price: "5 500 FCFA",
                category: "Accessoire",
                description: "Carnet élégant avec couverture aux couleurs nationales",
                color: "from-indigo-400 to-purple-400"
              }
            ].map((product, index) => (
              <Card key={index} className={`group overflow-hidden hover:shadow-xl transition-shadow ${product.bestseller ? 'border-2 border-green-500' : ''}`}>
                {product.bestseller && (
                  <Badge className="absolute top-2 left-2 z-10 bg-green-500 text-white">
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
                    <Badge variant="outline" className="bg-white/90">{product.category}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Ajouter au Panier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Informations Pratiques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Paiement Sécurisé",
                icon: <CreditCard className="w-8 h-8" />,
                description: "Paiement par carte bancaire, Mobile Money ou espèces",
                features: ["SSL sécurisé", "Mobile Money", "Cartes Visa/MasterCard"]
              },
              {
                title: "Livraison",
                icon: <Truck className="w-8 h-8" />,
                description: "Livraison dans tout le Cameroun et retrait sur place",
                features: ["Livraison gratuite dès 50 000 FCFA", "Retrait gratuit", "Suivi de commande"]
              },
              {
                title: "Service Client",
                icon: <ShoppingBag className="w-8 h-8" />,
                description: "Équipe dédiée pour vous accompagner dans vos achats",
                features: ["Support 7j/7", "Échange/Remboursement", "Conseils personnalisés"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
