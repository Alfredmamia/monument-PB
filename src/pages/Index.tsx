
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Mail, Calendar, Camera, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Monument Paul Biya</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#accueil" className="text-gray-600 hover:text-green-600 transition-colors">Accueil</a>
            <a href="#apropos" className="text-gray-600 hover:text-green-600 transition-colors">À Propos</a>
            <a href="#galerie" className="text-gray-600 hover:text-green-600 transition-colors">Galerie</a>
            <a href="#histoire" className="text-gray-600 hover:text-green-600 transition-colors">Histoire</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen bg-gradient-to-br from-green-900 via-yellow-600 to-red-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
            Patrimoine National du Cameroun
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Monument
            <span className="block text-yellow-400">Paul Biya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Un symbole de leadership et de développement au cœur du Cameroun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              Planifier une Visite
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
              <Camera className="w-5 h-5 mr-2" />
              Voir la Galerie
            </Button>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">À Propos du Monument</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le Monument Paul Biya représente un hommage architectural remarquable à l'un des leaders les plus influents du Cameroun moderne.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Héritage Présidentiel</h3>
                <p className="text-gray-600">
                  Célébrant des décennies de leadership et de service à la nation camerounaise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Unité Nationale</h3>
                <p className="text-gray-600">
                  Un symbole d'unité et de cohésion pour tous les Camerounais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patrimoine Cultural</h3>
                <p className="text-gray-600">
                  Une œuvre architecturale qui enrichit le patrimoine culturel national.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galerie Photos</h2>
            <p className="text-xl text-gray-600">
              Découvrez la beauté architecturale et l'importance historique du monument
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-green-200 to-red-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-500" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Voir Plus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section id="histoire" className="py-20 bg-gradient-to-r from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Histoire du Monument</h2>
            
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vision et Conception</h3>
                    <p className="text-gray-600">
                      La conception du monument reflète l'ambition de créer un symbole durable de leadership et de progrès pour le Cameroun moderne.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Construction et Réalisation</h3>
                    <p className="text-gray-600">
                      Un projet architectural ambitieux mené avec la participation des meilleurs artisans et architectes du pays.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inauguration et Impact</h3>
                    <p className="text-gray-600">
                      Depuis son inauguration, le monument est devenu un lieu de pèlerinage civique et un symbole de fierté nationale.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Informations Pratiques</h2>
            <p className="text-xl text-gray-300">
              Planifiez votre visite et découvrez ce monument exceptionnel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-gray-300">Yaoundé, Cameroun</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Horaires</h3>
              <p className="text-gray-300">Lun-Dim: 8h-18h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-300">+237 XXX XXX XXX</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@monument.cm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Monument Paul Biya</span>
          </div>
          <p className="text-gray-400 mb-4">
            Un patrimoine national, un symbole de leadership et d'unité
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <span>© 2024 Monument Paul Biya</span>
            <span>•</span>
            <span>République du Cameroun</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
