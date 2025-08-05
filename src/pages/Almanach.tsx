import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Handshake, Globe, Building2, Phone, Briefcase, TreePine } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Almanach = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
      <Header />
      
      {/* Hero Section avec bleu ciel et filigrane logos partenaires */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 flex items-center justify-center text-white overflow-hidden">
        {/* Photo du Président en fond avec filigrane discret en bas */}
        <div className="absolute inset-0 opacity-25">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-400/60 via-sky-300/20 to-sky-200/30"></div>
        </div>
        {/* Photo en petit format en bas à droite */}
        <div className="absolute bottom-4 right-4 opacity-40">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-16 h-20 object-cover rounded-lg border-2 border-white/30"
          />
        </div>
        {/* Filigrane logos partenaires */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Crect x='15' y='15' width='25' height='15' rx='3'/%3E%3Ccircle cx='70' cy='25' r='12'/%3E%3Crect x='50' y='60' width='20' height='20' rx='5'/%3E%3Cpath d='M20 70h20v20H20V70z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300/50 via-sky-400/40 to-blue-500/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Partenariats Stratégiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-blue-900">Almanach</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-blue-800">
            Découvrez les partenaires et entreprises qui ont contribué à la réalisation du monument. 
            Un projet collectif pour l'avenir du Cameroun.
          </p>
        </div>
      </section>

      {/* Introduction avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Nos Partenaires du Projet Monument Paul Biya</h2>
            <p className="text-xl text-blue-800 leading-relaxed">
              Le Monument Paul Biya est le fruit d'une collaboration exceptionnelle entre institutions publiques, 
              entreprises privées et partenaires techniques. Découvrez tous ceux qui ont rendu ce projet possible.
            </p>
          </div>
        </div>
      </section>

      {/* Partenaires Institutionnels avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Partenaires Institutionnels</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "MAIRIE DE SANGMÉLIMA",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Collectivité territoriale locale, pilote du projet",
                category: "Administration Locale",
                icon: <Building2 className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH SANGMELIMA.pdf"
              },
              {
                name: "FEICOM",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Fonds spécial d'équipement et d'intervention intercommunale",
                category: "Financement Public",
                icon: <Handshake className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH FEICOM.pdf"
              },
              {
                name: "MINAC",
                logo: "/lovable-uploads/6b62030c-ecc4-4700-a65f-50bcf002e07f.png",
                description: "Ministère des Arts et de la Culture",
                category: "Culture",
                icon: <Award className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH MINAC.pdf"
              },
              {
                name: "SOPECAM",
                logo: "/lovable-uploads/6ed1780a-1f56-4d58-b736-e2d61a0bb424.png",
                description: "Société de Presse et d'Édition du Cameroun",
                category: "Médias",
                icon: <Globe className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH SOPECAM.pdf"
              },
              {
                name: "CAMTEL",
                logo: "/lovable-uploads/f5e82fac-7fa6-4f34-b61e-3057c20c531f.png",
                description: "Cameroun Télécommunications - Infrastructure numérique",
                category: "Télécommunications",
                icon: <Phone className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH CAMTEL.pdf"
              },
              {
                name: "Ministère des Forêts et de la Faune",
                logo: "/lovable-uploads/158e7195-b643-46ce-b446-aab10230e51c.png",
                description: "Protection de l'environnement et biodiversité",
                category: "Environnement",
                icon: <TreePine className="w-6 h-6" />,
                almanach: "/lovable-uploads/212cb820-f5ee-4c0e-b331-726a606fb2d2.png"
              },
              {
                name: "MINHDU",
                logo: "/lovable-uploads/e6647f0b-c37a-4d38-aaca-9b21583bf14d.png",
                description: "Ministère de l'Habitat et du Développement Urbain",
                category: "Développement Urbain",
                icon: <Building2 className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH MINHDU.pdf"
              },
              {
                name: "Ministère du Tourisme",
                logo: "/lovable-uploads/ddac6329-9e9c-49fb-b4e1-26bdd388ea36.png",
                description: "Promotion du tourisme et des loisirs",
                category: "Tourisme",
                icon: <Globe className="w-6 h-6" />,
                 almanach: "/almanachs/ALMANACH MINTOUL.pdf"
               },
               {
                 name: "MINDCAF",
                 logo: "/lovable-uploads/3cd2fcbb-0f90-4a43-9438-ccd5944815c4.png",
                 description: "Ministère des Domaines, du Cadastre et des Affaires foncières",
                 category: "Affaires foncières",
                 icon: <Building2 className="w-6 h-6" />,
                 almanach: "/almanachs/ALMANACH MINDCAF.pdf"
               }
             ].map((partner, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm cursor-pointer"
                 onClick={() => partner.almanach && window.open(partner.almanach, '_blank')}
               >
                 <CardContent className="p-6 text-center">
                   <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-lg mb-4 shadow-sm">
                     <img 
                       src={partner.logo} 
                       alt={partner.name}
                       className="h-16 w-auto mx-auto object-contain"
                     />
                   </div>
                   <div className="flex items-center justify-center gap-2 mb-2">
                     <div className="text-blue-600">{partner.icon}</div>
                     <Badge variant="outline" className="border-blue-300 text-blue-700">{partner.category}</Badge>
                   </div>
                   <h3 className="text-lg font-bold mb-2 text-blue-900">{partner.name}</h3>
                   <p className="text-gray-600 text-sm">{partner.description}</p>
                   {partner.almanach && (
                     <div className="mt-3">
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           window.open(partner.almanach, '_blank');
                         }}
                         className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs transition-colors"
                       >
                         Charger votre almanach
                       </button>
                     </div>
                   )}
                 </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires Techniques avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Partenaires Techniques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "CAMTEL",
                logo: "/lovable-uploads/f5e82fac-7fa6-4f34-b61e-3057c20c531f.png",
                description: "Cameroun Télécommunications - Infrastructure numérique",
                category: "Télécommunications",
                icon: <Phone className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH CAMTEL.pdf"
              },
              {
                name: "KP AFRICA",
                logo: "/lovable-uploads/6ffdb104-4794-4406-ad21-04b6931fa882.png",
                description: "Partenaire technique et logistique",
                category: "Partenariat",
                icon: <Handshake className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH KP AFRICA.pdf"
              },
              {
                name: "SONDY",
                logo: "/lovable-uploads/981caa3d-b5df-4cbc-a80e-0301a0e092f2.png",
                description: "Partenaire technique spécialisé",
                category: "Technique",
                icon: <Briefcase className="w-6 h-6" />,
                almanach: "/lovable-uploads/b91ae14b-559d-40d7-9ec3-92c480cb88b3.png"
              },
              {
                name: "CABINET CEBR",
                logo: "/lovable-uploads/f95a3ba7-5d16-4446-83a2-a195b008333c.png",
                description: "Cabinet d'études et de réalisation architecturale",
                category: "Architecture",
                icon: <Briefcase className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH CEBR.pdf"
              },
              {
                name: "MINTOUL",
                logo: "/lovable-uploads/01edca7f-ea9e-4ce1-b0b0-c687c13518e8.png",
                description: "Ministère du Tourisme et des Loisirs",
                category: "Tourisme",
                icon: <Globe className="w-6 h-6" />,
                almanach: "/almanachs/ALMANACH MINTOUL.pdf"
              }
            ].map((partner, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm cursor-pointer"
                onClick={() => partner.almanach && window.open(partner.almanach, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-lg mb-4 shadow-sm">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-blue-600">{partner.icon}</div>
                    <Badge variant="outline" className="border-blue-300 text-blue-700">{partner.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-blue-900">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                  {partner.almanach && (
                    <div className="mt-3">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(partner.almanach, '_blank');
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs transition-colors"
                      >
                        Charger votre almanach
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Partenariats avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Types de Partenariats</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               {
                 title: "Partenaires Institutionnels",
                 icon: <Award className="w-8 h-8" />,
                 color: "from-sky-500 to-blue-500",
                 count: "9+ ministères",
                 description: "Institutions gouvernementales et organismes publics"
               },
              {
                title: "Partenaires Techniques",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600",
                count: "6+ entreprises",
                description: "Expertise technique et réalisation"
              },
              {
                title: "Partenaires Financiers",
                icon: <Handshake className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700",
                count: "5+ institutions",
                description: "Financement et soutien économique"
              },
              {
                title: "Partenaires Locaux",
                icon: <Globe className="w-8 h-8" />,
                color: "from-blue-700 to-blue-800",
                count: "3+ communautés",
                description: "Participation communautaire locale"
              }
            ].map((type, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">{type.title}</h3>
                <div className="text-2xl font-bold text-sky-600 mb-2">{type.count}</div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Remerciements avec fond bleu ciel */}
      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Remerciements</h2>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <blockquote className="text-xl italic text-blue-800 mb-6 leading-relaxed">
                "Le Monument Paul Biya est le fruit d'une collaboration exceptionnelle entre institutions publiques, 
                entreprises privées, partenaires techniques et communautés locales. Grâce à leur engagement collectif 
                et leur vision partagée pour l'unité nationale, ce projet emblématique voit le jour pour la fierté 
                de tous les Camerounais et des générations futures."
              </blockquote>
              <cite className="text-lg font-semibold text-blue-900">L'équipe du Monument Paul Biya - Sangmélima</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Almanach;