import React, { useEffect, useRef, useState } from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';

interface PannellumHotSpot {
  pitch: number;
  yaw: number;
  type: 'scene' | 'info';
  text: string;
  sceneId?: string;
}

interface PannellumSceneConfig {
  type: 'equirectangular';
  panorama: string;
  title: string;
  autoLoad: boolean;
  hotSpots: PannellumHotSpot[];
}

interface PannellumViewer {
  on: (event: 'load' | 'error', callback: () => void) => void;
  loadScene: (sceneId: string) => void;
  destroy: () => void;
}

interface PannellumStatic {
  viewer: (
    container: HTMLElement,
    config: {
      default: { firstScene: string; sceneFadeDuration: number; autoLoad: boolean; compass: boolean };
      scenes: Record<string, PannellumSceneConfig>;
    }
  ) => PannellumViewer;
}

declare global {
  interface Window {
    pannellum?: PannellumStatic;
  }
}

export interface Panorama360Scene {
  id: string;
  title: string;
  /** URL équirectangulaire (2:1). Remplacer par les vraies prises de vue du Monument. */
  imageUrl: string;
  hotSpots?: {
    pitch: number;
    yaw: number;
    text: string;
    targetSceneId?: string;
  }[];
}

interface Panorama360Props {
  scenes: Panorama360Scene[];
  initialSceneId?: string;
  className?: string;
}

/**
 * Visionneuse de visite virtuelle 360°.
 *
 * NOTE DE PRODUCTION : les scènes fournies par défaut (voir Visite.tsx) utilisent une image de
 * démonstration libre de droits en attendant les prises de vue réelles du Monument (photographe
 * professionnel avec trépied + tête panoramique, ou solution clé en main type Matterport pour un
 * scan 3D complet). Le remplacement se fait uniquement en changeant `imageUrl` — aucune autre
 * modification de code n'est nécessaire.
 */
const Panorama360: React.FC<Panorama360Props> = ({ scenes, initialSceneId, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PannellumViewer | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [activeScene, setActiveScene] = useState(initialSceneId || scenes[0]?.id);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const init = () => {
      if (cancelled) return;
      if (!window.pannellum) {
        attempts += 1;
        if (attempts > 100) {
          setStatus('error');
          return;
        }
        setTimeout(init, 100);
        return;
      }
      if (!containerRef.current || scenes.length === 0) return;

      try {
        const pannellumScenes: Record<string, PannellumSceneConfig> = {};
        scenes.forEach((scene) => {
          pannellumScenes[scene.id] = {
            type: 'equirectangular',
            panorama: scene.imageUrl,
            title: scene.title,
            autoLoad: true,
            hotSpots: (scene.hotSpots || []).map((h) => ({
              pitch: h.pitch,
              yaw: h.yaw,
              type: h.targetSceneId ? 'scene' : 'info',
              text: h.text,
              sceneId: h.targetSceneId,
            })),
          };
        });

        viewerRef.current = window.pannellum.viewer(containerRef.current, {
          default: {
            firstScene: activeScene,
            sceneFadeDuration: 800,
            autoLoad: true,
            compass: true,
          },
          scenes: pannellumScenes,
        });

        viewerRef.current.on('load', () => setStatus('ready'));
        viewerRef.current.on('error', () => setStatus('error'));
      } catch (err) {
        console.error('Erreur d\'initialisation Pannellum :', err);
        setStatus('error');
      }
    };

    init();

    return () => {
      cancelled = true;
      if (viewerRef.current) {
        try { viewerRef.current.destroy(); } catch { /* noop */ }
        viewerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenes]);

  const goToScene = (sceneId: string) => {
    setActiveScene(sceneId);
    if (viewerRef.current) {
      viewerRef.current.loadScene(sceneId);
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden bg-slate-900 ${className}`}>
      <div ref={containerRef} className="w-full h-full min-h-[420px]" />

      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-national-gold" />
          <p className="text-sm opacity-80">Chargement de la visite immersive…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white gap-3 px-6 text-center">
          <AlertTriangle className="w-8 h-8 text-national-red" />
          <p className="text-sm opacity-80">
            La visionneuse 360° n'a pas pu se charger (connexion requise vers le CDN Pannellum).
          </p>
        </div>
      )}

      {scenes.length > 1 && status === 'ready' && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => goToScene(scene.id)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                activeScene === scene.id ? 'bg-national-gold text-slate-900 font-semibold' : 'text-white hover:bg-white/20'
              }`}
            >
              {scene.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Panorama360;
