import { useEffect, useRef } from "react";

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right",
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax-speed]"),
    );
    if (!items.length) return;

    let frame = 0;
    let active = true;

    const update = () => {
      frame = 0;
      if (!active) return;

      const rect = root.getBoundingClientRect();
      const nearViewport =
        rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 1.25;
      if (!nearViewport) return;

      const scrollY = window.scrollY;
      for (const el of items) {
        const speed = Number(el.dataset.parallaxSpeed ?? 0);
        if (Number.isFinite(speed)) {
          el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        }
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      active = false;
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return ref;
}

export function useScrollScene<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
    if (!items.length) return;

    let frame = 0;
    let active = true;
    let inViewport = true;

    const update = () => {
      frame = 0;
      if (!active || !inViewport) return;

      const rect = root.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = clamp01((viewport - rect.top) / (viewport + rect.height));
      const centered = progress * 2 - 1;

      for (const el of items) {
        const x = Number(el.dataset.sceneX ?? 0);
        const y = Number(el.dataset.sceneY ?? 0);
        const rotate = Number(el.dataset.sceneRotate ?? 0);
        const spinY = Number(el.dataset.sceneSpinY ?? 0);
        const spinX = Number(el.dataset.sceneSpinX ?? 0);
        const scale = Number(el.dataset.sceneScale ?? 0);

        const translate = `translate3d(${centered * x}px, ${centered * y}px, 0)`;
        const rotation = `rotate(${centered * rotate}deg) rotateX(${progress * spinX}deg) rotateY(${progress * spinY}deg)`;
        el.style.transform = `${translate} ${rotation} scale(${1 + centered * scale})`;
        el.style.transformStyle = "preserve-3d";
        el.style.backfaceVisibility = "visible";
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        inViewport = Boolean(entry?.isIntersecting);
        if (inViewport) requestUpdate();
      },
      { rootMargin: "30% 0px 30% 0px", threshold: 0 },
    );

    visibilityObserver.observe(root);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      active = false;
      if (frame) window.cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return ref;
}
