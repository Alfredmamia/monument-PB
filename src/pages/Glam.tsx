
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
      
      {/* Hero Section avec nouveau fond */}
      <section className="relative h-96 bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900 flex items-center justify-center text-white overflow-hidden">
        {/* Nouveau fond d'écran GLAM */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/3f092590-6888-4609-87eb-ee67e9ac909d.png" 
            alt="GLAM du Monument Paul Biya" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-indigo-900/60 to-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">GLAM</h1>
          <p className="text-sm uppercase tracking-widest text-sky-200 mb-3">Galleries · Libraries · Archives · Museums</p>
          <p className="text-xl md:text-2xl opacity-95 drop-shadow-lg">
            Le concept GLAM (Galeries, Bibliothèques, Archives, Musées) désigne, dans le monde entier, 
            les institutions patrimoniales qui numérisent et diffusent librement leurs collections. 
            Le Monument Paul Biya s'inscrit dans cette démarche internationale pour rendre accessibles 
            documents, archives et références historiques sur le Cameroun et son histoire présidentielle.
          </p>
        </div>
      </section>

      {/* Section principale avec QR Code - fond bleu nuit */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Accédez à la Bibliothèque Numérique
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* QR Code */}
              <div className="bg-gradient-to-br from-sky-800 to-indigo-800 p-8 rounded-2xl shadow-2xl border border-sky-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Scannez pour Accéder
                  </h3>
                  <p className="text-sky-200">
                    Scannez ce code avec votre smartphone pour accéder directement à la bibliothèque numérique GLAM.
                  </p>
                </div>
                
                {/* QR Code réel — généré dynamiquement, pointe vers le catalogue Koha effectivement en ligne */}
                <div className="w-64 h-64 mx-auto bg-white border-2 border-sky-300 rounded-lg flex items-center justify-center mb-6 p-3">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=http://191.101.80.179:8080/cgi-bin/koha/opac-main.pl"
                    alt="QR Code d'accès à la bibliothèque numérique GLAM"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-sm text-sky-300">
                  Pointez votre caméra sur ce code ou utilisez une application de lecture QR
                </div>
              </div>

              {/* Informations et accès direct */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sky-800 to-indigo-800 border-sky-600 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="/lovable-uploads/5b5f0f0a-4dcb-4564-a0d7-0b49cb084bc0.png" 
                          alt="Bibliothèque" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Bibliothèque Numérique</h3>
                        <p className="text-sky-200 mb-4">
                          Accédez à une collection complète de documents, livres et archives liés au Monument Paul Biya.
                        </p>
                        <Button className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Accéder en ligne
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sky-800 to-indigo-800 border-sky-600 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="/lovable-uploads/d79dca92-2f14-4f97-b5f5-96d4f34d8e02.png" 
                          alt="Archives" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Archives Historiques</h3>
                        <p className="text-sky-200 mb-4">
                          Consultez des documents d'archives rares et des témoignages historiques précieux.
                        </p>
                        <Button variant="outline" className="border-sky-500 text-sky-300 hover:bg-sky-50">
                          Parcourir les Archives
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sky-800 to-indigo-800 border-sky-600 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="/lovable-uploads/461a3107-17fa-4cf0-9234-c318cc43a1a8.png" 
                          alt="Collections Multimédias" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Collections Multimédias</h3>
                        <p className="text-sky-200 mb-4">
                          Découvrez photos, vidéos et documents interactifs sur l'histoire et la culture camerounaise.
                        </p>
                        <Button variant="outline" className="border-sky-600 text-sky-300 hover:bg-sky-50">
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
      <section className="py-16 bg-gradient-to-br from-sky-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Accès Direct à la Plateforme
            </h3>
            <p className="text-sky-200 mb-8">
              Pour une expérience complète sur ordinateur, accédez directement à notre catalogue numérique.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-700 hover:from-sky-600 hover:via-indigo-600 hover:to-sky-800 text-white px-8 py-3 shadow-2xl hover:shadow-3xl transition-all"
                onClick={() => window.open('http://191.101.80.179:8080/cgi-bin/koha/opac-main.pl', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Accéder à la Bibliothèque GLAM en Ligne
              </Button>
              
              <div className="text-sm text-sky-300">
                <p>Compatible avec tous les navigateurs modernes</p>
                <p>Accessible 24h/24, 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires GLAM */}
      <section className="py-16 bg-gradient-to-br from-sky-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Institutions Partenaires
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-sky-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Bibliothèques Nationales</h4>
                <p className="text-sky-200 text-sm">
                  Collaboration avec les principales bibliothèques du Cameroun pour enrichir nos collections.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-sky-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Archives Nationales</h4>
                <p className="text-sky-200 text-sm">
                  Accès privilégié aux archives historiques et documents officiels.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-sky-700 bg-transparent">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-sky-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Musées Partenaires</h4>
                <p className="text-sky-200 text-sm">
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
