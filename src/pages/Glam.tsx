
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, BookOpen, Archive, Image, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Glam = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Fang-Beti selon la répartition */}
      <section className="relative h-96 bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" 
            alt="Aire Culturelle Fang-Beti" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/60 via-cyan-500/40 to-blue-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">GLAM</h1>
          <p className="text-xl md:text-2xl opacity-95 drop-shadow-md">
            Galeries, Bibliothèques, Archives, Musées - Votre portail numérique culturel
          </p>
        </div>
      </section>

      {/* Section principale avec QR Code */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Accédez à la Bibliothèque Numérique
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* QR Code */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-sky-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Scannez pour Accéder
                  </h3>
                  <p className="text-gray-600">
                    Scannez ce code avec votre smartphone pour accéder directement à la bibliothèque numérique GLAM.
                  </p>
                </div>
                
                {/* QR Code placeholder */}
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-sky-100 to-cyan-100 border-2 border-sky-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-sky-600 mx-auto mb-2" />
                    <p className="text-sm text-sky-700 font-medium">QR Code GLAM</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500">
                  Pointez votre caméra sur ce code ou utilisez une application de lecture QR
                </div>
              </div>

              {/* Informations et accès direct */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow border border-sky-100">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Bibliothèque Numérique</h3>
                        <p className="text-gray-600 mb-4">
                          Accédez à une collection complète de documents, livres et archives liés au Monument Paul Biya.
                        </p>
                        <Button className="bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Accéder en ligne
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border border-sky-100">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Archive className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Archives Historiques</h3>
                        <p className="text-gray-600 mb-4">
                          Consultez des documents d'archives rares et des témoignages historiques précieux.
                        </p>
                        <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                          Parcourir les Archives
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border border-sky-100">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <Image className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Collections Multimédias</h3>
                        <p className="text-gray-600 mb-4">
                          Découvrez photos, vidéos et documents interactifs sur l'histoire et la culture camerounaise.
                        </p>
                        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                          Explorer la Galerie
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lien direct vers Koha */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Accès Direct à la Plateforme
            </h3>
            <p className="text-gray-600 mb-8">
              Pour une expérience complète sur ordinateur, accédez directement à notre catalogue numérique.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 hover:from-sky-600 hover:via-cyan-600 hover:to-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('http://191.101.80.179:8080/cgi-bin/koha/opac-main.pl', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Accéder à la Bibliothèque GLAM en Ligne
              </Button>
              
              <div className="text-sm text-gray-500">
                <p>Compatible avec tous les navigateurs modernes</p>
                <p>Accessible 24h/24, 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires GLAM */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Institutions Partenaires
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-sky-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Bibliothèques Nationales</h4>
                <p className="text-gray-600 text-sm">
                  Collaboration avec les principales bibliothèques du Cameroun pour enrichir nos collections.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Archive className="w-8 h-8 text-cyan-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Archives Nationales</h4>
                <p className="text-gray-600 text-sm">
                  Accès privilégié aux archives historiques et documents officiels.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-100">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Musées Partenaires</h4>
                <p className="text-gray-600 text-sm">
                  Collections numériques partagées avec les musées nationaux et régionaux.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Glam;
