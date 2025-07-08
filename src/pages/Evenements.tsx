import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Music, Award, Clock, MapPin, Ticket, Bell, Camera, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Evenements = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu électrique */}
      <section className="relative h-96 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane dynamique en haut */}
        <div className="absolute top-0 left-0 right-0 h-32 opacity-20">
          <img 
            src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" 
            alt="Aire Culturelle Grassfield" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/60 via-blue-400/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Agenda Culturel
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Événements</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            Restez informé des événements, expositions et actualités du Monument Paul Biya. 
            Inscrivez-vous à nos prochaines activités et ne manquez rien !
          </p>
        </div>
      </section>

      {/* Introduction avec bleu électrique */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Ne manquez rien !</h2>
            <p className="text-xl text-blue-800 leading-relaxed mb-8">
              Restez informé des événements, expositions et actualités du Monument Paul Biya. 
              Inscrivez-vous à nos prochaines activités et ne manquez rien !
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl">
              <Bell className="w-5 h-5 mr-2" />
              S'abonner aux Notifications
            </Button>
          </div>
        </div>
      </section>

      {/* Événement Spécial - Visite des Chefs Traditionnels */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
              Événement Culturel Exceptionnel
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Visite des Chefs Traditionnels</h2>
            <p className="text-xl text-amber-800">Une exposition photographique documentant cet événement historique</p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl border-2 border-amber-200">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Galerie d'images */}
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/16f35b76-d4b5-49c9-874a-6c6aa83538d6.png" 
                      alt="Accueil des chefs traditionnels" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/3fa147f3-e324-430e-9377-4ffb2feb2813.png" 
                      alt="Salutations traditionnelles" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/4b14ce52-0a67-4ef2-b5e4-a448fc9ccff8.png" 
                      alt="Rencontre officielle" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/79466c99-5a02-4b47-8907-b029efd8d8b5.png" 
                      alt="Équipe du monument" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                
                {/* Images des cérémonies */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/lovable-uploads/a677acf3-7aa9-4c0b-9d38-31e76d31a559.png" 
                      alt="Cérémonie dans la grande salle" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/e7c5722c-d426-4043-becd-fcc683bc3020.png" 
                        alt="Cérémonie traditionnelle" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src="/lovable-uploads/fea9840e-0ab1-4455-a349-e4c67ca96ed9.png" 
                        alt="Bénédiction traditionnelle" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu informatif */}
              <div className="bg-white p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-4 border-amber-300 text-amber-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Juin 2025
                  </Badge>
                  <h3 className="text-3xl font-bold text-amber-900 mb-4">
                    Visite des Chefs Traditionnels au Monument Paul Biya
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Une exposition photographique exceptionnelle documentant la visite historique des chefs traditionnels au Monument Paul Biya. Ces images témoignent de l'importance culturelle et de la reconnaissance traditionnelle de ce lieu par les gardiens des traditions camerounaises.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">Signification de l'Événement</h4>
                  <p className="text-amber-800 mb-4">
                    Cette descente des Chefs traditionnels sur le site du Monument avait pour objectif d'y apporter leur onction et leurs bénédictions sacrées, marquant ainsi la reconnaissance spirituelle et culturelle de ce lieu par les gardiens des traditions camerounaises.
                  </p>
                  <div className="flex items-center text-amber-700 text-sm">
                    <Heart className="w-4 h-4 mr-2" />
                    <span>Reconnaissance Traditionnelle</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">Offrandes Culturelles</h4>
                  <p className="text-blue-800 mb-4">
                    Les chefs traditionnels ont offert des objets précieux représentant chaque aire culturelle du Cameroun pour exhibition permanente au sein du monument, enrichissant ainsi le patrimoine culturel du site.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-blue-700">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Chefs Traditionnels du Cameroun</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white">
                    <Camera className="w-4 h-4 mr-2" />
                    Voir la Galerie
                  </Button>
                  <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                    <Heart className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Événements à Venir avec nuances de bleu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Événements à Venir</h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Inauguration Officielle du Monument",
                date: "18 Juillet 2025",
                time: "10h00 - 18h00",
                type: "Cérémonie Officielle",
                description: "Cérémonie d'inauguration en présence des plus hautes autorités de l'État et des dignitaires internationaux.",
                color: "from-blue-500 to-blue-600",
                featured: true
              },
              {
                title: "Festival des Arts Camerounais",
                date: "25-27 Août 2025",
                time: "09h00 - 22h00",
                type: "Festival Culturel",
                description: "Trois jours de célébration des arts traditionnels et contemporains du Cameroun avec spectacles, expositions et ateliers.",
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Conférence : L'Architecture Monumentale Africaine",
                date: "15 Septembre 2025",
                time: "14h00 - 17h00",
                type: "Conférence",
                description: "Conférence internationale sur l'architecture monumentale en Afrique avec des experts reconnus.",
                color: "from-blue-700 to-blue-800"
              },
              {
                title: "Exposition : Quatre Aires, Une Nation",
                date: "1er Octobre - 30 Novembre 2025",
                time: "08h00 - 18h00",
                type: "Exposition",
                description: "Exposition permanente présentant la richesse des quatre aires culturelles du Cameroun.",
                color: "from-blue-800 to-blue-900"
              }
            ].map((event, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-xl transition-shadow border-blue-200 ${event.featured ? 'border-2 border-blue-500' : ''}`}>
                <div className="grid lg:grid-cols-4 gap-0">
                  <div className={`bg-gradient-to-br ${event.color} p-6 text-white relative`}>
                    {event.featured && (
                      <Badge className="absolute top-2 right-2 bg-white text-blue-600">
                        À ne pas manquer
                      </Badge>
                    )}
                    <div className="text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-lg font-bold">{event.date}</div>
                      <div className="text-sm opacity-90">{event.time}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge variant="outline" className="mb-2 border-blue-300 text-blue-600">{event.type}</Badge>
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{event.title}</h3>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Ticket className="w-4 h-4 mr-2" />
                        Réserver
                      </Button>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Monument Paul Biya</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Places limitées</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'Événements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Types d'Événements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cérémonies Officielles",
                icon: <Award className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600",
                description: "Événements protocolaires et commémorations nationales"
              },
              {
                title: "Festivals Culturels",
                icon: <Music className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
                description: "Célébrations des traditions et arts camerounais"
              },
              {
                title: "Conférences",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-700 to-blue-800",
                description: "Débats et échanges sur des sujets d'actualité"
              },
              {
                title: "Expositions",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-blue-800 to-blue-900",
                description: "Présentations d'œuvres et collections temporaires"
              }
            ].map((type, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow border-blue-200">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-900">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter et Notifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Restez Informé</h2>
            <p className="text-xl text-gray-600 mb-12">
              Inscrivez-vous à notre newsletter pour ne manquer aucun événement
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <Bell className="w-4 h-4 mr-2" />
                  S'abonner
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Recevez les dernières actualités et invitations en avant-première
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
