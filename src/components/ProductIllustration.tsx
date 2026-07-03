import React from 'react';
import emblemMonument from '@/assets/emblem-monument.png';

export type ProductFamily = 'bijouterie' | 'textile' | 'vaisselle' | 'papeterie' | 'banniere' | 'hightech';
export type ProductTint = 'green' | 'red' | 'gold';

const TINT_BG: Record<ProductTint, string> = {
  green: 'radial-gradient(circle at 35% 30%, #0c5a86, #052e42 75%)',
  red: 'radial-gradient(circle at 35% 30%, #5c1420, #2b0a0f 75%)',
  gold: 'radial-gradient(circle at 35% 30%, #6b4f14, #2b1f08 75%)',
};

const PinBadge: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <radialGradient id="gold1" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#f4d874" /><stop offset="55%" stopColor="#C9A227" /><stop offset="100%" stopColor="#8a6a1a" />
      </radialGradient>
      <radialGradient id="green1" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#38bdf8" /><stop offset="60%" stopColor="#0369A1" /><stop offset="100%" stopColor="#0c4a6e" />
      </radialGradient>
    </defs>
    <ellipse cx="75" cy="122" rx="26" ry="6" fill="#000" opacity="0.35" />
    <circle cx="75" cy="65" r="44" fill="url(#gold1)" />
    <circle cx="75" cy="65" r="44" fill="none" stroke="#5c4718" strokeWidth="1.5" />
    <circle cx="75" cy="65" r="36" fill="url(#green1)" />
    <circle cx="75" cy="65" r="36" fill="none" stroke="#FCD116" strokeWidth="2.5" />
    <circle cx="63" cy="52" r="10" fill="#ffffff" opacity="0.12" />
    <path d="M75 40 L81 60 L102 60 L85 72 L91 92 L75 80 L59 92 L65 72 L48 60 L69 60 Z" fill="#FCD116" />
    <path d="M75 40 L81 60 L91 60 L79 68 L75 80 Z" fill="#fff3b0" opacity="0.55" />
    <path d="M58 113 Q75 98 92 113 L91 128 L82 121 L75 130 L68 121 L59 128 Z" fill="#a30d1c" />
    <path d="M58 113 Q75 98 92 113 L88 118 Q75 106 62 118 Z" fill="#e21b32" />
    <rect x="70" y="16" width="10" height="26" rx="3" fill="#b8bec6" />
    <rect x="70" y="16" width="4" height="26" rx="2" fill="#e6e9ec" />
  </svg>
);

const Textile: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <linearGradient id="tshirt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#e4e1d8" />
      </linearGradient>
    </defs>
    <ellipse cx="75" cy="132" rx="34" ry="6" fill="#000" opacity="0.3" />
    <path d="M50 28 L33 41 L44 60 L54 51 L54 128 Q75 136 96 128 L96 51 L106 60 L117 41 L100 28 Q94 42 75 42 Q56 42 50 28 Z" fill="url(#tshirt)" />
    <path d="M50 28 L33 41 L44 60 L54 51 L54 128 Q75 136 96 128 L96 51 L106 60 L117 41 L100 28 Q94 42 75 42 Q56 42 50 28 Z" fill="none" stroke="#c9c5ba" strokeWidth="1.2" />
    <path d="M56 30 Q75 46 94 30" fill="none" stroke="#b5b1a5" strokeWidth="1.5" />
    <rect x="54" y="114" width="42" height="7" fill="#0369A1" />
    <rect x="54" y="121" width="42" height="4.5" fill="#CE1126" />
    <rect x="54" y="125.5" width="42" height="4.5" fill="#FCD116" />
    <path d="M75 62 L80 76 L95 76 L83 85 L88 100 L75 91 L62 100 L67 85 L55 76 L70 76 Z" fill="#C9A227" />
    <path d="M75 62 L80 76 L88 76 L78 83 L75 91 Z" fill="#f4d874" opacity="0.6" />
  </svg>
);

const Vaisselle: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <linearGradient id="mugbody" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#d8d4c8" /><stop offset="45%" stopColor="#ffffff" /><stop offset="100%" stopColor="#c4c0b3" />
      </linearGradient>
    </defs>
    <ellipse cx="73" cy="120" rx="30" ry="6" fill="#000" opacity="0.3" />
    <path d="M42 42 L102 42 L99 108 Q99 118 88 118 L56 118 Q45 118 45 108 Z" fill="url(#mugbody)" />
    <ellipse cx="72" cy="42" rx="30" ry="6" fill="#f2f0ea" />
    <ellipse cx="72" cy="42" rx="30" ry="6" fill="none" stroke="#b5b1a5" strokeWidth="1" />
    <path d="M100 52 Q124 52 124 74 Q124 96 100 90" fill="none" stroke="url(#mugbody)" strokeWidth="8" strokeLinecap="round" />
    <rect x="45" y="58" width="52" height="9" fill="#0369A1" />
    <rect x="45" y="67" width="52" height="5.5" fill="#CE1126" />
    <rect x="45" y="72.5" width="52" height="5.5" fill="#FCD116" />
    <path d="M71 82 L75.5 92 L86 92 L77.5 98 L81 108 L71 101.5 L61 108 L64.5 98 L56 92 L66.5 92 Z" fill="#C9A227" />
    <path d="M71 82 L75.5 92 L81 92 L74 97 L71 101.5 Z" fill="#f4d874" opacity="0.55" />
    <ellipse cx="55" cy="50" rx="6" ry="14" fill="#ffffff" opacity="0.5" />
  </svg>
);

const Papeterie: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <linearGradient id="paper1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#e8e5db" />
      </linearGradient>
    </defs>
    <ellipse cx="78" cy="128" rx="34" ry="6" fill="#000" opacity="0.3" />
    <path d="M50 25 L100 25 L118 43 L118 122 L50 122 Z" fill="url(#paper1)" stroke="#c9c5ba" strokeWidth="1" />
    <path d="M100 25 L100 43 L118 43 Z" fill="#d3cfc2" />
    <rect x="60" y="55" width="48" height="5" fill="#0369A1" />
    <rect x="60" y="66" width="48" height="3" fill="#a8a496" />
    <rect x="60" y="74" width="38" height="3" fill="#a8a496" />
    <rect x="60" y="82" width="48" height="3" fill="#a8a496" />
    <rect x="60" y="90" width="30" height="3" fill="#a8a496" />
    <rect x="60" y="102" width="22" height="22" fill="none" stroke="#C9A227" strokeWidth="1.5" />
    <path d="M71 111 L73.5 116 L79 116 L74.5 119.5 L76 125 L71 121.5 L66 125 L67.5 119.5 L63 116 L68.5 116 Z" fill="#C9A227" />
    <ellipse cx="60" cy="35" rx="8" ry="18" fill="#ffffff" opacity="0.5" />
  </svg>
);

const Banniere: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <linearGradient id="pole1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#e6e9ec" /><stop offset="50%" stopColor="#9aa2ab" /><stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
    </defs>
    <ellipse cx="75" cy="130" rx="20" ry="5" fill="#000" opacity="0.35" />
    <ellipse cx="75" cy="126" rx="16" ry="4" fill="#3f3f46" />
    <rect x="72" y="20" width="7" height="108" rx="2" fill="url(#pole1)" />
    <path d="M79 24 L132 32 L132 88 L79 96 Z" fill="#0c4a6e" />
    <path d="M79 24 L132 32 L132 50 L79 42 Z" fill="#FCD116" />
    <path d="M79 42 L132 50 L132 68 L79 78 Z" fill="#0369A1" />
    <path d="M79 68 L132 68 L132 88 L79 96 Z" fill="#a30d1c" />
    <path d="M79 24 L86 25.5 L86 94.5 L79 96 Z" fill="#ffffff" opacity="0.12" />
    <path d="M98 48 L102 58 L112 58 L104 65 L107 75 L98 69 L89 75 L92 65 L84 58 L94 58 Z" fill="#ffffff" />
  </svg>
);

const HighTech: React.FC = () => (
  <svg viewBox="0 0 150 150" className="w-24 h-24 md:w-28 md:h-28">
    <defs>
      <linearGradient id="usbbody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4f4f2" /><stop offset="100%" stopColor="#cfcbc0" />
      </linearGradient>
      <linearGradient id="usbmetal" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#e8eaed" /><stop offset="100%" stopColor="#9aa2ab" />
      </linearGradient>
    </defs>
    <ellipse cx="75" cy="120" rx="32" ry="6" fill="#000" opacity="0.3" />
    <rect x="35" y="60" width="58" height="34" rx="5" fill="url(#usbbody)" stroke="#b5b1a5" strokeWidth="1" />
    <rect x="93" y="68" width="20" height="16" fill="url(#usbmetal)" />
    <rect x="110" y="71" width="10" height="10" fill="#7d8590" />
    <circle cx="55" cy="77" r="11" fill="#0369A1" />
    <path d="M55 71 L57.5 77 L64 77 L58.5 81 L60.5 87 L55 83.5 L49.5 87 L51.5 81 L46 77 L52.5 77 Z" fill="#FCD116" />
    <rect x="70" y="72" width="16" height="3.5" fill="#CE1126" />
    <rect x="70" y="79" width="12" height="3.5" fill="#8a8a82" />
    <ellipse cx="45" cy="65" rx="6" ry="12" fill="#ffffff" opacity="0.5" />
  </svg>
);

const FAMILY_COMPONENTS: Record<ProductFamily, React.FC> = {
  bijouterie: PinBadge,
  textile: Textile,
  vaisselle: Vaisselle,
  papeterie: Papeterie,
  banniere: Banniere,
  hightech: HighTech,
};

interface ProductIllustrationProps {
  family: ProductFamily;
  tint?: ProductTint;
  className?: string;
}

/**
 * Illustration vectorielle détaillée d'un produit (dégradés, ombres portées, reflets),
 * en remplacement des photos produits absentes du dépôt. Aucune dépiction de personne réelle.
 * 6 familles couvrant les 46 produits de la Boutique — voir DOSSIER-SOURCING-CONTENU.md.
 */
const ProductIllustration: React.FC<ProductIllustrationProps> = ({ family, tint = 'green', className = '' }) => {
  const Illustration = FAMILY_COMPONENTS[family];
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      style={{ background: TINT_BG[tint] }}
    >
      <Illustration />
      {/* Tampon d'authenticité — emblème officiel réel du monument (fourni par le client) */}
      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md p-1 border border-white/60">
        <img src={emblemMonument} alt="Sceau officiel du Monument Paul Biya" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default ProductIllustration;
