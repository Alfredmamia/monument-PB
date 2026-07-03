
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Loader2 } from "lucide-react";

// Chargement paresseux : chaque page devient son propre chunk JS, téléchargé
// uniquement lorsque l'utilisateur navigue vers cette route. Réduit le poids
// du bundle initial (auparavant 709 Ko / 190 Ko gzip tout-en-un).
const Index = lazy(() => import("./pages/Index"));
const Histoire = lazy(() => import("./pages/Histoire"));
const Monument = lazy(() => import("./pages/Monument"));
const Visite = lazy(() => import("./pages/Visite"));
const Galerie = lazy(() => import("./pages/Galerie"));
const Evenements = lazy(() => import("./pages/Evenements"));
const Glam = lazy(() => import("./pages/Glam"));
const AiresCulturelles = lazy(() => import("./pages/AiresCulturelles"));
const Almanach = lazy(() => import("./pages/Almanach"));
const Restaurant = lazy(() => import("./pages/Restaurant"));
const Hebergement = lazy(() => import("./pages/Hebergement"));
const Education = lazy(() => import("./pages/Education"));
const Boutique = lazy(() => import("./pages/Boutique"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <Loader2 className="w-8 h-8 animate-spin text-national-green" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/histoire" element={<Histoire />} />
              <Route path="/monument" element={<Monument />} />
              <Route path="/visite" element={<Visite />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/evenements" element={<Evenements />} />
              <Route path="/glam" element={<Glam />} />
              <Route path="/aires-culturelles" element={<AiresCulturelles />} />
              <Route path="/almanach" element={<Almanach />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/hebergement" element={<Hebergement />} />
              <Route path="/education" element={<Education />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
