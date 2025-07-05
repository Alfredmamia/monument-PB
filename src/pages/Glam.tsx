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
      
      {/* Hero Section avec bleu nuit */}
      <section className="relative h-96 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane livres et QR codes */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h40v40H20V20zm10 10h20v20H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <img 
            src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" 
            alt="Aire Culturelle Fang-Beti" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/50 to-slate-900/70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">GLAM</h1>
          <p className="text-xl md:text-2xl opacity-95 drop-shadow-lg">
            Accédez à notre bibliothèque numérique et explorez des milliers de documents sur Paul Biya et le Cameroun. 
            Scannez le QR code pour une expérience enrichie.
          </p>
        </div>
      </section>

      {/* Section principale avec QR Code - fond bleu nuit */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Accédez à la Bibliothèque Numérique
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* QR Code */}
              <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-2xl shadow-2xl border border-blue-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Scannez pour Accéder
                  </h3>
                  <p className="text-blue-200">
                    Scannez ce code avec votre smartphone pour accéder directement à la bibliothèque numérique GLAM.
                  </p>
                </div>
                
                {/* QR Code placeholder */}
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-white to-blue-50 border-2 border-blue-300 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-blue-700 font-medium">QR Code GLAM</p>
                  </div>
                </div>
                
                <div className="text-sm text-blue-300">
                  Pointez votre caméra sur ce code ou utilisez une application de lecture QR
                </div>
              </div>

              {/* Informations et accès direct */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-800 to-indigo-800 border-blue-600">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Bibliothèque Numérique</h3>
                        <p className="text-blue-200 mb-4">
                          Accédez à une collection complète de documents, livres et archives liés au Monument Paul Biya.
                        </p>
                        <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Accéder en ligne
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-800 to-indigo-800 border-blue-600">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                        <Archive className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Archives Historiques</h3>
                        <p className="text-blue-200 mb-4">
                          Consultez des documents d'archives rares et des témoignages historiques précieux.
                        </p>
                        <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-50">
                          Parcourir les Archives
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-800 to-indigo-800 border-blue-600">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                        <Image className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Collections Multimédias</h3>
                        <p className="text-blue-200 mb-4">
                          Découvrez photos, vidéos et documents interactifs sur l'histoire et la culture camerounaise.
                        </p>
                        <Button variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-50">
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

      {/* Lien direct vers Koha avec bleu nuit */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Accès Direct à la Plateforme
            </h3>
            <p className="text-blue-200 mb-8">
              Pour une expérience complète sur ordinateur, accédez directement à notre catalogue numérique.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-800 text-white px-8 py-3 shadow-2xl hover:shadow-3xl transition-all"
                onClick={() => window.open('http://191.101.80.179:8080/cgi-bin/koha/opac-main.pl', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Accéder à la Bibliothèque GLAM en Ligne
              </Button>
              
              <div className="text-sm text-blue-300">
                <p>Compatible avec tous les navigateurs modernes</p>
                <p>Accessible 24h/24, 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires GLAM */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Institutions Partenaires
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-blue-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Bibliothèques Nationales</h4>
                <p className="text-blue-200 text-sm">
                  Collaboration avec les principales bibliothèques du Cameroun pour enrichir nos collections.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-blue-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Archives Nationales</h4>
                <p className="text-blue-200 text-sm">
                  Accès privilégié aux archives historiques et documents officiels.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-blue-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Musées Partenaires</h4>
                <p className="text-blue-200 text-sm">
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
