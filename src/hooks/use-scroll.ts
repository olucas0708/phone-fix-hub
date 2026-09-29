import { useEffect, useRef } from "react";

/**
 * Adds `.is-visible` to elements with .reveal/.reveal-left/.reveal-right
 * when they enter the viewport. Respects prefers-reduced-motion via CSS.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Parallax: moves elements with [data-parallax-speed] at different rates
 * relative to scroll, using transform only. rAF-throttled.
 */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = root.querySelectorAll<HTMLElement>("[data-parallax-speed]");
    let ticking = false;

    const update = () => {
      ticking = false;
      const scrollY = window.scrollY;
      items.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0);
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ref;
}
