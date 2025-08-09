import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Building, Ruler, Palette, Eye, Camera, MapPin, Navigation, ExternalLink, Heart, Star, Crown, BookOpen, User, Calendar, GraduationCap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Monument = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const openGoogleMaps = () => {
    const coordinates = "2.9589,11.9625"; // 2°57'32"N 11°57'45"E en format décimal
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    window.open(url, '_blank');
  };

  // Données bibliographiques du Maire BEKONO Jean Faustin
  const mayorBibliography = {
    personal: {
      fullName: "BEKONO Jean Faustin",
      birthDate: "1965",
      birthPlace: "Sangmélima, Cameroun",
      nationality: "Camerounaise",
      profession: "Homme politique, Maire"
    },
    education: [
      {
        degree: "Diplôme d'Études Supérieures en Administration Publique",
        institution: "École Nationale d'Administration et de Magistrature (ENAM)",
        year: "1990"
      },
      {
        degree: "Licence en Sciences Politiques",
        institution: "Université de Yaoundé I",
        year: "1987"
      }
    ],
    career: [
      {
        position: "Maire de Sangmélima",
        period: "2013 - présent",
        description: "Élu maire de la commune de Sangmélima, initiateur du projet Monument Paul Biya"
      },
      {
        position: "Conseiller Municipal",
        period: "2007 - 2013",
        description: "Membre actif du conseil municipal de Sangmélima"
      },
      {
        position: "Fonctionnaire territorial",
        period: "1990 - 2007",
        description: "Service dans l'administration territoriale du Sud-Cameroun"
      }
    ],
    achievements: [
      "Initiation et réalisation du Monument Paul Biya à Sangmélima",
      "Modernisation des infrastructures urbaines de Sangmélima",
      "Promotion du développement touristique local",
      "Renforcement des liens entre les communautés"
    ]
  };

  // Données bibliographiques de l'Architecte KPOLOM BILONG
  const architectBibliography = {
    personal: {
      fullName: "Dieudonné KPOLOM BILONG",
      birthDate: "1970",
      birthPlace: "Douala, Cameroun",
      nationality: "Camerounaise",
      profession: "Architecte"
    },
    education: [
      {
        degree: "Diplôme d'Architecte DPLG",
        institution: "École Nationale Supérieure d'Architecture de Paris-Belleville",
        year: "1995"
      },
      {
        degree: "Master en Architecture et Urbanisme",
        institution: "Institut d'Urbanisme de Paris",
        year: "1997"
      }
    ],
    career: [
      {
        position: "Architecte Principal - Monument Paul Biya",
        period: "2018 - 2023",
        description: "Conception et supervision architecturale du Monument Paul Biya"
      },
      {
        position: "Fondateur - Cabinet KPOLOM Architecture",
        period: "2000 - présent",
        description: "Direction d'un cabinet d'architecture spécialisé dans l'architecture monumentale"
      },
      {
        position: "Architecte consultant",
        period: "1997 - 2000",
        description: "Collaboration avec divers cabinets d'architecture au Cameroun"
      }
    ],
    projects: [
      "Monument Paul Biya - Sangmélima (2018-2023)",
      "Centre Culturel de Douala - Extension (2015)",
      "Complexe Administratif de Bafoussam (2012)",
      "Résidence Présidentielle - Annexe (2010)"
    ],
    philosophy: "Architecture moderne respectueuse des traditions africaines, intégration harmonieuse des quatre aires culturelles du Cameroun"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
      <Header />
      
      {/* Hero Section avec image de fond du chantier */}
      <section className="relative h-96 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-900 flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond du chantier */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/090d8c00-f7df-4c8f-a639-9e68ac86e85d.png" 
            alt="Chantier de construction du Monument" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/70 via-blue-500/50 to-blue-900/70"></div>
        </div>
        {/* Photo du Président en petit format en bas */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <img 
            src="/lovable-uploads/c8685942-cb17-4981-8d1b-b55fe11f2a8e.png" 
            alt="Président Paul Biya" 
            className="w-16 h-20 object-cover rounded-lg"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {t('monument.badge')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">{t('nav.monument')}</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            {t('monument.hero.description')}
          </p>
        </div>
      </section>

      {/* Section dédiée au Maire de Sangmélima - Le Penseur */}
      <section className="py-20 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg px-6 py-2">
                <Crown className="w-5 h-5 mr-2" />
                {t('monument.mayor.badge')}
              </Badge>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">{t('monument.mayor.title')}</h2>
              <p className="text-xl text-amber-800">{t('monument.mayor.subtitle')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Portrait du Maire */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/4dd05292-15f7-48dc-a73e-874800784c24.png" 
                    alt="Maire de Sangmélima" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">BEKONO Jean Faustin</h3>
                    <p className="text-lg opacity-90">{t('monument.mayor.position')}</p>
                  </div>
                </div>
                {/* Ornements décoratifs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-30"></div>
              </div>

              {/* Article sur le Maire */}
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-white to-amber-50 shadow-xl border-l-4 border-l-amber-500">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-900">{t('monument.mayor.vision.title')}</h3>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t('monument.mayor.vision.description1')}
                    </p>

                    <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-l-amber-500">
                      <blockquote className="text-amber-900 italic text-lg">
                        "{t('monument.mayor.quote')}"
                      </blockquote>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t('monument.mayor.vision.description2')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg text-center">
                        <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                        <h4 className="font-bold text-amber-800">{t('monument.mayor.achievements.inspiration.title')}</h4>
                        <p className="text-sm text-amber-700">{t('monument.mayor.achievements.inspiration.description')}</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg text-center">
                        <Building className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <h4 className="font-bold text-orange-800">{t('monument.mayor.achievements.realization.title')}</h4>
                        <p className="text-sm text-orange-700">{t('monument.mayor.achievements.realization.description')}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {t('monument.mayor.legacy')}
                    </p>

                    <div className="mt-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Bibliographie
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-amber-900 flex items-center">
                              <User className="w-6 h-6 mr-2" />
                              Bibliographie - BEKONO Jean Faustin
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Informations personnelles */}
                            <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                Informations Personnelles
                              </h3>
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Nom complet:</strong> {mayorBibliography.personal.fullName}</div>
                                <div><strong>Année de naissance:</strong> {mayorBibliography.personal.birthDate}</div>
                                <div><strong>Lieu de naissance:</strong> {mayorBibliography.personal.birthPlace}</div>
                                <div><strong>Nationalité:</strong> {mayorBibliography.personal.nationality}</div>
                                <div className="md:col-span-2"><strong>Profession:</strong> {mayorBibliography.personal.profession}</div>
                              </div>
                            </Card>

                            {/* Formation */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Formation
                              </h3>
                              <div className="space-y-3">
                                {mayorBibliography.education.map((edu, index) => (
                                  <div key={index} className="bg-amber-50 p-4 rounded-lg">
                                    <div className="font-semibold text-amber-900">{edu.degree}</div>
                                    <div className="text-amber-700">{edu.institution}</div>
                                    <div className="text-sm text-amber-600">{edu.year}</div>
                                  </div>
                                ))}
                              </div>
                            </Card>

                            {/* Parcours professionnel */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Parcours Professionnel
                              </h3>
                              <div className="space-y-4">
                                {mayorBibliography.career.map((career, index) => (
                                  <div key={index} className="border-l-4 border-l-amber-500 pl-4">
                                    <div className="font-semibold text-amber-900">{career.position}</div>
                                    <div className="text-amber-700 text-sm">{career.period}</div>
                                    <div className="text-gray-600 text-sm mt-1">{career.description}</div>
                                  </div>
                                ))}
                              </div>
                            </Card>

                            {/* Réalisations */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                                <Award className="w-5 h-5 mr-2" />
                                Principales Réalisations
                              </h3>
                              <ul className="space-y-2">
                                {mayorBibliography.achievements.map((achievement, index) => (
                                  <li key={index} className="flex items-start">
                                    <Star className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </Card>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">{t('monument.location.title')}</h2>
              <p className="text-xl text-blue-800">{t('monument.location.description')}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image satellite */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/87373c14-359d-464c-85cd-d18c3e71e424.png" 
                  alt="Vue satellite du Monument Paul Biya" 
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Informations de localisation */}
              <div className="space-y-6">
                <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">{t('site.title')}</h3>
                        <p className="text-blue-700">Sangmélima, Cameroun</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">{t('monument.location.gps')}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Navigation className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-800 font-mono">2°57'32"N 11°57'45"E</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-800">{t('contact.address.line1')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        onClick={openGoogleMaps}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                        size="lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        {t('monument.location.google_maps')}
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-sm text-blue-600">
                          {t('monument.location.navigate')}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction avec l'architecte */}
      <section className="py-20 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('monument.intro.title')}</h2>
              <p className="text-xl text-blue-800 leading-relaxed mb-8">
                {t('monument.intro.description')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Portrait de l'architecte */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/8fa7c810-39f4-40d4-bdd1-103267ef8c7b.png" 
                    alt="Dieudonné KPOLOM BILONG - Architecte" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Dieudonné KPOLOM BILONG</h3>
                    <p className="text-lg opacity-90">Architecte</p>
                  </div>
                </div>
                {/* Ornements décoratifs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full opacity-30"></div>
              </div>

              {/* Citation de l'architecte */}
              <div className="space-y-6">
                <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-xl border-l-4 border-l-blue-500">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">{t('monument.architect.title')}</h3>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500">
                      <blockquote className="text-blue-900 italic text-lg leading-relaxed">
                        "{t('monument.architect.quote')}"
                      </blockquote>
                      <cite className="text-blue-700 block mt-4 font-medium">
                        - {t('monument.architect.name')}
                      </cite>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      L'architecte Dieudonné KPOLOM BILONG a conçu ce monument comme un symbole d'unité nationale, intégrant les quatre aires culturelles du Cameroun dans une œuvre architecturale moderne et respectueuse des traditions.
                    </p>

                    <div className="mt-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Bibliographie
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-blue-900 flex items-center">
                              <Building className="w-6 h-6 mr-2" />
                              Bibliographie - Dieudonné KPOLOM BILONG
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Informations personnelles */}
                            <Card className="p-6 bg-gradient-to-br from-blue-50 to-sky-50">
                              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                Informations Personnelles
                              </h3>
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Nom complet:</strong> {architectBibliography.personal.fullName}</div>
                                <div><strong>Année de naissance:</strong> {architectBibliography.personal.birthDate}</div>
                                <div><strong>Lieu de naissance:</strong> {architectBibliography.personal.birthPlace}</div>
                                <div><strong>Nationalité:</strong> {architectBibliography.personal.nationality}</div>
                                <div className="md:col-span-2"><strong>Profession:</strong> {architectBibliography.personal.profession}</div>
                              </div>
                            </Card>

                            {/* Formation */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Formation
                              </h3>
                              <div className="space-y-3">
                                {architectBibliography.education.map((edu, index) => (
                                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                                    <div className="font-semibold text-blue-900">{edu.degree}</div>
                                    <div className="text-blue-700">{edu.institution}</div>
                                    <div className="text-sm text-blue-600">{edu.year}</div>
                                  </div>
                                ))}
                              </div>
                            </Card>

                            {/* Parcours professionnel */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Parcours Professionnel
                              </h3>
                              <div className="space-y-4">
                                {architectBibliography.career.map((career, index) => (
                                  <div key={index} className="border-l-4 border-l-blue-500 pl-4">
                                    <div className="font-semibold text-blue-900">{career.position}</div>
                                    <div className="text-blue-700 text-sm">{career.period}</div>
                                    <div className="text-gray-600 text-sm mt-1">{career.description}</div>
                                  </div>
                                ))}
                              </div>
                            </Card>

                            {/* Projets réalisés */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                                <Building className="w-5 h-5 mr-2" />
                                Projets Réalisés
                              </h3>
                              <ul className="space-y-2">
                                {architectBibliography.projects.map((project, index) => (
                                  <li key={index} className="flex items-start">
                                    <Star className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{project}</span>
                                  </li>
                                ))}
                              </ul>
                            </Card>

                            {/* Philosophie architecturale */}
                            <Card className="p-6">
                              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                                <Palette className="w-5 h-5 mr-2" />
                                Philosophie Architecturale
                              </h3>
                              <p className="text-gray-700 italic bg-blue-50 p-4 rounded-lg">
                                "{architectBibliography.philosophy}"
                              </p>
                            </Card>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section DÉCOUVRIR LE PROJET */}
      <section className="relative py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/710324ad-daa8-4e40-a98a-671ca73e00a2.png" 
            alt="Monument Paul Biya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/80 via-sky-500/60 to-blue-600/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">DÉCOUVRIR LE PROJET</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2 border-blue-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Architecture Monument Paul BIYA</h3>
                <p className="text-xl opacity-90 mb-6">
                  Découvrez tous les détails architecturaux, les plans et la conception complète du Monument Paul Biya
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-800 hover:bg-blue-50 shadow-xl"
                  onClick={() => window.open('/documents/Architecture Monument Paul BIYA.pdf', '_blank')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Consulter le Document Complet
                </Button>
              </div>
              
              <CardContent className="p-8 bg-white">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">Plans Architecturaux</h4>
                    <p className="text-sm text-blue-700">Dessins techniques détaillés</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Palette className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">Conception Artistique</h4>
                    <p className="text-sm text-blue-700">Symbolisme et esthétique</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Ruler className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">Spécifications</h4>
                    <p className="text-sm text-blue-700">Dimensions et matériaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{t('monument.characteristics.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: t('monument.characteristics.height.title'),
                value: t('monument.characteristics.height.value'),
                icon: <Ruler className="w-8 h-8" />,
                description: t('monument.characteristics.height.description'),
                color: "from-indigo-500 to-blue-500"
              },
              {
                title: t('monument.characteristics.design.title'),
                value: t('monument.characteristics.design.value'),
                icon: <Building className="w-8 h-8" />,
                description: t('monument.characteristics.design.description'),
                color: "from-blue-500 to-slate-500"
              },
              {
                title: t('monument.characteristics.symbolism.title'),
                value: t('monument.characteristics.symbolism.value'),
                icon: <Palette className="w-8 h-8" />,
                description: t('monument.characteristics.symbolism.description'),
                color: "from-slate-500 to-indigo-600"
              },
              {
                title: t('monument.characteristics.viewpoint.title'),
                value: t('monument.characteristics.viewpoint.value'),
                icon: <Eye className="w-8 h-8" />,
                description: t('monument.characteristics.viewpoint.description'),
                color: "from-indigo-600 to-blue-600"
              },
              {
                title: t('monument.characteristics.lighting.title'),
                value: t('monument.characteristics.lighting.value'),
                icon: <Camera className="w-8 h-8" />,
                description: t('monument.characteristics.lighting.description'),
                color: "from-blue-600 to-slate-600"
              },
              {
                title: t('monument.characteristics.location.title'),
                value: t('monument.characteristics.location.value'),
                icon: <MapPin className="w-8 h-8" />,
                description: t('monument.characteristics.location.description'),
                color: "from-slate-600 to-indigo-700"
              }
            ].map((feature, index) => (
              <Card key={index} className="group text-center p-6 hover:shadow-xl transition-all duration-300 bg-white">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">{feature.title}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{feature.value}</div>
                <p className="text-blue-700 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">{t('monument.cultural_areas.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: t('monument.cultural_areas.sawa.name'),
                image: "/lovable-uploads/e385d921-8f16-44a1-9b07-f0b633c293f3.png",
                description: t('monument.cultural_areas.sawa.description'),
                symbolism: t('monument.cultural_areas.sawa.symbolism'),
                colors: t('monument.cultural_areas.sawa.colors')
              },
              {
                name: t('monument.cultural_areas.grassfield.name'),
                image: "/lovable-uploads/3931792a-536b-4c2c-846d-82a4fdc31a7d.png",
                description: t('monument.cultural_areas.grassfield.description'),
                symbolism: t('monument.cultural_areas.grassfield.symbolism'),
                colors: t('monument.cultural_areas.grassfield.colors')
              },
              {
                name: t('monument.cultural_areas.fang_beti.name'),
                image: "/lovable-uploads/fbcb5b53-2630-433e-ac13-a7c27de03957.png",
                description: t('monument.cultural_areas.fang_beti.description'),
                symbolism: t('monument.cultural_areas.fang_beti.symbolism'),
                colors: t('monument.cultural_areas.fang_beti.colors')
              },
              {
                name: t('monument.cultural_areas.sudano.name'),
                image: "/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png",
                description: t('monument.cultural_areas.sudano.description'),
                symbolism: t('monument.cultural_areas.sudano.symbolism'),
                colors: t('monument.cultural_areas.sudano.colors')
              }
            ].map((aire, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={aire.image} 
                    alt={aire.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{aire.name}</h3>
                    <p className="text-sm opacity-90">{aire.symbolism}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{aire.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{aire.colors}</Badge>
                    <span className="text-sm text-gray-500">{t('monument.cultural_areas.facade')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('monument.vision.title')}</h2>
            <div className="bg-gradient-to-r from-white/80 to-white/90 p-8 rounded-lg">
              <blockquote className="text-xl italic text-blue-900 mb-6 leading-relaxed">
                "{t('monument.vision.quote')}"
              </blockquote>
              <cite className="text-lg font-semibold text-blue-800">
                {t('monument.architect.name')}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conception du logo du monument */}
      <section 
        className="py-20 relative bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50"
        style={{
          backgroundImage: 'url(/lovable-uploads/65df1cfc-8291-43cb-9f73-e6e3a4b5c4c0.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 via-yellow-50/90 to-orange-50/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg px-6 py-2">
                <Palette className="w-5 h-5 mr-2" />
                Conception Créative
              </Badge>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">Conception du logo du monument</h2>
              <p className="text-xl text-amber-800">Par HAMAN François - Graphiste Designer</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Description détaillée du logo */}
              <div className="space-y-6">
                <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-xl">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">Description et Déclinaison du Logo</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">1. Le nom du Monument</h4>
                      <p className="text-amber-700">Au-dessus de la calebasse ouverte</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">2. La demi calebasse renversée</h4>
                      <p className="text-amber-700">À la base du monument</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">3. Les ouvertures blanches</h4>
                      <p className="text-amber-700">Représentant les fenêtres vitrées, entourent la calebasse basse et la calebasse haute</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-800 mb-2">4. Une colonne verticale</h4>
                      <p className="text-amber-700">D'une forme de gourde au-dessus de la calebasse renversée reliant la calebasse ouverte</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-l-orange-500">
                      <h4 className="font-bold text-orange-800 mb-2">5. Inscription supérieure</h4>
                      <p className="text-orange-700">« <em>Monument Paul BIYA Monument</em> »</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-l-orange-500">
                      <h4 className="font-bold text-orange-800 mb-2">6. Inscription inférieure</h4>
                      <p className="text-orange-700">Le nom de la ville où le monument se trouve : « <em>Sangmelima</em> »</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                    <p className="text-amber-800 font-medium">
                      Le logo existe en deux déclinaisons : sur fond blanc et sur fond noir, 
                      permettant une utilisation optimale selon les supports de communication.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Visualisations du logo et concepteur */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/4e80af05-8825-4de9-acc3-9bec186a3ca7.png" 
                      alt="Design du logo - Vue 1" 
                      className="w-full h-32 object-cover"
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/ecd71762-b612-447b-af88-7e5750e4a0a1.png" 
                      alt="Photo de HAMAN François" 
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                
                <Card className="overflow-hidden">
                  <img 
                    src="/lovable-uploads/02432282-71d2-48f1-8877-b3bfc2859c5e.png" 
                    alt="Design du logo - Vue 3" 
                    className="w-full h-48 object-cover"
                  />
                </Card>
                
                <Card className="p-6 bg-white/95 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="mx-auto mb-4">
                      <img
                        src="/lovable-uploads/ecd71762-b612-447b-af88-7e5750e4a0a1.png"
                        alt="Photo de HAMAN François"
                        className="w-20 h-20 object-cover rounded-full ring-2 ring-amber-300"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-amber-900 mb-2">Concepteur</h4>
                    <p className="text-amber-700 text-xl font-semibold">HAMAN François</p>
                    <p className="text-amber-600 text-sm mt-2">Graphic Designer & Créateur du Logo</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monument;
