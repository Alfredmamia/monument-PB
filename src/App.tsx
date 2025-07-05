
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Histoire from "./pages/Histoire";
import Monument from "./pages/Monument";
import Visite from "./pages/Visite";
import Galerie from "./pages/Galerie";
import Evenements from "./pages/Evenements";
import Glam from "./pages/Glam";
import AiresCulturelles from "./pages/AiresCulturelles";
import Almanach from "./pages/Almanach";
import Restaurant from "./pages/Restaurant";
import Hebergement from "./pages/Hebergement";
import Education from "./pages/Education";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
