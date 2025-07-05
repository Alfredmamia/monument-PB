import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Play, User, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Histoire = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu dilué et touches de bleu nuit */}
      <section className="relative h-96 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-900 flex items-center justify-center text-white">
        {/* Filigrane discret en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <img 
            src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" 
            alt="Aire Culturelle Fang-Beti" 
            className="w-full h-full object-cover object-bottom opacity-40"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Histoire du Monument</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">
            Revivez le parcours exceptionnel de Paul Biya, Président du Cameroun. 
            Explorez les moments clés de sa vie, son héritage et l'histoire du monument qui lui rend hommage.
          </p>
        </div>
      </section>

      {/* Biographie Paul Biya avec fond bleu dilué */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Biographie de Paul Biya</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un parcours exceptionnel au service de la nation camerounaise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Origines</h3>
                    <p className="text-gray-600">
                      Né le 13 février 1933 à Mvomeka'a, dans la région du Sud, Paul Biya incarne les valeurs profondes du Cameroun.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Formation</h3>
                    <p className="text-gray-600">
                      Diplômé en sciences politiques et droit public, il a forgé sa vision du développement national à travers une formation d'excellence.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Présidence</h3>
                    <p className="text-gray-600">
                      Président de la République depuis 1982, il a guidé le Cameroun vers la modernité et le développement.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-lg">
                <blockquote className="text-lg italic text-gray-800 mb-4">
                  "Le développement d'un pays passe par la préservation de son patrimoine et la valorisation de son histoire."
                </blockquote>
                <cite className="text-sm text-gray-600">- Citation historique</cite>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Réalisations Majeures</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span>Modernisation des infrastructures nationales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Promotion de l'unité nationale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Développement culturel et patrimonial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronologie avec fond bleu nuit */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Chronologie Historique</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-600 to-red-600"></div>
              
              {[
                { year: '1933', title: 'Naissance', description: 'Naissance à Mvomeka\'a dans la région du Sud' },
                { year: '1982', title: 'Accession à la Présidence', description: 'Début d\'un mandat présidentiel historique' },
                { year: '2020', title: 'Conception du Monument', description: 'Lancement du projet architectural' },
                { year: '2024', title: 'Inauguration', description: 'Ouverture officielle du Monument Paul Biya' }
              ].map((event, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo documentaire avec bleu nuit profond */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Documentaire Historique</h2>
            <p className="text-xl text-gray-300">
              Plongez dans l'histoire à travers témoignages et archives
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-red-600/20"></div>
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white relative z-10">
                <Play className="w-6 h-6 mr-2" />
                Regarder le Documentaire
              </Button>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Disponible avec sous-titres FR/EN - Durée: 45 minutes
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Histoire;
