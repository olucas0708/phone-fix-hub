import { useEffect, useRef, useState, type ReactNode } from "react";
import heroVideo from "@/assets/hero-smartphone.mp4.asset.json";

/**
 * Scroll-linked hero video. Desktop eases between frames; touch devices seek
 * directly to the requested frame to avoid a perpetual animation loop and
 * reduce stutter while scrolling on mobile.
 */
export function ScrollVideoHero({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let duration = 0;
    let target = 0;
    let current = 0;
    let frame = 0;
    let lastProgress = -1;
    let disposed = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchLayout = window.matchMedia("(max-width: 767px), (pointer: coarse)");

    // Let the browser stream and seek the original media instead of downloading
    // the entire video into a Blob before the hero can become visible.
    video.src = heroVideo.url;
    video.load();

    const computeTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      if (Math.abs(p - lastProgress) > 0.002) {
        lastProgress = p;
        setProgress(p);
      }
      target = p * Math.max(duration - 0.05, 0);
    };

    const tick = () => {
      frame = 0;
      if (disposed || !duration) return;
      computeTarget();

      if (touchLayout.matches || reducedMotion.matches) {
        // A single seek per scroll update is much cheaper on mobile than
        // continuously seeking while the previous frame is still decoding.
        if (!video.seeking && Math.abs(video.currentTime - target) > 0.06) {
          video.currentTime = target;
        }
        return;
      }

      current += (target - current) * 0.2;
      if (Math.abs(target - current) < 0.01) current = target;
      if (!video.seeking && Math.abs(video.currentTime - current) > 1 / 30) {
        video.currentTime = current;
      }
      if (Math.abs(current - target) > 0.01 || video.seeking) requestTick();
    };

    function requestTick() {
      if (!frame && !disposed) frame = window.requestAnimationFrame(tick);
    }

    const onMeta = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      duration = video.duration;
      current = video.currentTime || 0;
      video.pause();
      setReady(true);
      requestTick();
    };

    const onSeeked = () => {
      // Mobile waits for each seek to finish before scheduling the next one.
      if (touchLayout.matches || reducedMotion.matches) return;
      requestTick();
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);
    touchLayout.addEventListener("change", requestTick);
    reducedMotion.addEventListener("change", requestTick);
    requestTick();

    return () => {
      disposed = true;
      if (frame) window.cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      touchLayout.removeEventListener("change", requestTick);
      reducedMotion.removeEventListener("change", requestTick);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[220svh] bg-hero md:h-[260vh]"
    >
      <div className="sticky top-0 flex min-h-[100svh] items-start overflow-hidden md:h-[100svh] md:items-center">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-200px] right-[-120px] h-[480px] w-[480px] rounded-full bg-electric/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl grid-rows-[auto_auto] items-center gap-5 px-4 pb-10 pt-20 sm:px-6 md:h-full md:grid-rows-[auto_1fr] md:gap-4 md:pb-6 md:pt-20 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-8 lg:pb-12 lg:pt-24">
          <div className="relative z-10 min-w-0">{children}</div>

          <div className="relative flex h-[34svh] min-h-[190px] w-full min-w-0 items-center justify-center md:h-full md:min-h-0">
            <div className="pointer-events-none absolute inset-0 m-auto aspect-[9/16] max-h-full rounded-[2.5rem] bg-electric/10 blur-3xl" />
            <video
              ref={videoRef}
              muted
              playsInline
              preload="metadata"
              aria-label="Smartphone com componentes se separando"
              className={`relative h-full max-h-[78svh] w-auto max-w-full rounded-[1.5rem] object-contain transition-opacity duration-300 md:rounded-[2rem] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] ${ready ? "opacity-100" : "opacity-0"}`}
            />
            {!ready && (
              <div className="absolute inset-0 grid place-items-center">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-electric/30 border-t-electric" />
              </div>
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-border">
          <div className="h-full origin-left bg-electric" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}
