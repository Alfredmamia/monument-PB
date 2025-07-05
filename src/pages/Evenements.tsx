
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Music, Award, Clock, MapPin, Ticket, Bell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Evenements = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Grassfield selon la répartition */}
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
            Agenda Culturel
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Événements</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Restez informé des événements, expositions et actualités du Monument Paul Biya
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Ne manquez rien !</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Restez informé des événements, expositions et actualités du Monument Paul Biya. 
              Inscrivez-vous à nos prochaines activités et ne manquez rien !
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Bell className="w-5 h-5 mr-2" />
              S'abonner aux Notifications
            </Button>
          </div>
        </div>
      </section>

      {/* Événements à Venir */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Événements à Venir</h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Inauguration Officielle du Monument",
                date: "18 Juillet 2025",
                time: "10h00 - 18h00",
                type: "Cérémonie Officielle",
                description: "Cérémonie d'inauguration en présence des plus hautes autorités de l'État et des dignitaires internationaux.",
                color: "from-red-500 to-pink-500",
                featured: true
              },
              {
                title: "Festival des Arts Camerounais",
                date: "25-27 Août 2025",
                time: "09h00 - 22h00",
                type: "Festival Culturel",
                description: "Trois jours de célébration des arts traditionnels et contemporains du Cameroun avec spectacles, expositions et ateliers.",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Conférence : L'Architecture Monumentale Africaine",
                date: "15 Septembre 2025",
                time: "14h00 - 17h00",
                type: "Conférence",
                description: "Conférence internationale sur l'architecture monumentale en Afrique avec des experts reconnus.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Exposition : Quatre Aires, Une Nation",
                date: "1er Octobre - 30 Novembre 2025",
                time: "08h00 - 18h00",
                type: "Exposition",
                description: "Exposition permanente présentant la richesse des quatre aires culturelles du Cameroun.",
                color: "from-purple-500 to-indigo-500"
              }
            ].map((event, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-xl transition-shadow ${event.featured ? 'border-2 border-red-500' : ''}`}>
                <div className="grid lg:grid-cols-4 gap-0">
                  <div className={`bg-gradient-to-br ${event.color} p-6 text-white relative`}>
                    {event.featured && (
                      <Badge className="absolute top-2 right-2 bg-white text-red-600">
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
                        <Badge variant="outline" className="mb-2">{event.type}</Badge>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Types d'Événements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cérémonies Officielles",
                icon: <Award className="w-8 h-8" />,
                color: "from-red-500 to-pink-500",
                description: "Événements protocolaires et commémorations nationales"
              },
              {
                title: "Festivals Culturels",
                icon: <Music className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                description: "Célébrations des traditions et arts camerounais"
              },
              {
                title: "Conférences",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                description: "Débats et échanges sur des sujets d'actualité"
              },
              {
                title: "Expositions",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500",
                description: "Présentations d'œuvres et collections temporaires"
              }
            ].map((type, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3">{type.title}</h3>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Restez Informé</h2>
            <p className="text-xl text-gray-600 mb-12">
              Inscrivez-vous à notre newsletter pour ne manquer aucun événement
            </p>
            
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
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
