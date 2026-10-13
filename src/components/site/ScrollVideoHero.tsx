import { useEffect, useRef, useState, type ReactNode } from "react";
import heroVideo from "@/assets/hero-smartphone.mp4.asset.json";

/**
 * Hero with a video whose playback follows the scroll progress of the section.
 * The section is taller than the viewport; the inner stage stays sticky while
 * currentTime is eased toward the scroll-derived target via requestAnimationFrame.
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

    let objectUrl: string | null = null;
    let cancelled = false;
    let duration = 0;
    let target = 0;
    let current = 0;
    let frame = 0;
    let lastProgress = -1;

    // Fully buffer the file so seeking backwards/forwards is reliable.
    fetch(heroVideo.url)
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error("video"))))
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      })
      .catch(() => {
        if (!cancelled) video.src = heroVideo.url;
      });

    const onMeta = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        duration = video.duration;
        video.pause();
        setReady(true);
        requestTick();
      }
    };

    const computeTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      if (Math.abs(p - lastProgress) > 0.002) {
        lastProgress = p;
        setProgress(p);
      }
      target = p * Math.max(duration - 0.05, 0);
    };

    const tick = () => {
      frame = 0;
      computeTarget();
      if (!duration) return;
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.01) current = target;
      // Skip redundant seeks: only update when the value really changed.
      if (Math.abs(video.currentTime - current) > 1 / 48 && !video.seeking) {
        video.currentTime = current;
      }
      if (current !== target || video.seeking) requestTick();
    };

    function requestTick() {
      if (!frame) frame = window.requestAnimationFrame(tick);
    }

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("seeked", requestTick);
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);
    requestTick();

    return () => {
      cancelled = true;
      if (frame) window.cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("seeked", requestTick);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <section id="inicio" ref={sectionRef} className="relative h-[260vh] bg-hero">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-200px] right-[-120px] h-[480px] w-[480px] rounded-full bg-electric/10 blur-[120px]" />

        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] items-center gap-4 px-4 pb-6 pt-20 sm:px-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-8 lg:pb-12 lg:pt-24">
          <div className="relative z-10">{children}</div>

          <div className="relative flex h-full min-h-0 items-center justify-center">
            <div className="absolute inset-0 m-auto aspect-[9/16] max-h-full rounded-[2.5rem] bg-electric/10 blur-3xl" />
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              aria-label="Smartphone com componentes se separando"
              className={`relative aspect-[9/16] h-full max-h-[78svh] w-auto rounded-[2rem] object-cover transition-opacity duration-700 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] ${ready ? "opacity-100" : "opacity-0"}`}
            />
            {!ready && (
              <div className="absolute inset-0 grid place-items-center">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-electric/30 border-t-electric" />
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-border">
          <div className="h-full origin-left bg-electric" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}
