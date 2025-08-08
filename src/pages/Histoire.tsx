import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Award, BookOpen, Users, Building, TrendingUp, Heart, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import infrastructureCameroon from '@/assets/infrastructure-cameroon.jpg';
import educationCameroon from '@/assets/education-cameroon.jpg';
import democracyCameroon from '@/assets/democracy-cameroon.jpg';
import economyCameroon from '@/assets/economy-cameroon.jpg';
import unityCameroon from '@/assets/unity-cameroon.jpg';
import diplomacyCameroon from '@/assets/diplomacy-cameroon.jpg';
import cameroonFlag from '@/assets/cameroon-flag.jpg';

const Histoire = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "Infrastructure",
      icon: <Building className="w-8 h-8" />,
      description: "Modernisation de l'économie et promotion de l'émergence",
      image: "/lovable-uploads/26aaec7f-f581-42bb-af7e-05637aa3b172.png",
      color: "from-blue-500 to-blue-600",
      fullDescription: "Sous la présidence de Paul Biya, le Cameroun a connu une transformation majeure de ses infrastructures. Des projets d'envergure comme le port en eaux profondes de Kribi, l'autoroute Yaoundé-Douala, et les barrages hydroélectriques de Memve'ele et Mekin ont révolutionné le paysage économique national. Ces réalisations concrètes témoignent d'une vision stratégique visant à faire du Cameroun le moteur économique de l'Afrique centrale."
    },
    {
      title: "Éducation",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Réformes du système éducatif et promotion de l'enseignement supérieur",
      image: "/lovable-uploads/c92f36c6-6e7c-4bca-ae7f-d893290042d8.png",
      color: "from-blue-600 to-blue-700",
      fullDescription: "L'engagement de Paul Biya pour l'éducation s'est traduit par la création de nombreuses universités d'État, l'amélioration de l'accès à l'enseignement primaire et secondaire, et la modernisation des programmes pédagogiques. Ces réformes ont permis au Cameroun de former une génération de leaders capables de relever les défis du développement durable."
    },
    {
      title: "Démocratisation",
      icon: <Users className="w-8 h-8" />,
      description: "Instauration du multipartisme et renforcement des institutions démocratiques",
      image: "/lovable-uploads/17add511-dbf0-4989-aa7b-1afc7906da0e.png",
      color: "from-blue-700 to-blue-800",
      fullDescription: "La transition démocratique initiée par Paul Biya en 1990 avec l'instauration du multipartisme a marqué un tournant historique. Cette ouverture politique a permis l'émergence d'une société civile dynamique et le renforcement de l'État de droit, consolidant ainsi les fondements d'une démocratie moderne et inclusive."
    },
    {
      title: "Développement Économique",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Diversification économique et promotion de l'investissement",
      image: "/lovable-uploads/d947aeff-dc19-4265-bd09-2c2952f09ac5.png",
      color: "from-blue-800 to-blue-900",
      fullDescription: "Sous l'impulsion de Paul Biya, le Cameroun a mis en œuvre des politiques économiques ambitieuses visant l'émergence à l'horizon 2035. La diversification de l'économie, la promotion des investissements privés et le développement des secteurs porteurs ont permis de consolider la position du pays comme puissance économique régionale."
    },
    {
      title: "Unité Nationale",
      icon: <Heart className="w-8 h-8" />,
      description: "Préservation de l'unité dans la diversité culturelle",
      image: "/lovable-uploads/20956287-f915-40f4-b756-32f8ef10a1a8.png",
      color: "from-blue-500 to-sky-600",
      fullDescription: "La préservation de l'unité nationale constitue l'un des piliers de la gouvernance de Paul Biya. En valorisant la diversité culturelle comme richesse nationale et en promouvant le vivre-ensemble, il a su maintenir la cohésion sociale malgré les défis régionaux et internationaux."
    },
    {
      title: "Diplomatie",
      icon: <Globe className="w-8 h-8" />,
      description: "Rayonnement international et leadership africain",
      image: "/lovable-uploads/fa3dba03-efdd-4308-8f9c-a41b0a6b4fb2.png",
      color: "from-sky-600 to-blue-700",
      fullDescription: "Sur la scène internationale, Paul Biya a positionné le Cameroun comme un acteur majeur de la diplomatie africaine. Son engagement pour la paix régionale, la coopération Sud-Sud et le dialogue multilatéral a renforcé l'influence du Cameroun dans les instances internationales et régionales."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400"
      style={{
        backgroundImage: 'url(/lovable-uploads/fa6640b4-8ff2-4826-9864-81f629c3103b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/70 via-sky-300/70 to-sky-400/70"></div>
      <div className="relative z-10">
        <Header />
      
      {/* Hero Section avec bleu dilué et touches de bleu nuit */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-400 flex items-center justify-center text-white overflow-hidden">
        {/* Photo du Président en fond avec filigrane discret en bas */}
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/lovable-uploads/36287f7d-1ee0-4986-a150-80c4fe385bc0.png" 
            alt="Président Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-400/30 via-sky-300/10 to-sky-200/15"></div>
        </div>
        {/* Photo en petit format en bas à droite */}
        <div className="absolute bottom-4 right-4 opacity-30">
          <img 
            src="/lovable-uploads/36287f7d-1ee0-4986-a150-80c4fe385bc0.png" 
            alt="Président Paul Biya" 
            className="w-16 h-20 object-cover rounded-lg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 via-sky-300/40 to-blue-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-blue-900 border-white/30">
            Parcours Présidentiel
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-blue-900">Histoire</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-blue-800">
            Revivez le parcours exceptionnel de Paul Biya, Président du Cameroun. 
            Explorez les moments clés de sa vie, son héritage et l'histoire du monument qui lui rend hommage.
          </p>
        </div>
      </section>

      {/* rest of the Histoire page content avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Un parcours exceptionnel</h2>
            <p className="text-xl text-blue-800 leading-relaxed">
              Revivez le parcours exceptionnel de Paul Biya, Président du Cameroun. 
              Explorez les moments clés de sa vie, son héritage et l'histoire du monument qui lui rend hommage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Fond d'écran avec l'image 9 */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/lovable-uploads/60f93aaf-061c-4091-aaac-51e28cecffe0.png" 
            alt="Jeune Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-300/70 via-sky-400/70 to-blue-500/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Chronologie Présidentielle</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1933",
                  title: "Naissance à Mvomeka'a",
                  description: "Naissance de Paul Barthélémy Biya'a bi Mvondo le 13 février 1933 dans le village de Mvomeka'a, région du Sud. Fils de Étienne Mvondo Assam et d'Anastasie Ella, il grandit dans une famille modeste.",
                  color: "from-blue-400 to-blue-500"
                },
                {
                  year: "1958",
                  title: "Études en France",
                  description: "Obtient une licence en droit public à l'Université de Paris. Il poursuit ses études à l'Institut d'études politiques de Paris, se spécialisant en sciences politiques et relations internationales.",
                  color: "from-blue-450 to-blue-550"
                },
                {
                  year: "1962",
                  title: "Début de carrière",
                  description: "Entrée dans la fonction publique camerounaise comme chef de mission au ministère de l'Éducation nationale. Il gravit rapidement les échelons de l'administration.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  year: "1968",
                  title: "Directeur de Cabinet",
                  description: "Nommé directeur de cabinet du ministre de l'Éducation nationale, puis secrétaire général de la présidence de la République sous Ahmadou Ahidjo.",
                  color: "from-blue-550 to-blue-650"
                },
                {
                  year: "1975",
                  title: "Premier Ministre",
                  description: "Nomination au poste de Premier Ministre du Cameroun par le président Ahmadou Ahidjo. Il devient l'homme de confiance du président et son dauphin désigné.",
                  color: "from-blue-600 to-blue-700"
                },
                {
                  year: "1982",
                  title: "Accession à la Présidence",
                  description: "Devient le 2e Président de la République du Cameroun le 6 novembre 1982, après la démission d'Ahmadou Ahidjo. Il prête serment et engage le pays vers une nouvelle ère.",
                  color: "from-blue-700 to-blue-800",
                  featured: true
                },
                {
                  year: "1984",
                  title: "Tentative de coup d'État",
                  description: "Survit à une tentative de coup d'État menée par la Garde républicaine. Cet événement renforce sa position et l'unité nationale autour de sa personne.",
                  color: "from-blue-720 to-blue-820"
                },
                {
                  year: "1990",
                  title: "Démocratisation",
                  description: "Instaure le multipartisme au Cameroun, marquant la fin du parti unique. Cette décision historique ouvre la voie à la démocratisation du pays.",
                  color: "from-blue-740 to-blue-840"
                },
                {
                  year: "1996",
                  title: "Nouvelle Constitution",
                  description: "Promulgation d'une nouvelle Constitution qui établit un système démocratique renforcé avec la création du Sénat et la décentralisation.",
                  color: "from-blue-760 to-blue-860"
                },
                {
                  year: "2000",
                  title: "Vision 2035",
                  description: "Lance la Vision Cameroun 2035, un plan stratégique ambitieux visant à faire du Cameroun un pays émergent d'ici 2035.",
                  color: "from-blue-780 to-blue-880"
                },
                {
                  year: "2008",
                  title: "Modification constitutionnelle",
                  description: "Suppression de la limitation du nombre de mandats présidentiels, permettant la consolidation des acquis démocratiques et du développement.",
                  color: "from-blue-790 to-blue-890"
                },
                {
                  year: "2018",
                  title: "7e mandat présidentiel",
                  description: "Réélu pour un septième mandat avec plus de 71% des voix, témoignant de la confiance du peuple camerounais en sa vision de développement.",
                  color: "from-blue-800 to-blue-900"
                },
                {
                  year: "2025",
                  title: "Monument Paul Biya",
                  description: "Inauguration du monument à Sangmélima en son honneur, symbole de reconnaissance de son œuvre pour l'unité nationale et le développement du Cameroun.",
                  color: "from-blue-800 to-blue-900"
                }
              ].map((event, index) => (
                <Card key={index} className={`overflow-hidden hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm ${event.featured ? 'border-2 border-blue-600' : 'border-blue-200'}`}>
                  <div className="grid md:grid-cols-4 gap-0">
                    <div className={`bg-gradient-to-br ${event.color} p-6 text-white relative`}>
                      {event.featured && (
                        <Badge className="absolute top-2 right-2 bg-white text-blue-600">
                          Événement majeur
                        </Badge>
                      )}
                      <div className="text-center">
                        <Calendar className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{event.year}</div>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{event.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Réalisations Majeures Interactives */}
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Réalisations Majeures</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-blue-200 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="h-48 relative overflow-hidden">
                  {/* Filigrane drapeau du Cameroun en arrière-plan très flouté */}
                  <div className="absolute inset-0 opacity-20 blur-sm">
                    <img 
                      src="/lovable-uploads/a33308a9-3d16-4dfc-ab2d-91a72002bcb8.png" 
                      alt="Drapeau du Cameroun"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 opacity-85">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20">{achievement.title}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{achievement.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-blue-900">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog pour les détails des réalisations */}
      <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-blue-900">
              {selectedAchievement && (
                <>
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedAchievement.color} rounded-full flex items-center justify-center`}>
                    <div className="text-white">{selectedAchievement.icon}</div>
                  </div>
                  {selectedAchievement.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedAchievement && (
            <div className="space-y-4">
              <img 
                src={selectedAchievement.image} 
                alt={selectedAchievement.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-gray-700 leading-relaxed">
                {selectedAchievement.fullDescription}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-20 relative overflow-hidden">
        {/* Image historique en fond d'écran */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/lovable-uploads/6a14b45d-34e9-47d2-a581-8ebfa652dd83.png" 
            alt="Photo historique du Cameroun" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-sky-600/10 to-blue-900/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">L'Héritage du Monument</h2>
            <div className="bg-gradient-to-r from-blue-100/90 to-sky-100/90 p-8 rounded-lg backdrop-blur-sm">
              <blockquote className="text-xl italic text-blue-800 mb-6 leading-relaxed">
                "Le Monument Paul Biya à Sangmélima incarne la vision d'un leader dévoué à l'unité nationale 
                et au développement harmonieux du Cameroun. Il symbolise les valeurs de paix, de progrès 
                et de diversité culturelle qui caractérisent notre nation."
              </blockquote>
              <cite className="text-lg font-semibold text-blue-700">
                Vision présidentielle pour l'unité nationale
              </cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Histoire;
