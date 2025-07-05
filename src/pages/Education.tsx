
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, GraduationCap, FileText, Video, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Education = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Fang-Beti */}
      <section className="relative h-96 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png" 
            alt="Aire Culturelle Fang-Beti" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/60 via-orange-500/40 to-red-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Ressources Pédagogiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Éducation</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Des ressources pédagogiques pour tous : élèves, étudiants et enseignants
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Apprendre et partager</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Des ressources pédagogiques pour tous : élèves, étudiants, enseignants. 
              Apprenez et partagez autour de l'histoire et de la culture camerounaise.
            </p>
          </div>
        </div>
      </section>

      {/* Ressources par Public */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Ressources par Public</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Élèves (Primaire & Secondaire)",
                icon: <BookOpen className="w-8 h-8" />,
                color: "from-amber-500 to-orange-500",
                resources: ["Cahiers d'activités", "Jeux éducatifs", "Vidéos pédagogiques", "Quizz interactifs"],
                count: "50+ ressources"
              },
              {
                title: "Étudiants (Université)",
                icon: <GraduationCap className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                resources: ["Mémoires de recherche", "Documents d'archives", "Analyses historiques", "Bibliographies"],
                count: "120+ documents"
              },
              {
                title: "Enseignants & Formateurs",
                icon: <Users className="w-8 h-8" />,
                color: "from-red-500 to-pink-500",
                resources: ["Fiches pédagogiques", "Présentations prêtes", "Guides d'animation", "Évaluations"],
                count: "80+ outils"
              }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className={`h-32 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <Badge className="absolute top-2 right-2 bg-white text-gray-800">
                    {category.count}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {category.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span>{resource}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Explorer les Ressources
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thématiques d'Apprentissage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Thématiques d'Apprentissage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Histoire du Cameroun",
                description: "De l'époque précoloniale à nos jours",
                modules: ["Royaumes traditionnels", "Période coloniale", "Indépendance", "Cameroun moderne"],
                color: "from-amber-400 to-orange-400"
              },
              {
                title: "Paul Biya : Parcours et Héritage",
                description: "Biographie et réalisations présidentielles",
                modules: ["Jeunesse et formation", "Carrière politique", "Réformes majeures", "Vision d'avenir"],
                color: "from-orange-400 to-red-400"
              },
              {
                title: "Diversité Culturelle Camerounaise",
                description: "Les quatre aires culturelles nationales",
                modules: ["Culture Grassfield", "Culture Sawa", "Culture Fang-Beti", "Culture Soudano-Sahélienne"],
                color: "from-red-400 to-pink-400"
              },
              {
                title: "Architecture et Patrimoine",
                description: "Art architectural et conservation",
                modules: ["Styles architecturaux", "Symbolique du monument", "Techniques de construction", "Préservation"],
                color: "from-pink-400 to-purple-400"
              }
            ].map((theme, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-24 bg-gradient-to-r ${theme.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{theme.title}</h3>
                  <p className="text-gray-600 mb-4">{theme.description}</p>
                  <div className="space-y-2">
                    {theme.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-amber-600" />
                        <span className="text-sm text-gray-600">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outils Numériques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Outils Numériques</h2>
            <p className="text-xl text-gray-600 mb-12">
              Accédez à nos ressources éducatives modernes et interactives
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Bibliothèque Numérique",
                  icon: <BookOpen className="w-8 h-8" />,
                  description: "Accès à des milliers de documents historiques et culturels",
                  action: "Accéder"
                },
                {
                  title: "Vidéothèque",
                  icon: <Video className="w-8 h-8" />,
                  description: "Documentaires, témoignages et reconstitutions historiques",
                  action: "Regarder"
                },
                {
                  title: "Centre de Téléchargement",
                  icon: <Download className="w-8 h-8" />,
                  description: "Fiches pédagogiques et supports de cours prêts à utiliser",
                  action: "Télécharger"
                }
              ].map((tool, index) => (
                <Card key={index} className="group p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{tool.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{tool.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    {tool.action}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
