-- ============================================================================
-- Migration Supabase — Panneau Admin Monument Paul Biya
-- À exécuter UNE SEULE FOIS dans : Supabase Dashboard → SQL Editor → New query
-- ============================================================================

-- 1. Table des médias (photos/vidéos) — alimente la Galerie
create table if not exists public.media_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  media_type text not null check (media_type in ('image', 'video')),
  storage_path text not null,
  category text not null default 'galerie',
  created_at timestamptz not null default now()
);

alter table public.media_items enable row level security;

-- Lecture publique (tout le monde peut voir la galerie)
create policy "Lecture publique des médias"
  on public.media_items for select
  using (true);

-- Écriture réservée aux administrateurs connectés
create policy "Écriture réservée aux administrateurs"
  on public.media_items for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 2. Table des actualités — alimente la page Événements
create table if not exists public.actualites (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  event_date date,
  image_path text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.actualites enable row level security;

create policy "Lecture publique des actualités publiées"
  on public.actualites for select
  using (published = true);

create policy "Gestion réservée aux administrateurs"
  on public.actualites for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 3. Bucket de stockage pour les fichiers médias
insert into storage.buckets (id, name, public)
values ('monument-media', 'monument-media', true)
on conflict (id) do nothing;

create policy "Lecture publique du bucket médias"
  on storage.objects for select
  using (bucket_id = 'monument-media');

create policy "Dépôt réservé aux administrateurs"
  on storage.objects for insert
  with check (bucket_id = 'monument-media' and auth.role() = 'authenticated');

create policy "Suppression réservée aux administrateurs"
  on storage.objects for delete
  using (bucket_id = 'monument-media' and auth.role() = 'authenticated');

-- ============================================================================
-- ÉTAPE SUIVANTE (à faire manuellement, hors SQL) :
-- Créer votre compte administrateur dans :
-- Supabase Dashboard → Authentication → Users → Add User
-- (email + mot de passe — c'est ce compte qui se connectera sur /admin)
-- ============================================================================
