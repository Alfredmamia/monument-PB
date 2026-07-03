import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Video, Image, Users, Calendar, Download, Share2, Heart, HardHat, Eye, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

interface MediaItem {
  id: string;
  title: string;
  description: string | null;
  media_type: 'image' | 'video';
  storage_path: string;
  category: string;
  created_at: string;
}

const Galerie = () => {
  const [dynamicItems, setDynamicItems] = useState<MediaItem[]>([]);
  const [loadingDynamic, setLoadingDynamic] = useState(true);

  useEffect(() => {
    supabase
      .from('media_items')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(12)
      .then(({ data, error }) => {
        if (!error && data) setDynamicItems(data);
        setLoadingDynamic(false);
      });
  }, []);

  const getPublicUrl = (path: string) =>
    supabase.storage.from('monument-media').getPublicUrl(path).data.publicUrl;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec mosaïque sur fond bleu pâle */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 via-sky-950 to-national-green flex items-center justify-center text-white overflow-hidden pattern-institutional">
        {/* Filigrane artistique en transparence */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/lovable-uploads/21bd0be9-07e2-44b5-b0d4-194d93611a88.png" 
            alt="Aire Culturelle Soudano-Sahélienne" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-sky-300/20 to-sky-500/30"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Galerie Multimédia
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl text-sky-900">Galerie</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg text-sky-800">
            Photographies du chantier et du monument achevé, captations des cérémonies officielles
            (visites du DG FEICOM, du MINFOF) et œuvres d'artistes camerounais inspirés par le lieu —
            un fonds visuel appelé à s'enrichir au fil des événements organisés à Sangmélima.
          </p>
        </div>
      </section>

      {/* Ajouts récents — alimenté dynamiquement par le panneau /admin, sans redéploiement */}
      {(loadingDynamic || dynamicItems.length > 0) && (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Badge className="bg-national-red text-white">Récemment ajouté</Badge>
              <h2 className="text-xl font-bold text-gray-800">Derniers dépôts de l'administration</h2>
            </div>
            {loadingDynamic ? (
              <Loader2 className="w-6 h-6 animate-spin text-national-green" />
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {dynamicItems.map((item) => (
                  <div key={item.id} className="aspect-square rounded-lg overflow-hidden shadow group relative bg-gray-100">
                    {item.media_type === 'image' ? (
                      <img
                        src={getPublicUrl(item.storage_path)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <video src={getPublicUrl(item.storage_path)} className="w-full h-full object-cover" muted />
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs px-2 py-1 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Introduction avec fond bleu pâle */}
      <section className="py-20 bg-gradient-to-r from-stone-50 via-sky-50/40 to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">Plongez dans l'image</h2>
            <p className="text-xl text-sky-800 leading-relaxed mb-8">
              Explorez nos photos, vidéos et œuvres d'artistes inspirés par le monument. 
              Revivez les plus beaux moments et découvrez la richesse culturelle de Sangmélima.
            </p>
            <div className="bg-white/80 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-sky-900 mb-4">
                <strong>Conception Architecturale</strong>
              </p>
              <p className="text-sky-800 italic">
                "Le Monument Paul Biya et ses structures connexes sont le fruit d'une vision architecturale moderne 
                qui dialogue harmonieusement avec les traditions camerounaises."
              </p>
              <cite className="text-sm text-sky-700 block mt-2">
                - KPOLOM BILONG Dieudonné, Concepteur architectural du Monument et des structures connexes
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Categories de Galerie avec nuances de bleu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Collections</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Architecture",
                count: "120+ photos",
                color: "from-sky-400 to-sky-500",
                icon: <Camera className="w-8 h-8" />
              },
              {
                title: "Événements",
                count: "45 vidéos",
                color: "from-sky-500 to-sky-600",
                icon: <Video className="w-8 h-8" />
              },
              {
                title: "Œuvres d'Art",
                count: "80+ créations",
                color: "from-sky-600 to-sky-700",
                icon: <Image className="w-8 h-8" />
              },
              {
                title: "Visiteurs",
                count: "200+ témoignages",
                color: "from-sky-700 to-sky-800",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Construction",
                count: "60 étapes",
                color: "from-sky-800 to-sky-900",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                title: "Paysages",
                count: "90+ vues",
                color: "from-sky-500 to-sky-600",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-sky-200">
                <div className={`h-48 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button variant="outline" className="w-full group-hover:bg-sky-50 border-sky-300 text-sky-600">
                    Explorer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Visite de Chantier */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-sky-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-sky-100 text-sky-800">
                Monument Paul Biya
              </Badge>
              <h2 className="text-4xl font-bold text-sky-900 mb-8">Visite de Chantier</h2>
              <p className="text-xl text-sky-800 max-w-3xl mx-auto">
                Visite de chantier effectuée sous la supervision de <strong>Monsieur OMBGA ONAMBELE Aristide</strong>, 
                Représentant personnel du DCC (Directeur du Cabinet Civil de la Présidence)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-200">
                  <div className="relative h-96">
                    <img 
                      src="/lovable-uploads/b2916893-f49a-4c34-abcd-2eed59dedbf8.png" 
                      alt="Supervision de M. OMBGA ONAMBELE Aristide" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Supervision Officielle</h3>
                      <p className="text-sm opacity-90">M. OMBGA ONAMBELE Aristide en inspection</p>
                    </div>
                  </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-200">
                  <div className="relative h-96">
                    <img 
                      src="/lovable-uploads/881738c7-5a87-4527-89b1-54c9230b0dde.png" 
                      alt="Visite guidée des installations" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Visite Guidée</h3>
                      <p className="text-sm opacity-90">Présentation des installations</p>
                    </div>
                  </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-200">
                  <div className="relative h-96">
                    <img 
                      src="/lovable-uploads/25766e02-97fa-4002-8654-d3f6f5b51b9f.png" 
                      alt="Délégation officielle" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Délégation Officielle</h3>
                      <p className="text-sm opacity-90">Accompagnement de la délégation</p>
                    </div>
                  </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-200">
                  <div className="relative h-96">
                    <img 
                      src="/lovable-uploads/34b71f9a-bf78-4f38-b276-c8d92857ebd1.png" 
                      alt="Évaluation du projet" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">Évaluation du Projet</h3>
                      <p className="text-sm opacity-90">Inspection des travaux</p>
                    </div>
                  </div>
              </Card>
            </div>

            <div className="bg-white/80 p-8 rounded-lg shadow-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <HardHat className="w-8 h-8 text-sky-600 mr-3" />
                <h3 className="text-2xl font-bold text-sky-900">Supervision Présidentielle</h3>
              </div>
              <p className="text-sky-800 mb-6 leading-relaxed">
                Ces images témoignent de l'importance accordée par la Présidence de la République 
                au suivi et à la qualité de réalisation du Monument Paul Biya. La présence de 
                M. OMBGA ONAMBELE Aristide, Représentant personnel du DCC, illustre l'engagement 
                des plus hautes autorités dans la concrétisation de ce projet d'envergure nationale.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-gradient-to-r from-sky-500 to-sky-500 hover:from-sky-600 hover:to-sky-600 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir Plus de Photos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Principal */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-900 mb-16">Photos Récentes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }, (_, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow border-sky-100">
                <div className="aspect-square bg-gradient-to-br from-sky-200 to-sky-200 relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white/0 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white border-sky-300 text-sky-600">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Photo {index + 1}</span>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="p-1 text-sky-600 hover:bg-sky-50">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-1 text-sky-600 hover:bg-sky-50">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Participative avec fond bleu */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-sky-50/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-sky-900 mb-8">Partagez vos Souvenirs</h2>
            <p className="text-xl text-sky-800 mb-12">
              Vous avez visité le monument ? Partagez vos photos et vidéos avec la communauté !
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center border-sky-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-900">Téléchargez</h3>
                <p className="text-gray-600 text-sm">Partagez vos plus belles photos du monument</p>
              </Card>

              <Card className="p-6 text-center border-sky-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-900">Créez</h3>
                <p className="text-gray-600 text-sm">Réalisez des vidéos créatives de votre visite</p>
              </Card>

              <Card className="p-6 text-center border-sky-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-sky-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-900">Partagez</h3>
                <p className="text-gray-600 text-sm">Utilisez #MonumentPaulBiya sur les réseaux</p>
              </Card>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-sky-500 to-sky-500 hover:from-sky-600 hover:to-sky-600 text-white shadow-xl">
              <Camera className="w-5 h-5 mr-2" />
              Contribuer à la Galerie
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;