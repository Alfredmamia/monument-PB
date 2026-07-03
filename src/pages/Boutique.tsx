import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ShoppingBag, Crown, Award, Star, CreditCard, Truck, Gift, Watch, Shield, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductIllustration from '@/components/ProductIllustration';



const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    setCartCount((c) => c + 1);
    setAddedProduct(productName);
    setTimeout(() => setAddedProduct((current) => (current === productName ? null : current)), 1800);
  };

  const products = [
    {
      name: "Pin's Présidentiel Doré",
      family: 'bijouterie' as const,
      tint: 'green' as const,
      price: "2 500 FCFA",
      category: "Héritage Présidentiel",
      description: "Pin's officiel à l'effigie du Président Paul BIYA en métal doré",
      tooltip: "Insigne de prestige porté lors des cérémonies officielles, symbole de respect et d'honneur",
      color: "from-national-gold to-amber-600",
      bestseller: true,
      icon: <Crown className="w-8 h-8" />,
    },
    {
      name: "Porte-clés Monument",
      family: 'bijouterie' as const,
      tint: 'gold' as const,
      price: "1 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Miniature du Monument Paul BIYA en métal précieux",
      tooltip: "Réplique détaillée du Monument, parfaite pour emporter un morceau d'histoire avec soi",
      color: "from-national-green to-sky-800",
      icon: <Award className="w-8 h-8" />,
    },
    {
      name: "Bracelet Tricolore",
      family: 'bijouterie' as const,
      tint: 'red' as const,
      price: "3 200 FCFA",
      category: "Symboles de l'Unité",
      description: "Bracelet aux couleurs du drapeau camerounais",
      tooltip: "Symbole d'unité nationale porté fièrement par les citoyens patriotes",
      color: "from-national-red to-red-800",
      icon: <Star className="w-8 h-8" />,
    },
    {
      name: "Médaille Commémorative",
      family: 'bijouterie' as const,
      tint: 'green' as const,
      price: "8 500 FCFA",
      category: "Collections Millésimées",
      description: "Médaille édition spéciale 42 ans de leadership",
      tooltip: "Pièce collector gravée commemorant les réalisations exceptionnelles du Président",
      color: "from-national-gold to-national-red",
      limited: true,
      icon: <Gift className="w-8 h-8" />,
    },
    {
      name: "Masque Miniature Fang",
      family: 'bijouterie' as const,
      tint: 'gold' as const,
      price: "4 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Réplique authentique du masque traditionnel Fang",
      tooltip: "Art sacré de l'aire culturelle forestière, symbole de sagesse ancestrale",
      color: "from-national-green to-sky-800",
      bestseller: true,
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: "Marque-page Présidentiel",
      family: 'papeterie' as const,
      tint: 'green' as const,
      price: "1 200 FCFA",
      category: "Héritage Présidentiel",
      description: "Marque-page élégant avec citation présidentielle",
      tooltip: "Accompagne vos lectures avec les paroles inspirantes du Chef de l'État",
      color: "from-national-gold to-amber-600",
      icon: <Award className="w-8 h-8" />,
    },
    {
      name: "Pendentif Lion Indomptable",
      family: 'bijouterie' as const,
      tint: 'red' as const,
      price: "6 800 FCFA",
      category: "Symboles de l'Unité",
      description: "Pendentif représentant l'emblème national",
      tooltip: "Symbole de courage et de détermination du peuple camerounais",
      color: "from-national-red to-red-800",
      limited: true,
      icon: <Crown className="w-8 h-8" />,
    },
    {
      name: "Mug Palais de l'Unité",
      family: 'vaisselle' as const,
      tint: 'green' as const,
      price: "3 500 FCFA",
      category: "Héritage Présidentiel",
      description: "Mug premium avec image du Palais présidentiel",
      tooltip: "Commencez vos matinées avec l'élégance présidentielle",
      color: "from-national-gold to-amber-600",
      bestseller: true,
      icon: <Star className="w-8 h-8" />,
    },
    {
      name: "Collier Perles Bamoun",
      family: 'bijouterie' as const,
      tint: 'green' as const,
      price: "7 200 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Collier traditionnel de l'aire culturelle de l'Ouest",
      tooltip: "Bijou royal inspiré des parures des reines Bamoun",
      color: "from-national-green to-sky-800",
      icon: <Crown className="w-8 h-8" />,
    },
    {
      name: "Calendrier Présidentiel 2025",
      family: 'papeterie' as const,
      tint: 'gold' as const,
      price: "4 200 FCFA",
      category: "Collections Millésimées",
      description: "Calendrier officiel avec photos présidentielles",
      tooltip: "Calendrier de luxe avec les moments marquants de la présidence",
      color: "from-national-gold to-national-red",
      icon: <Gift className="w-8 h-8" />,
    },
    {
      name: "Éventail Royal Bassa",
      family: 'bijouterie' as const,
      tint: 'gold' as const,
      price: "5 500 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Éventail décoratif de l'aire culturelle du Littoral",
      tooltip: "Accessoire traditionnel utilisé lors des danses royales Bassa",
      color: "from-national-green to-sky-800",
      bestseller: true,
      icon: <Star className="w-8 h-8" />,
    },
    {
      name: "Badge Unité Nationale",
      family: 'bijouterie' as const,
      tint: 'red' as const,
      price: "2 800 FCFA",
      category: "Symboles de l'Unité",
      description: "Badge officiel de l'unité camerounaise",
      tooltip: "Porté avec fierté par les citoyens attachés à l'unité nationale",
      color: "from-national-red to-red-800",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: "Cahier Présidentiel",
      family: 'papeterie' as const,
      tint: 'red' as const,
      price: "3 800 FCFA",
      category: "Héritage Présidentiel",
      description: "Carnet de notes couverture présidentielle",
      tooltip: "Consignez vos pensées dans un carnet digne du Palais de l'Unité",
      color: "from-national-gold to-amber-600",
      icon: <Award className="w-8 h-8" />,
    },
    {
      name: "Tambourin Kotoko",
      family: 'bijouterie' as const,
      tint: 'green' as const,
      price: "9 800 FCFA",
      category: "Monument des Quatre Royaumes",
      description: "Petit tambour traditionnel du Nord Cameroun",
      tooltip: "Instrument de musique sacrée de l'aire culturelle Soudano-Sahélienne",
      color: "from-national-green to-sky-800",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Coffret Cadeau VIP",
      family: 'papeterie' as const,
      tint: 'green' as const,
      price: "14 500 FCFA",
      category: "Collections Millésimées",
      description: "Coffret luxe avec 5 objets présidentiels",
      tooltip: "Ensemble prestige contenant les plus beaux souvenirs du Monument",
      color: "from-national-gold to-national-red",
      limited: true,
      icon: <Gift className="w-8 h-8" />,
    },
    // Gadgets Divers
    {
      name: "Papier à En-tête Présidentiel",
      family: 'papeterie' as const,
      tint: 'gold' as const,
      price: "1 500 FCFA",
      category: "Gadgets Divers",
      description: "Papier officiel avec logo du Monument Paul BIYA",
      tooltip: "Papier premium pour correspondances officielles",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Carte de Visite Présidentielle",
      family: 'papeterie' as const,
      tint: 'red' as const,
      price: "800 FCFA",
      category: "Gadgets Divers",
      description: "Cartes de visite élégantes avec emblème",
      tooltip: "Design professionnel avec les symboles du Monument",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <CreditCard className="w-8 h-8" />,
    },
    {
      name: "Enveloppe Commémorative",
      family: 'papeterie' as const,
      tint: 'green' as const,
      price: "600 FCFA",
      category: "Gadgets Divers",
      description: "Enveloppes premium aux couleurs nationales",
      tooltip: "Pour vos envois officiels et correspondances importantes",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Dépliant Monument",
      family: 'papeterie' as const,
      tint: 'gold' as const,
      price: "1 200 FCFA",
      category: "Gadgets Divers",
      description: "Brochure informative du Monument Paul BIYA",
      tooltip: "Guide détaillé avec l'histoire et l'architecture du Monument",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Flyers Promotionnels",
      family: 'papeterie' as const,
      tint: 'red' as const,
      price: "500 FCFA",
      category: "Gadgets Divers",
      description: "Flyers événements au Monument",
      tooltip: "Promotion des activités culturelles et visites",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Affiche Présidentielle",
      family: 'papeterie' as const,
      tint: 'green' as const,
      price: "2 800 FCFA",
      category: "Gadgets Divers",
      description: "Affiche officielle haute qualité",
      tooltip: "Portrait présidentiel pour bureaux et institutions",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Plaquette Institutionnelle",
      family: 'papeterie' as const,
      tint: 'gold' as const,
      price: "3 500 FCFA",
      category: "Gadgets Divers",
      description: "Plaquette de présentation du Monument",
      tooltip: "Document officiel avec photos et informations détaillées",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Agenda Présidentiel 2025",
      family: 'papeterie' as const,
      tint: 'red' as const,
      price: "4 800 FCFA",
      category: "Gadgets Divers",
      description: "Agenda deluxe avec citations présidentielles",
      tooltip: "Planificateur annuel avec les dates importantes du Cameroun",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Watch className="w-8 h-8" />,
    },
    {
      name: "Bloc-Notes Monument",
      family: 'papeterie' as const,
      tint: 'green' as const,
      price: "2 200 FCFA",
      category: "Gadgets Divers",
      description: "Bloc-notes avec image du Monument",
      tooltip: "Carnet élégant pour vos notes quotidiennes",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Magazine Commémoratif",
      family: 'papeterie' as const,
      tint: 'gold' as const,
      price: "5 500 FCFA",
      category: "Gadgets Divers",
      description: "Magazine spécial 42 ans de leadership",
      tooltip: "Publication collector avec articles et photos exclusives",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Sac Shopping Monument",
      family: 'textile' as const,
      tint: 'green' as const,
      price: "3 200 FCFA",
      category: "Gadgets Divers",
      description: "Sac réutilisable aux couleurs nationales",
      tooltip: "Sac écologique avec logo du Monument Paul BIYA",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <ShoppingBag className="w-8 h-8" />,
    },
    {
      name: "Polo Officiel Monument",
      family: 'textile' as const,
      tint: 'gold' as const,
      price: "8 500 FCFA",
      category: "Gadgets Divers",
      description: "Polo brodé aux armes du Cameroun",
      tooltip: "Vêtement officiel de qualité supérieure",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "T-Shirt Monument Paul BIYA",
      family: 'textile' as const,
      tint: 'red' as const,
      price: "6 800 FCFA",
      category: "Gadgets Divers",
      description: "T-shirt premium avec image du Monument",
      tooltip: "Coton de qualité avec impression haute définition",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Casquette Présidentielle",
      family: 'textile' as const,
      tint: 'green' as const,
      price: "4 200 FCFA",
      category: "Gadgets Divers",
      description: "Casquette brodée logo présidentiel",
      tooltip: "Accessoire élégant pour vos sorties officielles",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Écharpe Tricolore",
      family: 'textile' as const,
      tint: 'gold' as const,
      price: "5 800 FCFA",
      category: "Gadgets Divers",
      description: "Écharpe officielle aux couleurs du Cameroun",
      tooltip: "Symbole de fierté nationale en soie premium",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Brassard Officiel",
      family: 'textile' as const,
      tint: 'red' as const,
      price: "3 800 FCFA",
      category: "Gadgets Divers",
      description: "Brassard de cérémonie brodé",
      tooltip: "Pour les événements officiels et cérémonies d'État",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Macarons Présidentiels",
      family: 'bijouterie' as const,
      tint: 'gold' as const,
      price: "1 800 FCFA",
      category: "Gadgets Divers",
      description: "Set de macarons décoratifs",
      tooltip: "Collection de badges décoratifs avec symboles nationaux",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Fanion Monument",
      family: 'banniere' as const,
      tint: 'green' as const,
      price: "4 500 FCFA",
      category: "Gadgets Divers",
      description: "Fanion commémoratif en tissu premium",
      tooltip: "Drapeau décoratif pour bureaux et institutions",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Clé USB Monument",
      family: 'hightech' as const,
      tint: 'green' as const,
      price: "6 500 FCFA",
      category: "Gadgets Divers",
      description: "Clé USB 32GB forme du Monument",
      tooltip: "Stockage premium avec forme unique du Monument Paul BIYA",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Autocollants Monument",
      family: 'papeterie' as const,
      tint: 'red' as const,
      price: "800 FCFA",
      category: "Gadgets Divers",
      description: "Pack d'autocollants résistants",
      tooltip: "Set de stickers haute qualité pour décoration",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Stylo Présidentiel",
      family: 'hightech' as const,
      tint: 'gold' as const,
      price: "2 800 FCFA",
      category: "Gadgets Divers",
      description: "Stylo de luxe gravé aux armes du Cameroun",
      tooltip: "Instrument d'écriture de prestige pour signatures importantes",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Roll-Up Monument",
      family: 'banniere' as const,
      tint: 'gold' as const,
      price: "15 800 FCFA",
      category: "Gadgets Divers",
      description: "Bannière déroulante professionnelle",
      tooltip: "Support publicitaire haute qualité pour événements",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Kakémono Présidentiel",
      family: 'banniere' as const,
      tint: 'red' as const,
      price: "12 500 FCFA",
      category: "Gadgets Divers",
      description: "Bannière verticale premium",
      tooltip: "Affichage élégant pour cérémonies et événements",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "X-Banner Monument",
      family: 'banniere' as const,
      tint: 'green' as const,
      price: "8 900 FCFA",
      category: "Gadgets Divers",
      description: "Support publicitaire portable",
      tooltip: "Bannière stable et facilement transportable",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Oriflamme Cameroun",
      family: 'banniere' as const,
      tint: 'gold' as const,
      price: "7 200 FCFA",
      category: "Gadgets Divers",
      description: "Drapeau vertical aux couleurs nationales",
      tooltip: "Pavillon élégant pour cérémonies officielles",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Backdrop Stand",
      family: 'banniere' as const,
      tint: 'red' as const,
      price: "25 000 FCFA",
      category: "Gadgets Divers",
      description: "Fond de scène professionnel",
      tooltip: "Structure complète pour événements et conférences",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Montre Monument",
      family: 'hightech' as const,
      tint: 'red' as const,
      price: "18 500 FCFA",
      category: "Gadgets Divers",
      description: "Montre premium avec image du Monument",
      tooltip: "Garde-temps élégant avec le Monument Paul BIYA sur le cadran",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Watch className="w-8 h-8" />,
    },
    {
      name: "Drapeau avec Logotype",
      family: 'banniere' as const,
      tint: 'green' as const,
      price: "9 800 FCFA",
      category: "Gadgets Divers",
      description: "Drapeau officiel avec logo Monument",
      tooltip: "Pavillon de qualité supérieure pour institutions",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Visière Présidentielle",
      family: 'textile' as const,
      tint: 'green' as const,
      price: "3 800 FCFA",
      category: "Gadgets Divers",
      description: "Visière ajustable logo Monument",
      tooltip: "Protection solaire élégante avec emblème présidentiel",
      color: "from-slate-700 to-national-green",
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Parapluie Monument",
      family: 'hightech' as const,
      tint: 'green' as const,
      price: "12 800 FCFA",
      category: "Gadgets Divers",
      description: "Parapluie premium aux couleurs nationales",
      tooltip: "Protection de luxe avec design du Monument Paul BIYA",
      color: "from-slate-700 to-national-green",
      bestseller: true,
      icon: <Package className="w-8 h-8" />,
    },
    {
      name: "Assiette Commémorative",
      family: 'vaisselle' as const,
      tint: 'gold' as const,
      price: "8 500 FCFA",
      category: "Gadgets Divers",
      description: "Assiette décorative en porcelaine fine",
      tooltip: "Pièce de collection avec image du Monument en relief",
      color: "from-slate-700 to-national-green",
      limited: true,
      icon: <Package className="w-8 h-8" />,
    }
  ];

  const categories = [
    {
      name: "Héritage Présidentiel Paul BIYA",
      icon: <Crown className="w-8 h-8" />,
      color: "from-national-gold to-amber-600",
      count: `${products.filter(p => p.category === "Héritage Présidentiel").length} trésors`,
      description: "Objets d'art présidentiels, médailles d'honneur, portraits officiels dorés",
      tooltip: "Collection exclusive dédiée aux symboles et objets représentant la grandeur présidentielle"
    },
    {
      name: "Monument des Quatre Royaumes",
      icon: <Award className="w-8 h-8" />,
      color: "from-national-green to-sky-800",
      count: `${products.filter(p => p.category === "Monument des Quatre Royaumes").length} chefs-d'œuvre`,
      description: "Sculptures miniatures des aires culturelles, maquettes architecturales sacrées",
      tooltip: "Objets inspirés des quatre grandes aires culturelles camerounaises unies dans le Monument"
    },
    {
      name: "Symboles de l'Unité Nationale",
      icon: <Star className="w-8 h-8" />,
      color: "from-national-red to-red-800",
      count: `${products.filter(p => p.category === "Symboles de l'Unité").length} emblèmes`,
      description: "Armoiries royales, drapeaux de prestige, insignes des traditions ancestrales",
      tooltip: "Articles célébrant l'unité et la diversité culturelle du Cameroun"
    },
    {
      name: "Collections Millésimées d'Excellence",
      icon: <Gift className="w-8 h-8" />,
      color: "from-national-gold to-national-red",
      count: `${products.filter(p => p.category === "Collections Millésimées").length} raretés`,
      description: "Pièces numérotées signées, éditions anniversaires, trésors de collection",
      tooltip: "Éditions limitées et pièces collector pour les connaisseurs et collectionneurs"
    },
    {
      name: "Gadgets Divers du Monument",
      icon: <Package className="w-8 h-8" />,
      color: "from-slate-700 to-national-green",
      count: `${products.filter(p => p.category === "Gadgets Divers").length} articles`,
      description: "Papeterie, accessoires, vêtements et objets promotionnels du Monument",
      tooltip: "Large gamme d'articles personnalisés et gadgets officiels du Monument Paul BIYA"
    }
  ];

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleExploreCategory = (categoryName: string) => {
    const categoryKey = categoryName.includes("Héritage") ? "Héritage Présidentiel" :
                        categoryName.includes("Monument") ? "Monument des Quatre Royaumes" :
                        categoryName.includes("Symboles") ? "Symboles de l'Unité" :
                        categoryName.includes("Gadgets") ? "Gadgets Divers" :
                        "Collections Millésimées";
    setSelectedCategory(categoryKey);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50">
        <Header />
        
        {cartCount > 0 && (
          <div className="fixed top-24 right-4 z-[60] bg-national-red text-white rounded-full shadow-xl px-4 py-2 flex items-center gap-2 animate-fade-in">
            <ShoppingBag className="w-4 h-4" />
            <span className="font-bold text-sm">{cartCount}</span>
          </div>
        )}

        {/* Hero Section — bandeau institutionnel sobre (remplace l'ancien hero plein écran) */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-national-green flex items-center justify-center text-white overflow-hidden pattern-institutional">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 tracking-wide">
              Boutique Souvenir du Monument Paul BIYA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">Boutique Officielle</h1>
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
              Découvrez la collection exclusive du Monument Paul Biya et des emblèmes du Cameroun. 
              Gadgets authentiques inspirés des plus grands musées du monde.
            </p>
          </div>
        </section>

        {/* Collections Présidentielles */}
        <section className="py-20 bg-gradient-to-r from-stone-50 via-sky-50/60 to-stone-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-center text-sky-900 flex-1">Collections Présidentielles</h2>
              {selectedCategory && (
                <Button 
                  onClick={() => setSelectedCategory(null)}
                  variant="outline"
                  className="border-sky-600 text-sky-600 hover:bg-sky-50"
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
                      <h3 className="text-lg font-bold mb-2 text-sky-900">{category.name}</h3>
                      <Badge variant="outline" className="mb-2 border-sky-300 text-sky-700">{category.count}</Badge>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <Button 
                        onClick={() => handleExploreCategory(category.name)}
                        variant="outline" 
                        className="border-sky-600 text-sky-600 hover:bg-sky-50"
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
        <section className="py-20 bg-gradient-to-br from-sky-50/60 via-stone-50 to-sky-50/60">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">
              {selectedCategory ? `${selectedCategory}` : "Produits Vedettes"}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card className={`group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm cursor-pointer ${product.bestseller ? 'border-2 border-sky-500 ring-2 ring-sky-200' : product.limited ? 'border-2 border-red-500 ring-2 ring-red-200' : ''}`}>
                      {product.bestseller && (
                        <Badge className="absolute top-2 left-2 z-10 bg-sky-500 text-white animate-pulse">
                          ⭐ Best-seller
                        </Badge>
                      )}
                      {product.limited && (
                        <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white animate-pulse">
                          🔥 Édition limitée
                        </Badge>
                      )}
                      <div className="h-48 relative group-hover:scale-105 transition-transform overflow-hidden rounded-t-lg">
                        <ProductIllustration family={product.family} tint={product.tint} />
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className="bg-white/95 text-national-green text-xs backdrop-blur-sm border-white/50">{product.category}</Badge>
                        </div>
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-national-green text-white font-bold shadow-lg">
                            {product.price}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-sky-900 group-hover:text-sky-700 transition-colors">{product.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <Button
                          onClick={(e) => { e.stopPropagation(); handleAddToCart(product.name); }}
                          className="w-full bg-gradient-to-r from-national-green to-sky-800 hover:from-sky-800 hover:to-national-green text-white font-semibold transform group-hover:scale-105 transition-all shadow-lg"
                        >
                          {addedProduct === product.name ? '✓ Ajouté au panier' : '🛒 Ajouter au Panier'}
                        </Button>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="font-semibold text-sky-900 mb-1">{product.name}</p>
                    <p className="text-sm">{product.tooltip}</p>
                    <p className="font-bold text-green-600 mt-1">{product.price}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Services Premium</h2>
          
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
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-sky-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
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