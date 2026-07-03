import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar as CalendarIcon, Users, Award, Camera, BookOpen, Utensils, Bed, X } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import infrastructureImg from '@/assets/infrastructure-biya.jpg';
import educationImg from '@/assets/education-biya.jpg';
import democratizationImg from '@/assets/democratization-biya.jpg';
import economicImg from '@/assets/economic-development-biya.jpg';
import unityImg from '@/assets/unity-biya.jpg';
import diplomacyImg from '@/assets/diplomacy-biya.jpg';
import boutiqueBanner from '@/assets/boutique-banner-new.jpg';

const Index = () => {
  const { t } = useLanguage();
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "Démocratisation",
      icon: <Users className="w-8 h-8" />,
      description: "Instauration du multipartisme et renforcement des institutions démocratiques",
      color: "from-sky-500 to-sky-600",
      image: democratizationImg,
      details: "Sous la présidence de Paul Biya, le Cameroun a connu une transformation démocratique majeure avec l'instauration du multipartisme en 1990. Cette révolution politique a permis la création de dizaines de partis politiques, l'organisation d'élections libres et transparentes, et le renforcement des institutions démocratiques. Le pays a ainsi adopté une nouvelle constitution en 1996, créé un Conseil constitutionnel, et mis en place un système électoral moderne. Cette ouverture démocratique a favorisé l'expression de la diversité politique et consolidé l'État de droit au Cameroun."
    },
    {
      title: "Développement Économique",
      icon: <Award className="w-8 h-8" />,
      description: "Modernisation de l'économie camerounaise et promotion de l'émergence",
      color: "from-sky-600 to-sky-700",
      image: economicImg,
      details: "Paul Biya a lancé la Vision Cameroun 2035 visant à faire du pays une économie émergente. Le PIB du Cameroun a atteint 51,33 milliards USD en 2024 (Banque mondiale), faisant du pays la première économie de la zone CEMAC, avec près de 43% du PIB régional (FMI, 2024). Les réformes structurelles ont modernisé l'économie avec la privatisation d'entreprises publiques, la création de zones économiques spéciales, et l'amélioration du climat des affaires. Le secteur privé a été dynamisé, l'agriculture modernisée — le Cameroun est le 4ème exportateur mondial de cacao (INS, 2024) — et l'industrie diversifiée. [Sources : Banque mondiale, Vue d'ensemble Cameroun 2025 · FMI, Article IV mars 2026 · Institut National de la Statistique du Cameroun]"
    },
    {
      title: "Unité Nationale",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Préservation de l'unité et promotion de la diversité culturelle",
      color: "from-sky-700 to-sky-800",
      image: unityImg,
      details: "Paul Biya a fait de l'unité nationale sa priorité absolue, préservant la cohésion d'un pays aux 250 ethnies et deux héritages coloniaux. Sa politique de 'l'unité dans la diversité' a permis de maintenir la stabilité dans une région marquée par les conflits. Il a promu l'intégration nationale par le biais de l'éducation bilingue, la représentativité équitable dans l'administration, et la valorisation de toutes les cultures camerounaises. Cette vision a été concrétisée par la création de structures comme le Conseil économique et social, et la reconnaissance constitutionnelle de la diversité culturelle comme richesse nationale."
    },
    {
      title: "Infrastructure",
      icon: <Calendar className="w-8 h-8" />,
      description: "Grands projets d'infrastructure pour le développement du pays",
      color: "from-sky-800 to-sky-900",
      image: infrastructureImg,
      details: "Le règne de Paul Biya est marqué par des investissements massifs dans les infrastructures. Le réseau routier est passé de 50 000 à plus de 120 000 km, avec des autoroutes modernes comme Yaoundé-Douala. Dans l'énergie, la capacité électrique a été multipliée par 4 avec des barrages comme Memve'ele et Mekin. Le port autonome de Douala a été modernisé, l'aéroport international de Nsimalen construit, et le projet de port en eau profonde de Kribi lancé. Ces infrastructures ont transformé le paysage économique et social du Cameroun, facilitant les échanges et améliorant la qualité de vie des populations."
    },
    {
      title: "Éducation",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Réformes du système éducatif et promotion de l'enseignement supérieur",
      color: "from-sky-500 to-sky-600",
      image: educationImg,
      details: "Paul Biya a révolutionné l'éducation camerounaise en créant des milliers d'établissements scolaires et universitaires. Le taux de scolarisation primaire est passé de 70% à plus de 95%. Il a créé 8 universités d'État, de nombreuses grandes écoles, et favorisé l'émergence d'universités privées. Les réformes pédagogiques ont introduit l'approche par compétences, l'enseignement technique et professionnel a été valorisé, et l'enseignement supérieur adapté aux besoins du marché du travail. Cette politique éducative ambitieuse a formé une jeunesse qualifiée, moteur du développement national."
    },
    {
      title: "Diplomatie",
      icon: <Award className="w-8 h-8" />,
      description: "Rayonnement international du Cameroun sur la scène africaine et mondiale",
      color: "from-sky-600 to-sky-700",
      image: diplomacyImg,
      details: "Sous Paul Biya, le Cameroun est devenu une puissance diplomatique respectée. Le pays a été membre non permanent du Conseil de sécurité de l'ONU à deux reprises, a présidé l'Union africaine, et joue un rôle de médiateur dans les conflits régionaux. Paul Biya a développé un réseau diplomatique étendu, renforçant les relations avec la France, diversifiant les partenariats avec la Chine, les États-Unis, et l'Union européenne. Cette diplomatie active a attiré des investissements, renforcé la coopération Sud-Sud, and positionné le Cameroun comme un acteur incontournable de la géopolitique africaine et mondiale."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50">
      <Header />
      
      {/* Hero Section avec fond d'écran plus visible */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-400 via-sky-500 to-sky-900 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane central des 4 aires réunies - fond plus visible */}
        <div className="absolute inset-0 opacity-70">
          <div className="grid grid-cols-2 h-full">
            <img src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" alt="Grassfield" className="w-full h-full object-cover" />
            <img src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" alt="Sawa" className="w-full h-full object-cover" />
            <img src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" alt="Fang-Beti" className="w-full h-full object-cover" />
            <img src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" alt="Soudano-Sahélienne" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-sky-500/10 to-sky-900/15"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 animate-fade-in">
          {/* Photo du Président à côté du titre */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/2e5a9a56-b104-469f-b401-523a344a35e3.png" 
                alt="Président Paul Biya" 
                className="w-32 h-40 lg:w-40 lg:h-48 object-cover rounded-lg shadow-2xl border-4 border-white/30"
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                  {t('site.title')}
                </Badge>
                <img 
                  src="/lovable-uploads/7652d362-5716-4dfc-9a56-2158775830c1.png" 
                  alt="Drapeau du Cameroun" 
                  className="w-8 h-6 object-cover rounded shadow-md"
                />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-2xl">
                {t('home.welcome')}
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-lg leading-relaxed max-w-4xl mx-auto">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/monument">
              <Button size="lg" className="bg-white text-sky-900 hover:bg-sky-50 text-lg px-8 py-4 shadow-xl">
                {t('home.discover')}
              </Button>
            </Link>
            <Link to="/boutique">
              <Button size="lg" className="bg-sky-400 text-white hover:bg-sky-500 text-lg px-8 py-4 shadow-xl">
                A la découverte des objets personnels
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Experience Cards section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">
            {t('home.explore')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/histoire">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-600 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/d2cd6901-5e4d-4eec-ae1d-867848b72c50.png" 
                    alt="Histoire du Cameroun" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Histoire</Badge>
                    <h3 className="text-lg font-bold">Découvrez l'histoire</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Plongez dans l'histoire du monument et de son créateur.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/monument">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-500 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/1ef84817-a480-47bd-8136-d88dcfc21f50.png" 
                    alt="Architecture moderne" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Architecture</Badge>
                    <h3 className="text-lg font-bold">Admirez l'architecture</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Explorez les détails architecturaux et la symbolique du monument.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/visite">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-500 to-sky-700 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/2e3383aa-1bc5-494d-b8cc-40f4a63076f4.png" 
                    alt="Visite guidée" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Visite</Badge>
                    <h3 className="text-lg font-bold">Planifiez votre visite</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Obtenez toutes les informations pratiques pour votre visite.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/galerie">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-600 to-sky-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40">
                    <div className="grid grid-cols-2 h-full">
                      <img src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" alt="Grassfield" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" alt="Sawa" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" alt="Fang-Beti" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" alt="Soudano-Sahélienne" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Galerie</Badge>
                    <h3 className="text-lg font-bold">Explorez la galerie</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Découvrez les photos et vidéos du monument.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/evenements">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-700 to-sky-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Calendar 
                    mode="single"
                    className="text-white scale-75 pointer-events-auto opacity-90"
                    selected={new Date()}
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Événements</Badge>
                    <h3 className="text-lg font-bold">Consultez l'agenda</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Ne manquez aucun événement au monument.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/almanach">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-800 to-indigo-900 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=center" 
                    alt="Partenaires et collaborations" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Almanach</Badge>
                    <h3 className="text-lg font-bold">Nos Partenaires</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Découvrez tous les partenaires du projet.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/boutique">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-48 bg-gradient-to-br from-sky-900 to-indigo-900 relative overflow-hidden">
                  <img 
                    src={boutiqueBanner} 
                    alt="Boutique souvenirs" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Boutique</Badge>
                    <h3 className="text-lg font-bold">Souvenirs Officiels</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Découvrez notre collection de souvenirs du monument.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/monument">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-100">
                <div className="h-56 bg-gradient-to-br from-indigo-800 to-purple-900 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/096984d1-e955-4aa3-97d5-fb778827c96c.png" 
                    alt="Stratèges opérationnels" 
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">Acteurs</Badge>
                    <h3 className="text-lg font-bold">Les stratèges opérationnels</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">Découvrez les acteurs opérationnels de la construction du Monument.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-r from-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-900">42m</div>
              <div className="text-sky-800">{t('home.stats.height')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-900">4</div>
              <div className="text-sky-800">{t('home.stats.areas')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-900">2025</div>
              <div className="text-sky-800">{t('home.stats.year')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-900">1000+</div>
              <div className="text-sky-800">{t('home.stats.visitors')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">{t('home.services')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/visite">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">Visite Guidée</h3>
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&crop=center" 
                    alt="Visite guidée en groupe" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-gray-600 text-sm">Découvrez le monument avec nos guides experts</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/galerie">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">Galerie</h3>
                  <div className="w-full h-32 rounded-lg mb-3 relative overflow-hidden">
                    <div className="grid grid-cols-2 h-full opacity-80">
                      <img src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" alt="Grassfield" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" alt="Sawa" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" alt="Fang-Beti" className="w-full h-full object-cover" />
                      <img src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" alt="Soudano-Sahélienne" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Explorez notre collection d'images et vidéos</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/restaurant">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">Restaurant</h3>
                  <img 
                    src="/lovable-uploads/07343eb9-7b5a-4c93-8b44-eb37c618a84d.png" 
                    alt="Restaurant La Marraine" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-gray-600 text-sm">Savourez nos spécialités camerounaises</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/hebergement">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-sky-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-700 to-sky-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Bed className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3">Hébergement</h3>
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop&crop=center" 
                    alt="Hébergement confortable" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-gray-600 text-sm">Séjournez dans un cadre exceptionnel</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Événements section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-50/60 via-stone-50 to-sky-50/60">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">{t('home.events')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-sky-100">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop&crop=center" 
                  alt="Cérémonie d'inauguration" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-white/20">Inauguration</Badge>
                  <h3 className="text-lg font-bold">22 août 2025</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Cérémonie officielle d'inauguration du Monument Paul Biya</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-sky-100">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-500 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop&crop=center" 
                  alt="Festival arts camerounais" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-white/20">Festival</Badge>
                  <h3 className="text-lg font-bold">Arts Camerounais</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Festival célébrant la richesse artistique du Cameroun</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-sky-100">
              <div className="h-48 bg-gradient-to-br from-sky-500 to-sky-700 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop&crop=center" 
                  alt="Exposition aires culturelles" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-white/20">Exposition</Badge>
                  <h3 className="text-lg font-bold">Quatre Aires, Une Nation</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Exposition permanente sur les aires culturelles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section L'héritage du moment avec la 4e image */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-sky-50/60 to-stone-50 relative">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/lovable-uploads/6a14b45d-34e9-47d2-a581-8ebfa652dd83.png" 
            alt="Histoire du Cameroun - Photo historique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-300/30 via-sky-400/20 to-sky-500/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">L'Héritage du Moment</h2>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <blockquote className="text-xl italic text-sky-800 mb-6 leading-relaxed">
                "Ce monument ne célèbre pas seulement un homme, mais l'âme d'une nation. 
                Il incarne les valeurs de paix, d'unité et de progrès qui guident le Cameroun 
                vers son destin d'émergence. Chaque pierre raconte l'histoire d'un peuple 
                déterminé à bâtir un avenir meilleur pour ses enfants."
              </blockquote>
              <cite className="text-lg font-semibold text-sky-900">
                Vision d'unité et de développement pour le Cameroun moderne
              </cite>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
