import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Eye, Compass, Award, Users, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Monument = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu foncé dominant */}
      <section className="relative h-96 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane architectural en pleine page */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png" 
            alt="Aire Culturelle Sawa" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-indigo-900/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Architecture Monumentale
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Le Monument</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            Admirez l'architecture et la symbolique du Monument Paul Biya. 
            Un chef-d'œuvre qui célèbre les quatre grandes aires culturelles du Cameroun à travers ses formes et ses décors uniques.
          </p>
        </div>
      </section>

      {/* Introduction avec fond bleu architectural */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Un Chef-d'œuvre Architectural</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Admirez l'architecture et la symbolique du Monument Paul Biya. Un chef-d'œuvre qui célèbre 
              les quatre grandes aires culturelles du Cameroun à travers ses formes et ses décors uniques.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">42m</div>
                  <div className="text-gray-600">Hauteur</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">4</div>
                  <div className="text-gray-600">Aires Culturelles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">2025</div>
                  <div className="text-gray-600">Inauguration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture et Symbolique avec bleu profond */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">Architecture Symbolique</h2>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Intégration Culturelle</h3>
                      <p className="text-gray-600">
                        Chaque façade du monument intègre des motifs et éléments artistiques 
                        représentant les quatre aires culturelles du Cameroun.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Excellence Architecturale</h3>
                      <p className="text-gray-600">
                        Conçu par des architectes renommés, le monument allie modernité 
                        et respect des traditions camerounaises.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Symbole d'Unité</h3>
                      <p className="text-gray-600">
                        La structure pyramidale symbolise l'unité dans la diversité, 
                        pilier fondamental de la vision présidentielle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Visite Virtuelle 360°</h3>
                <p className="text-gray-700 mb-6">
                  Explorez chaque recoin du monument depuis chez vous avec notre visite virtuelle immersive.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Lancer la Visite 360°
                </Button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-600">Aperçu Architectural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Détails Architecturaux avec nuances de bleu */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Éléments Architecturaux</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Façade Grassfield", color: "from-blue-500 to-blue-600", description: "Motifs des hauts plateaux" },
              { name: "Façade Sawa", color: "from-blue-600 to-blue-700", description: "Éléments côtiers et fluviaux" },
              { name: "Façade Fang-Beti", color: "from-blue-700 to-blue-800", description: "Art forestier traditionnel" },
              { name: "Façade Soudano-Sahélienne", color: "from-blue-800 to-blue-900", description: "Influences nordiques" }
            ].map((facade, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group border-blue-200">
                <div className={`h-48 bg-gradient-to-br ${facade.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold">{facade.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600 text-sm">{facade.description}</p>
                  <Button variant="outline" size="sm" className="mt-3 w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                    <Compass className="w-4 h-4 mr-2" />
                    Explorer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monument;
