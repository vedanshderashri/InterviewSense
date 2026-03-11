import { useEffect, useRef } from 'react';

// A small wheel-based smooth scrolling implementation.
// It intercepts the mouse wheel and animates the scroll position using requestAnimationFrame.
// This provides a smoother, more "inertia-like" feel compared to the browser's default scroll.
export default function useSmoothScroll({ duration = 350, multiplier = 1.6 } = {}) {
  const animationRef = useRef(null);
  const targetYRef = useRef(0);
  const startYRef = useRef(0);
  const startTimeRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollEl = document.scrollingElement || document.documentElement;
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    // Fast, smooth easing curve for a snappy yet pleasant scroll feel.
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const nextY = startYRef.current + (targetYRef.current - startYRef.current) * eased;

      scrollEl.scrollTo({ top: nextY });

      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(step);
      } else {
        tickingRef.current = false;
        startTimeRef.current = 0;
      }
    };

    const onWheel = (event) => {
      // Allow default zooming and form element scrolling.
      if (event.ctrlKey) return;
      if (event.target.closest('input, textarea, select, [contenteditable]')) return;

      const maxScroll = scrollEl.scrollHeight - window.innerHeight;
      const delta = event.deltaY * multiplier;

      targetYRef.current = clamp(targetYRef.current + delta, 0, maxScroll);

      if (!tickingRef.current) {
        tickingRef.current = true;
        startYRef.current = scrollEl.scrollTop;
        startTimeRef.current = 0;
        animationRef.current = window.requestAnimationFrame(step);
      }

      event.preventDefault();
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration, multiplier]);
}
