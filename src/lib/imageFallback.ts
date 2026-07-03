/**
 * Filet de sécurité pour les assets hébergés sur le CDN externe Lovable
 * (/lovable-uploads/...) qui ne sont pas synchronisés dans ce dépôt Git.
 *
 * TODO PRODUCTION : la vraie solution est de rapatrier ces ~150 fichiers dans
 * src/assets/ ou public/ (souveraineté numérique — voir CHANGELOG-AUDIT.md).
 * En attendant, ce script évite l'icône "image cassée" du navigateur en
 * substituant un visuel de repli aux couleurs institutionnelles.
 */

const FALLBACK_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E" +
  "%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E" +
  "%3Cstop offset='0%25' stop-color='%23007A33'/%3E" +
  "%3Cstop offset='100%25' stop-color='%23064e3b'/%3E%3C/linearGradient%3E%3C/defs%3E" +
  "%3Crect width='400' height='300' fill='url(%23g)'/%3E" +
  "%3Ccircle cx='200' cy='130' r='34' fill='%23ffffff' fill-opacity='0.15'/%3E" +
  "%3Cpath d='M182 145l14-18 12 14 10-8 16 20z' fill='%23ffffff' fill-opacity='0.55'/%3E" +
  "%3Ctext x='200' y='215' font-family='sans-serif' font-size='13' fill='%23ffffff' fill-opacity='0.85' text-anchor='middle'%3EMonument Paul Biya%3C/text%3E" +
  "%3C/svg%3E";

export function installImageFallback() {
  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (target.dataset.fallbackApplied === 'true') return;
      if (!target.src.includes('/lovable-uploads/')) return;

      target.dataset.fallbackApplied = 'true';
      target.src = FALLBACK_SVG;
      target.classList.add('img-fallback');
    },
    true // phase de capture : requis car 'error' ne remonte pas (bubble)
  );
}
