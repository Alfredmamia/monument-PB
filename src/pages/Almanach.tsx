
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Handshake, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Almanach = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Grassfield selon la répartition */}
      <section className="relative h-96 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png" 
            alt="Aire Culturelle Grassfield" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/60 via-emerald-500/40 to-teal-600/60"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Partenariats Stratégiques
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Almanach</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Découvrez les partenaires et entreprises qui ont contribué à la réalisation du monument
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Nos partenaires</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Découvrez les partenaires et entreprises qui ont contribué à la réalisation du monument. 
              Un projet collectif pour l'avenir du Cameroun.
            </p>
          </div>
        </div>
      </section>

      {/* Partenaires Institutionnels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Partenaires Institutionnels</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "CAMTEL",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Télécommunications et infrastructure numérique",
                category: "Télécommunications"
              },
              {
                name: "FEICOM",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Financement des collectivités territoriales",
                category: "Financement Public"
              },
              {
                name: "MINAC",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Ministère des Arts et de la Culture",
                category: "Culture"
              },
              {
                name: "SOPECAM",
                logo: "/lovable-uploads/ffa1485d-b3bf-4fd5-a7f2-25d0d0a6a2f8.png",
                description: "Société de Presse et d'Édition du Cameroun",
                category: "Médias"
              },
              {
                name: "Ministère des Forêts et de la Faune",
                logo: "/lovable-uploads/158e7195-b643-46ce-b446-aab10230e51c.png",
                description: "Protection de l'environnement et biodiversité",
                category: "Environnement"
              },
              {
                name: "MINHDU",
                logo: "/lovable-uploads/e6647f0b-c37a-4d38-aaca-9b21583bf14d.png",
                description: "Ministère de l'Habitat et du Développement Urbain",
                category: "Développement Urbain"
              },
              {
                name: "Ministère du Tourisme",
                logo: "/lovable-uploads/ddac6329-9e9c-49fb-b4e1-26bdd388ea36.png",
                description: "Promotion du tourisme et des loisirs",
                category: "Tourisme"
              }
            ].map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                  <Badge variant="outline" className="mb-2">{partner.category}</Badge>
                  <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Partenariats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Types de Partenariats</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Partenaires Institutionnels",
                icon: <Award className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                count: "7+ ministères",
                description: "Institutions gouvernementales et organismes publics"
              },
              {
                title: "Partenaires Techniques",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                count: "15+ entreprises",
                description: "Expertise technique et réalisation"
              },
              {
                title: "Partenaires Financiers",
                icon: <Handshake className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500",
                count: "5+ institutions",
                description: "Financement et soutien économique"
              },
              {
                title: "Partenaires Internationaux",
                icon: <Globe className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                count: "3+ pays",
                description: "Coopération internationale"
              }
            ].map((type, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{type.count}</div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Remerciements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Remerciements</h2>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-lg">
              <blockquote className="text-xl italic text-gray-800 mb-6 leading-relaxed">
                "Le Monument Paul Biya est le fruit d'une collaboration exceptionnelle entre institutions publiques, 
                entreprises privées et partenaires internationaux. Grâce à leur engagement et leur vision partagée, 
                ce projet emblématique voit le jour pour la fierté de tous les Camerounais."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-700">L'équipe du Monument Paul Biya</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Almanach;
