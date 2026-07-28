import { useEffect } from 'react';
import { scrollToHash, cancelScroll } from '../utils/smoothScroll';

/* Intercepts clicks on same-page #anchors anywhere in the tree and runs the
   JS tween instead of the browser's jump. Installed once, in App — that covers
   the navbar, the mobile drawer, hero CTAs and footer links without each of
   them needing its own handler. */

const useAnchorScroll = () => {
  useEffect(() => {
    const onClick = (e) => {
      // Let modified clicks (new tab, download, etc.) behave normally.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const anchor = e.target.closest('a[href]');
      if (!anchor || anchor.target === '_blank') return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Same-page anchors only: "#work" or "/#work" while already on "/".
      let hash = null;
      if (href.startsWith('#')) {
        hash = href;
      } else if (href.startsWith('/#') && window.location.pathname === '/') {
        hash = href.slice(1);
      }
      if (!hash) return;

      if (scrollToHash(hash)) {
        e.preventDefault();
        // Keep the URL in step without letting the browser jump to the anchor.
        window.history.replaceState(null, '', hash);
      }
    };

    // Any manual scroll input cancels an in-flight tween.
    const onManualScroll = () => cancelScroll();

    document.addEventListener('click', onClick);
    window.addEventListener('wheel', onManualScroll, { passive: true });
    window.addEventListener('touchstart', onManualScroll, { passive: true });

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('wheel', onManualScroll);
      window.removeEventListener('touchstart', onManualScroll);
    };
  }, []);
};

export default useAnchorScroll;
