import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, Camera, BookOpen, Utensils, Bed } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
      <Header />
      
      {/* Hero Section avec dégradé bleu ciel → bleu foncé et fond couvrant toute la page */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-blue-900 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane central des 4 aires réunies */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-2 h-full">
            <img src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" alt="Grassfield" className="w-full h-full object-cover opacity-50" />
            <img src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" alt="Sawa" className="w-full h-full object-cover opacity-50" />
            <img src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" alt="Fang-Beti" className="w-full h-full object-cover opacity-50" />
            <img src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" alt="Soudano-Sahélienne" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/50 to-blue-900/70"></div>
        
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
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl">
                {t('home.discover')}
              </Button>
            </Link>
            <Link to="/visite">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                {t('home.plan.visit')}
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
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            {t('home.explore')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/histoire">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=300&fit=crop&crop=center" 
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop&crop=center" 
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&crop=center" 
                    alt="Galerie photos" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop&crop=center" 
                    alt="Événements culturels" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-800 to-indigo-900 relative overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Stats Section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-r from-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-900">42m</div>
              <div className="text-blue-800">{t('home.stats.height')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-900">4</div>
              <div className="text-blue-800">{t('home.stats.areas')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-900">2025</div>
              <div className="text-blue-800">{t('home.stats.year')}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-900">1000+</div>
              <div className="text-blue-800">{t('home.stats.visitors')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{t('home.services')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/visite">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Visite Guidée</h3>
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Galerie</h3>
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop&crop=center" 
                    alt="Galerie photo et vidéo" 
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-gray-600 text-sm">Explorez notre collection d'images et vidéos</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/restaurant">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Restaurant</h3>
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
              <Card className="group hover:shadow-2xl transition-all duration-300 border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Bed className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Hébergement</h3>
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
      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{t('home.events')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-blue-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
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

            <Card className="hover:shadow-xl transition-shadow border-blue-100">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-500 relative overflow-hidden">
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

            <Card className="hover:shadow-xl transition-shadow border-blue-100">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
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

      <Footer />
    </div>
  );
};

export default Index;
