
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec fond Fang-Beti selon la répartition */}
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
            Nous Contacter
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Une question ? Besoin d'aide ? Contactez notre équipe
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Restons connectés</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Une question ? Besoin d'aide ? Contactez notre équipe ou venez nous rendre visite à Sangmélima. 
              Carte interactive et réseaux sociaux à disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Coordonnées et Formulaire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Informations de Contact */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos Coordonnées</h2>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-600 mb-2">Carrefour MEPHO</p>
                    <p className="text-gray-600 mb-2">Sangmélima, Région du Sud</p>
                    <p className="text-gray-600">République du Cameroun</p>
                    <Button variant="outline" size="sm" className="mt-3 border-amber-600 text-amber-600 hover:bg-amber-50">
                      Voir sur la carte
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                    <p className="text-gray-600 mb-2">+237 620004018</p>
                    <p className="text-sm text-gray-500">Disponible 7j/7 de 8h à 20h</p>
                    <Button variant="outline" size="sm" className="mt-3 border-orange-600 text-orange-600 hover:bg-orange-50">
                      Appeler maintenant
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">info@monumentpaulbiya.cm</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    <Button variant="outline" size="sm" className="mt-3 border-red-600 text-red-600 hover:bg-red-50">
                      Envoyer un email
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Lundi - Vendredi: 8h - 18h</p>
                      <p>Samedi: 9h - 19h</p>
                      <p>Dimanche: 10h - 17h</p>
                      <p className="text-sm text-green-600 mt-2">Ouvert tous les jours de l'année</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Formulaire de Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Écrivez-nous</h2>
              
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                      <Input placeholder="Votre prénom" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                      <Input placeholder="Votre nom" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="votre.email@exemple.com" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <Input placeholder="+237 6XX XXX XXX" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>Sélectionnez un sujet</option>
                      <option>Réservation visite</option>
                      <option>Informations générales</option>
                      <option>Hébergement</option>
                      <option>Restaurant</option>
                      <option>Événements</option>
                      <option>Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={5}
                      placeholder="Votre message..." 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="w-4 h-4 text-amber-600" />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour me recontacter
                    </label>
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Interactive */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nous Trouver</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Carte Interactive</h3>
                    <p className="text-gray-600">Carrefour MEPHO, Sangmélima</p>
                    <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                      Ouvrir dans Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Réseaux Sociaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Suivez-nous</h2>
            <p className="text-xl text-gray-600 mb-12">
              Restez connecté avec nous sur les réseaux sociaux
            </p>
            
            <div className="flex justify-center space-x-6">
              {[
                { name: "Facebook", color: "bg-blue-600", icon: "📘" },
                { name: "Instagram", color: "bg-pink-600", icon: "📷" },
                { name: "Twitter", color: "bg-blue-400", icon: "🐦" },
                { name: "YouTube", color: "bg-red-600", icon: "📹" }
              ].map((social, index) => (
                <Button key={index} size="lg" className={`${social.color} hover:opacity-90 text-white`}>
                  <span className="text-xl mr-2">{social.icon}</span>
                  {social.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
