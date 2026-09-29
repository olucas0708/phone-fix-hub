import { useEffect, useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Celulares", href: "#celulares" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Acessórios", href: "#acessorios" },
  { label: "Assistência", href: "#assistencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const WHATSAPP_URL =
  "https://wa.me/5534991974536?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Nara%20Cell.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_30px_-12px_var(--primary)]">
            <Smartphone className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Nara<span className="text-primary">Cell</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_8px_30px_-12px_var(--primary)] transition-transform hover:scale-105 sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-96 border-b" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
