
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec bleu dégradé et filigrane carte et icônes réseaux */}
      <section className="relative h-96 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center text-white overflow-hidden">
        {/* Filigrane carte et icônes réseaux sociaux */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full bg-repeat opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Crect x='10' y='20' width='30' height='20' rx='3'/%3E%3Ccircle cx='70' cy='30' r='8'/%3E%3Crect x='60' y='60' width='16' height='16' rx='3'/%3E%3Cpath d='M15 70l10-5 10 5 10-3v15H15V70z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-blue-600/40 to-blue-800/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {t('contact.title')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">{t('contact.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* Introduction avec fond bleu dégradé */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{t('contact.stay.connected')}</h2>
            <p className="text-xl text-blue-800 leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{t('contact.coordinates')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">{t('contact.phone')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>+237 620004018</p>
                <p>+237 656789012</p>
                <p>Lun-Dim: 8h-19h</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">{t('contact.email')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>info@monumentpaulbiya.cm</p>
                <p>visite@monumentpaulbiya.cm</p>
                <p>Réponse sous 24h</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">{t('contact.address')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('contact.address.line1')}</p>
                <p>{t('contact.address.line2')}</p>
                <p>{t('contact.address.line3')}</p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">{t('contact.hours')}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('contact.hours.weekdays')}</p>
                <p>{t('contact.hours.weekend')}</p>
                <p>{t('contact.hours.holidays')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">{t('contact.send.message')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 border-blue-200">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.name')}</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.firstname')}</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.subject')}</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Demande d'information</option>
                        <option>Réservation visite</option>
                        <option>Événement privé</option>
                        <option>Partenariat</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.form.message')}</label>
                      <textarea 
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </Card>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('contact.location')}</h3>
                  <div className="aspect-video bg-blue-300 rounded-lg mb-4 relative overflow-hidden">
                    {/* Image de localisation */}
                    <img 
                      src="/lovable-uploads/4c7838b8-f3d2-4168-867e-34f7590f2eb1.png" 
                      alt="Localisation du Monument Paul Biya" 
                      className="w-full h-full object-cover"
                    />
                    {/* Bouton pour ouvrir Google Maps */}
                    <div className="absolute bottom-4 right-4">
                      <a 
                        href="https://www.google.com/maps?q=2°57'32%22N+11°57'45%22E" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir sur Maps
                      </a>
                    </div>
                  </div>
                  <div className="text-blue-800 text-sm space-y-1 mb-4">
                    <p><strong>Coordonnées GPS:</strong></p>
                    <p>Latitude: 2°57'32"N</p>
                    <p>Longitude: 11°57'45"E</p>
                  </div>
                  <p className="text-blue-800">
                    {t('contact.location.description')}
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('contact.follow')}</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    {t('contact.social.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
