import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Session } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Upload, LogOut, Loader2, Image as ImageIcon, Trash2, Video, Newspaper } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MediaItem {
  id: string;
  title: string;
  description: string | null;
  media_type: 'image' | 'video';
  storage_path: string;
  category: string;
  created_at: string;
}

interface Actualite {
  id: string;
  title: string;
  content: string;
  event_date: string | null;
  published: boolean;
  created_at: string;
}

const Admin: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [items, setItems] = useState<MediaItem[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('galerie');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [loadingActualites, setLoadingActualites] = useState(false);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsDate, setNewsDate] = useState('');
  const [publishingNews, setPublishingNews] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const fetchItems = useCallback(async () => {
    setLoadingItems(true);
    const { data, error } = await supabase
      .from('media_items')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error("Impossible de charger les médias : " + error.message);
    } else {
      setItems(data || []);
    }
    setLoadingItems(false);
  }, []);

  useEffect(() => {
    if (session) fetchItems();
  }, [session, fetchItems]);

  const fetchActualites = useCallback(async () => {
    setLoadingActualites(true);
    const { data, error } = await supabase
      .from('actualites')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error("Impossible de charger les actualités : " + error.message);
    } else {
      setActualites(data || []);
    }
    setLoadingActualites(false);
  }, []);

  useEffect(() => {
    if (session) fetchActualites();
  }, [session, fetchActualites]);

  const handlePublishNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle.trim() || !newsContent.trim()) {
      toast.error('Le titre et le contenu sont requis.');
      return;
    }
    setPublishingNews(true);
    const { error } = await supabase.from('actualites').insert({
      title: newsTitle,
      content: newsContent,
      event_date: newsDate || null,
      published: true,
    });
    if (error) {
      toast.error("Échec de la publication : " + error.message);
    } else {
      toast.success('Actualité publiée — visible immédiatement sur la page Événements.');
      setNewsTitle('');
      setNewsContent('');
      setNewsDate('');
      fetchActualites();
    }
    setPublishingNews(false);
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm('Supprimer cette actualité ? Action irréversible.')) return;
    const { error } = await supabase.from('actualites').delete().eq('id', id);
    if (error) {
      toast.error('Erreur lors de la suppression.');
    } else {
      toast.success('Actualité supprimée.');
      fetchActualites();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error('Connexion échouée : ' + error.message);
    } else {
      toast.success('Connexion réussie');
    }
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Déconnecté');
  };

  const handleFileSelect = (selected: File | null) => {
    if (!selected) return;
    const isImage = selected.type.startsWith('image/');
    const isVideo = selected.type.startsWith('video/');
    if (!isImage && !isVideo) {
      toast.error('Seuls les fichiers image ou vidéo sont acceptés.');
      return;
    }
    if (selected.size > 50 * 1024 * 1024) {
      toast.error('Fichier trop volumineux (limite : 50 Mo).');
      return;
    }
    setFile(selected);
    if (!title) setTitle(selected.name.replace(/\.[^/.]+$/, ''));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFileSelect(e.dataTransfer.files?.[0] || null);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Sélectionnez un fichier avant de déposer.');
      return;
    }
    setUploading(true);
    try {
      const mediaType: 'image' | 'video' = file.type.startsWith('video/') ? 'video' : 'image';
      const ext = file.name.split('.').pop();
      const path = `${category}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('monument-media')
        .upload(path, file, { cacheControl: '3600', upsert: false });
      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase.from('media_items').insert({
        title: title || file.name,
        description: description || null,
        media_type: mediaType,
        storage_path: path,
        category,
      });
      if (insertError) throw insertError;

      toast.success('Média déposé avec succès — visible immédiatement sur le site.');
      setTitle('');
      setDescription('');
      setFile(null);
      fetchItems();
    } catch (err) {
      toast.error("Échec du dépôt : " + (err instanceof Error ? err.message : 'erreur inconnue'));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm(`Supprimer "${item.title}" ? Cette action est irréversible.`)) return;
    const { error: storageError } = await supabase.storage.from('monument-media').remove([item.storage_path]);
    const { error: dbError } = await supabase.from('media_items').delete().eq('id', item.id);
    if (storageError || dbError) {
      toast.error('Erreur lors de la suppression.');
    } else {
      toast.success('Média supprimé.');
      fetchItems();
    }
  };

  const getPublicUrl = (path: string) =>
    supabase.storage.from('monument-media').getPublicUrl(path).data.publicUrl;

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-national-green" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <Card className="w-full max-w-sm p-8">
            <h1 className="text-2xl font-bold text-national-green mb-1">Espace Administrateur</h1>
            <p className="text-sm text-gray-500 mb-6">Connectez-vous pour gérer les médias du site.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" disabled={loginLoading} className="w-full bg-national-green hover:bg-sky-800">
                {loginLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Se connecter
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-6">
              Compte créé depuis le tableau de bord Supabase (Authentication → Users) — aucune inscription publique.
            </p>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-national-green">Gestion des Médias</h1>
            <p className="text-sm text-gray-500">Connecté en tant que {session.user.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
        </div>

        {/* Formulaire de dépôt */}
        <Card className="p-6 mb-10">
          <h2 className="text-lg font-bold mb-4">Déposer un nouveau média</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? 'border-national-green bg-national-green/5' : 'border-gray-300'
              }`}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 mb-2">
                Glissez-déposez une image ou une vidéo ici, ou
              </p>
              <label className="inline-block">
                <span className="text-national-green font-medium cursor-pointer hover:underline">
                  parcourez vos fichiers
                </span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                />
              </label>
              {file && (
                <p className="text-sm text-national-green font-medium mt-3">
                  ✓ {file.name} ({(file.size / 1024 / 1024).toFixed(1)} Mo)
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="category">Catégorie</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option value="galerie">Galerie</option>
                  <option value="evenement">Événement</option>
                  <option value="chantier">Chantier / Construction</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description (optionnelle)</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
            </div>
            <Button type="submit" disabled={uploading || !file} className="bg-national-green hover:bg-sky-800">
              {uploading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
              {uploading ? 'Dépôt en cours...' : 'Déposer et publier'}
            </Button>
          </form>
        </Card>

        {/* Rédaction d'actualités */}
        <Card className="p-6 mb-10">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-national-green" />
            Publier une actualité
          </h2>
          <form onSubmit={handlePublishNews} className="space-y-4">
            <div>
              <Label htmlFor="newsTitle">Titre</Label>
              <Input id="newsTitle" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="newsContent">Contenu</Label>
                <Textarea id="newsContent" value={newsContent} onChange={(e) => setNewsContent(e.target.value)} rows={4} required />
              </div>
              <div>
                <Label htmlFor="newsDate">Date de l'événement (optionnelle)</Label>
                <Input id="newsDate" type="date" value={newsDate} onChange={(e) => setNewsDate(e.target.value)} />
              </div>
            </div>
            <Button type="submit" disabled={publishingNews} className="bg-national-green hover:bg-sky-800">
              {publishingNews ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Newspaper className="w-4 h-4 mr-2" />}
              {publishingNews ? 'Publication...' : 'Publier sur la page Événements'}
            </Button>
          </form>

          {loadingActualites ? (
            <Loader2 className="w-5 h-5 animate-spin text-national-green mt-6" />
          ) : (
            <div className="mt-6 space-y-2">
              {actualites.map((news) => (
                <div key={news.id} className="flex justify-between items-start border rounded-md p-3 text-sm">
                  <div>
                    <p className="font-medium">{news.title}</p>
                    <p className="text-gray-500 text-xs line-clamp-1">{news.content}</p>
                  </div>
                  <button onClick={() => handleDeleteNews(news.id)} className="text-gray-400 hover:text-national-red p-1" aria-label="Supprimer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {actualites.length === 0 && <p className="text-gray-400 text-sm">Aucune actualité publiée pour l'instant.</p>}
            </div>
          )}
        </Card>

        {/* Liste des médias existants */}
        <h2 className="text-lg font-bold mb-4">Médias publiés ({items.length})</h2>
        {loadingItems ? (
          <Loader2 className="w-6 h-6 animate-spin text-national-green" />
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden group relative">
                <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                  {item.media_type === 'image' ? (
                    <img src={getPublicUrl(item.storage_path)} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <Video className="w-8 h-8" />
                      <span className="text-xs mt-1">Vidéo</span>
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-xs font-medium truncate">{item.title}</p>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-national-red hover:text-white text-gray-600 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Supprimer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </Card>
            ))}
            {items.length === 0 && (
              <p className="text-gray-400 text-sm col-span-full text-center py-8">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-40" />
                Aucun média déposé pour l'instant.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
