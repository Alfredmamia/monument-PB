import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Clock, Users, Star, Phone, Calendar, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Restaurant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300">
      <Header />
      
      {/* Hero Section avec image phare du restaurant */}
      <section className="relative h-96 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond du restaurant */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/07343eb9-7b5a-4c93-8b44-eb37c618a84d.png" 
            alt="Restaurant La Marraine"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/60 via-blue-400/40 to-blue-500/60"></div>
        </div>
        
        {/* Petite image en coin */}
        <div className="absolute bottom-4 right-4 w-24 h-24 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Monument Paul Biya"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {t('restaurant.badge')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-white">{t('nav.restaurant')}</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-white">
            {t('restaurant.hero.description')}
          </p>
        </div>
      </section>

      {/* Introduction avec images des plats */}
      <section className="py-20 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t('restaurant.flavors.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('restaurant.flavors.description')}
                </p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">{t('restaurant.orders.title')}</h3>
                  <p className="text-blue-700 flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-bold">6 90 34 31 66</span>
                  </p>
                  <p className="text-blue-700 flex items-center mb-2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{t('restaurant.orders.whatsapp')}</span>
                  </p>
                  <p className="text-sm text-blue-600 mt-1">{t('restaurant.delivery.available')}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/aae48f70-425f-4116-90cc-4942e4c1b471.png" 
                  alt="Grillades de crevettes"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/lovable-uploads/1a3d5a42-8617-4007-bca2-2c0dfa79db14.png" 
                  alt="Plat traditionnel camerounais"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Menu avec images des plats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t('restaurant.menu.title')}</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Ndole Président",
                  price: "3 000 FCFA",
                  emoji: "🥬",
                  description: t('restaurant.menu.ndole.description'),
                  image: "/lovable-uploads/fd5e2aa3-e209-469f-8f24-c2a9f8a0b851.png"
                },
                {
                  name: "Poulet Pané",
                  price: "2 500 FCFA", 
                  emoji: "🍗",
                  description: t('restaurant.menu.poulet.description'),
                  image: "/lovable-uploads/8b97bc2b-8f79-4310-9cec-3903f8fc3ab4.png"
                },
                {
                  name: "Ndomba de Poisson d'eau douce",
                  price: "3 000 FCFA",
                  emoji: "🐟",
                  description: t('restaurant.menu.ndomba.description'),
                  image: "/lovable-uploads/4cfef379-9f6c-4ff6-98aa-21458d179c28.png"
                },
                {
                  name: "Sauce Gombo",
                  price: "3 000 FCFA",
                  emoji: "🥣", 
                  description: t('restaurant.menu.gombo.description'),
                  image: "/lovable-uploads/ec92c4cd-d51b-42c9-8786-5a03e04135eb.png"
                },
                {
                  name: "Sauce Mbongo au Porc Royal",
                  price: "5 000 FCFA",
                  emoji: "🍖",
                  description: t('restaurant.menu.mbongo.description'),
                  image: "/lovable-uploads/e82d8759-0e8d-4f80-ad19-6515b29ca932.png"
                },
                {
                  name: "Porc fumé",
                  price: "3 000 FCFA",
                  emoji: "🥓",
                  description: t('restaurant.menu.porc.description'),
                  image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Poulet fumé",
                  price: "3 000 FCFA", 
                  emoji: "🍗",
                  description: t('restaurant.menu.poulet_fume.description'),
                  image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Bar frais",
                  price: t('restaurant.menu.bar.price'),
                  emoji: "🐟",
                  description: t('restaurant.menu.bar.description'),
                  image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: "Gambas",
                  price: "5 000 FCFA",
                  emoji: "🍤", 
                  description: t('restaurant.menu.gambas.description'),
                  image: "/lovable-uploads/aae48f70-425f-4116-90cc-4942e4c1b471.png"
                },
                {
                  name: "Poisson Sol",
                  price: t('restaurant.menu.sol.price'),
                  emoji: "🐟",
                  description: t('restaurant.menu.sol.description'),
                  image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop&crop=center"
                },
                {
                  name: t('restaurant.menu.beignets.name'),
                  price: "1 000 - 1 500 FCFA",
                  emoji: "🥞",
                  description: t('restaurant.menu.beignets.description'),
                  image: "/lovable-uploads/81a852a2-5ee7-43df-ab5a-4900c14c3b9e.png"
                }
              ].map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{dish.emoji}</span>
                            <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
                          </div>
                          <span className="text-lg font-bold text-blue-600">{dish.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{dish.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg">
              <img 
                src="/lovable-uploads/07343eb9-7b5a-4c93-8b44-eb37c618a84d.png" 
                alt="Restaurant La Marraine" 
                className="w-32 h-24 object-cover rounded-lg mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('restaurant.order.title')}</h3>
              <p className="text-gray-700 mb-6">{t('restaurant.order.description')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4">
                  <Phone className="w-6 h-6 mr-3" />
                  {t('restaurant.order.call')} 6 90 34 31 66
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-xl px-8 py-4">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  {t('restaurant.order.whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t('restaurant.info.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{t('restaurant.info.hours.title')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('restaurant.info.hours.lunch')}</p>
                <p>{t('restaurant.info.hours.dinner')}</p>
                <p>{t('restaurant.info.hours.weekend')}</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{t('restaurant.info.capacity.title')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('restaurant.info.capacity.main')}</p>
                <p>{t('restaurant.info.capacity.terrace')}</p>
                <p>{t('restaurant.info.capacity.private')}</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{t('restaurant.info.services.title')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('restaurant.info.services.wifi')}</p>
                <p>{t('restaurant.info.services.parking')}</p>
                <p>{t('restaurant.info.services.delivery')}</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{t('contact.title')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="font-bold">6 90 34 31 66</p>
                <p>resto@monumentpaulbiya.com</p>
                <p>{t('restaurant.info.contact.orders')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('restaurant.reservation.title')}</h2>
            <p className="text-xl text-gray-600 mb-12">
              {t('restaurant.reservation.description')}
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{t('restaurant.reservation.booking.title')}</h3>
                  <p className="text-gray-700">
                    {t('restaurant.reservation.booking.description')}
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    6 90 34 31 66
                  </Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{t('restaurant.reservation.delivery.title')}</h3>
                  <p className="text-gray-700">
                    {t('restaurant.reservation.delivery.description')}
                  </p>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('restaurant.reservation.delivery.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurant;
