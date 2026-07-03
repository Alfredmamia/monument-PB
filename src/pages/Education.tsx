import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { BookOpen, Users, GraduationCap, FileText, Video, Download, Search, Calendar, MapPin, Clock, ChevronDown, Star, Award, Microscope, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Education = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-50 to-sky-100">
      <Header />
      
      {/* Hero Section avec bleu ciel et image africaine */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-sky-950 to-national-green flex items-center justify-center text-white overflow-hidden pattern-institutional">
        {/* Image de fond africaine - enfants étudiant */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/b1fe3e19-83bd-4b50-bc28-cad41ec3f492.png" 
            alt="Enfants africains étudiant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/40 via-sky-500/30 to-sky-600/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Centre Éducatif d'Excellence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Éducation</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            Un écosystème éducatif complet : de la recherche académique aux conférences internationales
          </p>
        </div>
      </section>

      {/* Services Principaux avec images camerounaises */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services Éducatifs</h2>
            <p className="text-xl text-gray-600">
              Le Monument Paul Biya offre un environnement d'apprentissage unique et moderne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bibliothèque Moderne",
                icon: <BookOpen className="w-8 h-8" />,
                description: "Plus de 50,000 ouvrages spécialisés",
                features: ["Archives historiques", "Documents rares", "Consultation numérique", "Espaces de lecture"],
                color: "from-sky-500 to-sky-500",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Vidéothèque HD",
                icon: <Video className="w-8 h-8" />,
                description: "Collection audiovisuelle exceptionnelle",
                features: ["Documentaires historiques", "Conférences enregistrées", "Archives vidéo", "Système de diffusion"],
                color: "from-sky-500 to-cyan-500",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Salles de Conférence",
                icon: <Users className="w-8 h-8" />,
                description: "Espaces équipés pour événements académiques",
                features: ["Amphithéâtre 300 places", "Salles de séminaire", "Équipement audiovisuel", "Traduction simultanée"],
                color: "from-cyan-500 to-teal-500",
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Centre de Recherche",
                icon: <Microscope className="w-8 h-8" />,
                description: "Laboratoire d'études historiques et culturelles",
                features: ["Archives numériques", "Base de données", "Espaces collaboratifs", "Support technique"],
                color: "from-teal-500 to-green-500",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    Découvrir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes par Niveau avec images éducatives africaines */}
      <section className="py-20 bg-gradient-to-r from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Programmes Éducatifs</h2>
          
          <Tabs defaultValue="primaire" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 mb-8 h-auto">
              <TabsTrigger value="primaire">Primaire</TabsTrigger>
              <TabsTrigger value="secondaire">Secondaire</TabsTrigger>
              <TabsTrigger value="universitaire">Universitaire</TabsTrigger>
              <TabsTrigger value="recherche">Recherche</TabsTrigger>
            </TabsList>

            <TabsContent value="primaire" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Enfants africains en classe primaire"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Programme Primaire (6-11 ans)</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Activités Disponibles</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Ateliers d'Histoire Interactive</strong>
                            <p className="text-sm text-gray-600">Découverte ludique du patrimoine camerounais</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Contes et Légendes</strong>
                            <p className="text-sm text-gray-600">Transmission orale de notre culture</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Jeux Éducatifs Numériques</strong>
                            <p className="text-sm text-gray-600">Apprentissage interactif sur tablettes</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Horaires & Tarifs</h4>
                      <div className="bg-sky-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="w-4 h-4 text-sky-600" />
                          <span className="font-medium">Mercredi & Samedi : 9h-12h</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-4 h-4 text-sky-600" />
                          <span className="font-medium">Salle d'activités jeunesse</span>
                        </div>
                        <div className="text-lg font-bold text-sky-800">Gratuit pour les groupes scolaires</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="secondaire" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Élèves africains au secondaire"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Programme Secondaire (12-18 ans)</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Programmes Spécialisés</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Club d'Histoire Avancée</strong>
                            <p className="text-sm text-gray-600">Recherches documentaires et débats</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Ateliers de Journalisme</strong>
                            <p className="text-sm text-gray-600">Création de contenus éducatifs</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Concours Académiques</strong>
                            <p className="text-sm text-gray-600">Olympiades d'histoire et de culture</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Services Disponibles</h4>
                      <div className="space-y-3">
                        <div className="bg-sky-50 p-3 rounded-lg">
                          <div className="font-medium text-sky-800">Soutien Scolaire</div>
                          <div className="text-sm text-sky-600">Aide aux devoirs et préparation aux examens</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="font-medium text-green-800">Orientation Universitaire</div>
                          <div className="text-sm text-green-600">Conseil et accompagnement personnalisé</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="universitaire" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Étudiants universitaires africains"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Programme Universitaire</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Formations Spécialisées</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Master en Histoire Contemporaine</strong>
                            <p className="text-sm text-gray-600">Spécialisation Afrique Centrale</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Séminaires Doctoraux</strong>
                            <p className="text-sm text-gray-600">Recherche avancée et thèses</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Colloques Internationaux</strong>
                            <p className="text-sm text-gray-600">Échanges académiques de haut niveau</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Ressources Académiques</h4>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="font-medium text-purple-800">Base de Données Exclusive</div>
                          <div className="text-sm text-purple-600">Archives numériques uniques</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <div className="font-medium text-orange-800">Partenariats Internationaux</div>
                          <div className="text-sm text-orange-600">Universités européennes et africaines</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recherche" className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Chercheurs africains en laboratoire"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Centre de Recherche Avancée</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Projets de Recherche</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Histoire Politique du Cameroun</strong>
                            <p className="text-sm text-gray-600">1960-2025 : Analyse comparative</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Patrimoine Architectural</strong>
                            <p className="text-sm text-gray-600">Conservation et valorisation</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-yellow-500 mt-1" />
                          <div>
                            <strong>Cultures Traditionnelles</strong>
                            <p className="text-sm text-gray-600">Transmission et modernité</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-sky-800">Publications</h4>
                      <div className="space-y-3">
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <div className="font-medium text-indigo-800">Revue Trimestrielle</div>
                          <div className="text-sm text-indigo-600">"Cahiers du Monument"</div>
                        </div>
                        <div className="bg-rose-50 p-3 rounded-lg">
                          <div className="font-medium text-rose-800">Collection Universitaire</div>
                          <div className="text-sm text-rose-600">Éditions scientifiques spécialisées</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Pratiques */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Services Pratiques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Réservation d'Espaces",
                icon: <Calendar className="w-8 h-8" />,
                items: [
                  "Salles de conférence (50-300 personnes)",
                  "Espaces de travail collaboratif",
                  "Laboratoires multimédia",
                  "Auditorium principal"
                ]
              },
              {
                title: "Services Numériques",
                icon: <Search className="w-8 h-8" />,
                items: [
                  "Catalogue en ligne (50,000+ références)",
                  "Accès WiFi haut débit",
                  "Plateforme e-learning",
                  "Archives numériques HD"
                ]
              },
              {
                title: "Accompagnement",
                icon: <Users className="w-8 h-8" />,
                items: [
                  "Bibliothécaires spécialisés",
                  "Tuteurs académiques",
                  "Assistance technique",
                  "Support méthodologique"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full mb-3 border-sky-600 text-sky-600 hover:bg-sky-50">
                        Voir les détails
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact et Horaires */}
      <section className="py-20 bg-gradient-to-r from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Informations Pratiques</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-sky-600" />
                    <span>Horaires d'Ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lundi - Vendredi</span>
                      <span className="text-sky-600">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Samedi</span>
                      <span className="text-sky-600">9h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Dimanche</span>
                      <span className="text-gray-500">Fermé</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="text-sm text-gray-600">
                        <strong>Accès 24h/7j pour chercheurs accrédités</strong>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-sky-600" />
                    <span>Contact & Accès</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-gray-800">Adresse</div>
                      <div className="text-gray-600">Carrefour MEPHO, Sangmélima</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Téléphone</div>
                      <div className="text-sky-600">+237 620 004 018</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-sky-600">education@monumentpaulbiya.cm</div>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                        Prendre Rendez-vous
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
