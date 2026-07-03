import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = 'https://etusenfzdaoghusrmuxy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0dXNlbmZ6ZGFvZ2h1c3JtdXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNTgwMjAsImV4cCI6MjA5ODYzNDAyMH0.Sg6caiyN4o6a9WTa82RIBtw4hE70mtMdhwsgXIhn9h4';

// La clé "anon" est conçue par Supabase pour être exposée côté client — sans risque.
// La sécurité réelle est assurée par les politiques RLS (Row Level Security) définies
// en base de données (voir supabase/migrations.sql), pas par le secret de cette clé.
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
