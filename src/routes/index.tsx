import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { Header, WHATSAPP_URL } from "@/components/site/Header";
import { useParallax, useScrollReveal, useScrollScene } from "@/hooks/use-scroll";
import heroPhone from "@/assets/hero-phone.jpg";
import phonesDuo from "@/assets/phones-duo.jpg";
import accessories from "@/assets/accessories.jpg";
import repair from "@/assets/repair.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nara Cell — Celulares, Acessórios e Assistência Técnica" },
      {
        name: "description",
        content:
          "Smartphones, acessórios e assistência técnica especializada. Seu próximo smartphone começa na Nara Cell.",
      },
      {
        property: "og:title",
        content: "Nara Cell — Celulares, Acessórios e Assistência Técnica",
      },
      {
        property: "og:description",
        content:
          "Smartphones, acessórios e assistência técnica especializada. Seu próximo smartphone começa na Nara Cell.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONES = [
  {
    name: "iPhone",
    tag: "Apple",
    price: "Consulte",
    oldPrice: null,
    specs: ["Novos", "Seminovos", "Acessórios"],
  },
  {
    name: "Samsung",
    tag: "Galaxy",
    price: "Consulte",
    oldPrice: null,
    specs: ["Linha Galaxy", "Novos", "Seminovos"],
  },
  {
    name: "Xiaomi",
    tag: "Tecnologia",
    price: "Consulte",
    oldPrice: null,
    specs: ["Smartphones", "Acessórios", "Ofertas"],
  },
];

const SERVICES = [
  { icon: Smartphone, title: "Troca de tela" },
  { icon: BatteryCharging, title: "Troca de bateria" },
  { icon: Cable, title: "Troca de conector de carga" },
  { icon: Wrench, title: "Reparo de placa" },
  { icon: ShieldCheck, title: "Diagnóstico" },
  { icon: MessageCircle, title: "Outros serviços" },
];

const createWhatsAppLink = (message: string) =>
  `https://wa.me/5534991974536?text=${encodeURIComponent(message)}`;

const ACCESSORY_ITEMS = [
  { icon: ShieldCheck, label: "Capinhas" },
  { icon: ShieldCheck, label: "Películas de vidro" },
  { icon: Cable, label: "Cabos USB-C" },
  { icon: Zap, label: "Carregadores" },
  { icon: Headphones, label: "Fones Bluetooth" },
  { icon: MessageCircle, label: "Outros produtos", whatsapp: true },
];

function Index() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const parallaxRef = useParallax<HTMLDivElement>();
  const phonesShowcaseRef = useScrollScene<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ============ HERO ============ */}
      <section
        id="inicio"
        ref={parallaxRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* glow decorativo */}
        <div
          data-parallax-speed="0.15"
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]"
        />
        <div
          data-parallax-speed="0.3"
          className="pointer-events-none absolute right-[-120px] top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Loja + Assistência técnica especializada
            </p>
            <h1
              className="reveal mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            >
              SEU PRÓXIMO
              <br />
              SMARTPHONE
              <br />
              <span className="text-primary text-glow">COMEÇA AQUI.</span>
            </h1>
            <p
              className="reveal mt-6 max-w-md text-lg text-muted-foreground"
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              Compra e venda de celulares, acessórios e assistência técnica em um só lugar.
              Atendimento presencial e pelo WhatsApp.
            </p>
            <div
              className="reveal mt-10 flex flex-wrap items-center gap-4"
              style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            >
              <a
                href="#celulares"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Ver celulares
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="relative" data-parallax-speed="-0.08">
            <div className="animate-float-slow relative mx-auto max-w-sm">
              <div className="glow-accent absolute inset-0 rounded-[3rem]" />
              <img
                src={heroPhone}
                alt="Smartphone premium Nara Cell"
                width={1024}
                height={1280}
                className="relative rounded-[2rem] border border-border object-cover"
              />
            </div>
            <div
              data-parallax-speed="-0.18"
              className="absolute -left-4 top-16 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="text-xs text-muted-foreground">A partir de</p>
              <p className="font-display text-xl font-bold text-primary">Nº 505</p>
            </div>
            <div
              data-parallax-speed="-0.12"
              className="absolute -right-2 bottom-24 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Loja física Nara Cell
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12" aria-hidden={dup === 1}>
              {[
                "Compra e venda de celulares",
                "Assistência técnica",
                "Acessórios",
                "Atendimento pelo WhatsApp",
                "Loja física",
                "Orçamento",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ CELULARES ============ */}
      <section id="celulares" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Celulares
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Celulares e smartphones
          </h2>
          <p className="mt-4 text-muted-foreground">
            Encontre seu próximo aparelho. Consulte modelos, disponibilidade e condições direto com a equipe Nara Cell.
          </p>
        </div>

        <div
          ref={phonesShowcaseRef}
          className="reveal-right relative mt-12 min-h-[680px] overflow-hidden rounded-[2.5rem] border border-primary/20 bg-black shadow-2xl sm:min-h-[760px]"
          style={{ perspective: "1400px" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(239,24,38,0.26),transparent_34%),radial-gradient(circle_at_25%_20%,rgba(239,24,38,0.12),transparent_30%)]" />
          <div data-scene data-scene-x="-80" data-scene-y="40" data-scene-scale="0.08" className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[120px] will-change-transform" />
          <div data-scene data-scene-x="90" data-scene-y="-50" data-scene-scale="0.1" className="absolute -bottom-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[130px] will-change-transform" />

          <div data-scene data-scene-x="60" data-scene-y="-20" data-scene-rotate="2" className="absolute inset-0 will-change-transform">
            <img src={phonesDuo} alt="" aria-hidden="true" className="h-full w-full scale-[1.12] object-cover opacity-25 blur-[2px]" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_55%,transparent_0%,rgba(0,0,0,0.15)_35%,rgba(0,0,0,0.78)_100%)]" />

          <div className="relative z-20 grid h-full min-h-[680px] items-center gap-8 px-7 py-12 sm:min-h-[760px] sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <Smartphone className="h-4 w-4" />
                Celulares e smartphones
              </div>
              <h2 className="mt-6 font-display text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl">
                As melhores
                <br />
                marcas, em um
                <br />
                <span className="text-primary text-glow">só lugar!</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">
                iPhone, Samsung, Xiaomi e muito mais. Consulte os aparelhos disponíveis na Nara Cell.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["iPhone", "Samsung", "Xiaomi"].map((brand) => (
                  <span key={brand} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                    {brand}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105">
                  <MessageCircle className="h-4 w-4" />
                  Consultar modelos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary">
                  <MapPin className="h-4 w-4" />
                  Visitar a loja
                </a>
              </div>
            </div>

            <div className="relative h-[430px] sm:h-[520px]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="absolute h-[250px] w-[250px] rounded-full border border-primary/20 shadow-[0_0_80px_rgba(239,24,38,0.28)] sm:h-[340px] sm:w-[340px]" />
                <div className="absolute h-[330px] w-[330px] rounded-full border border-primary/10 sm:h-[440px] sm:w-[440px]" />
              </div>

              <div
                data-scene
                data-scene-spin-y="360"
                data-scene-rotate="-4"
                data-scene-scale="0.05"
                className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-black/50 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-3">
                  <img
                    src={phonesDuo}
                    alt="Smartphones em destaque na Nara Cell"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-[350px] w-full rounded-[1.5rem] object-cover sm:h-[450px] sm:rounded-[2rem]"
                  />
                </div>
              </div>

              <div data-scene data-scene-x="120" data-scene-y="-80" data-scene-rotate="7" className="absolute right-0 top-8 z-10 rounded-2xl border border-white/15 bg-black/70 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-4 sm:top-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Nara Cell</p>
                <p className="mt-1 font-display text-lg font-bold text-white">Tecnologia que impressiona</p>
              </div>

              <div data-scene data-scene-x="-110" data-scene-y="80" data-scene-rotate="-6" className="absolute bottom-8 left-0 z-10 rounded-2xl border border-primary/30 bg-black/75 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-4 sm:bottom-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Experiência Nara Cell</p>
                <p className="mt-1 flex items-center gap-2 font-semibold text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  Nara Cell
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
            <span className="h-8 w-px bg-primary/70" />
            Role para explorar
            <span className="h-8 w-px bg-primary/70" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHONES.map((phone, i) => (
            <article
              key={phone.name}
              className="reveal group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {phone.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{phone.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {phone.specs.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  {phone.oldPrice && (
                    <p className="text-xs text-muted-foreground line-through">
                      {phone.oldPrice}
                    </p>
                  )}
                  <p className="font-display text-2xl font-bold text-primary">
                    {phone.price}
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  aria-label={`Consultar ${phone.name}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ OFERTAS ============ */}
      <section id="ofertas" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ofertas da semana
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Ofertas e condições especiais
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Consulte no WhatsApp as ofertas, aparelhos disponíveis e condições especiais do momento.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Quero aproveitar
            </a>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { label: "iPhone", value: "Apple" },
              { label: "Galaxy", value: "Samsung" },
              { label: "Xiaomi", value: "Smartphones" },
              { label: "Acessórios", value: "Para seu aparelho" },
            ].map((deal, i) => (
              <div
                key={deal.label}
                className="rounded-3xl border border-border bg-background p-6 text-center transition-colors hover:border-primary/40"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <p className="font-display text-2xl font-bold text-primary">
                  {deal.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{deal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACESSÓRIOS E PRODUTOS ============ */}
      <section id="acessorios" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              📱 Acessórios e produtos
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Tudo para seu celular
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Capinhas, películas, cabos, carregadores, áudio, wearables e outros
              produtos para proteger, conectar e complementar seu aparelho.
            </p>
          </div>

          <div className="reveal-right mt-12 overflow-hidden rounded-[2rem] border border-border">
            <img
              src={accessories}
              alt="Acessórios e produtos para celulares na Nara Cell"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ACCESSORY_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={createWhatsAppLink(`Olá! Vim pelo site da Nara Cell e quero consultar sobre: ${item.label}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-tight">{item.label}</span>
                {item.whatsapp && <ArrowRight className="ml-auto h-4 w-4 text-primary" />}
              </a>
            ))}
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar produtos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <MapPin className="h-4 w-4" />
              Visitar a loja
            </a>
          </div>
        </div>
      </section>

      {/* ============ ASSISTÊNCIA ============ */}
      <section id="assistencia" className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0">
          <img
            src={repair}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Assistência técnica
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Seu aparelho em boas mãos
            </h2>
            <p className="mt-4 text-muted-foreground">
              Oferecemos serviços para reparos de hardware, sistema, dados e cuidados com o aparelho.
              Consulte a equipe Nara Cell para avaliar o seu caso e solicitar um orçamento.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service, i) => (
              <a
                key={service.title}
                href={createWhatsAppLink(`Olá! Vim pelo site da Nara Cell e quero consultar sobre: ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold leading-tight">{service.title}</h3>
                {service.whatsapp && <ArrowRight className="ml-auto h-4 w-4 text-primary" />}
              </a>
            ))}
          </div>
          <div className="reveal mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir orçamento gratuito
            </a>
          </div>
        </div>
      </section>

      {/* ============ SOBRE ============ */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre a Nara Cell
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tecnologia com confiança
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A Nara Cell reúne compra e venda de celulares, acessórios e assistência técnica.
            A proposta é oferecer atendimento próximo, orçamento claro e suporte
            para você encontrar o aparelho certo ou deixar o seu funcionando novamente.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { value: "CELULARES", label: "Compra e venda" },
            { value: "ASSISTÊNCIA", label: "Reparos e diagnóstico" },
            { value: "ACESSÓRIOS", label: "Capas, cabos e muito mais" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal rounded-3xl border border-border bg-card p-8 text-center"
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTATO / LOCALIZAÇÃO ============ */}
      <section id="contato" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <MapPin className="h-3.5 w-3.5" />
                Nossa loja
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Visite a <span className="text-primary">Nara Cell</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Estamos em Uberlândia, no bairro Presidente Roosevelt. Venha conhecer a loja,
                consultar aparelhos, acessórios ou deixar seu celular para avaliação.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
                  <div><p className="font-semibold">Endereço</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Av. João Bernardes de Souza, 505<br />Presidente Roosevelt • Uberlândia/MG<br />CEP 38401-016</p></div>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
                  <div><p className="font-semibold">Telefone / WhatsApp</p><p className="mt-1 text-sm text-muted-foreground">(34) 99197-4536</p></div>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Zap className="h-5 w-5" /></span>
                  <div><p className="font-semibold">Horário de atendimento</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Segunda a sexta: 08:30 às 19:00<br />Sábado: 08:30 às 14:00<br />Domingo: fechado</p></div>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://www.google.com/maps/search/?api=1&query=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Uberl%C3%A2ndia%2C+MG" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><MapPin className="h-4 w-4" />Como chegar</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
              <div className="relative h-full min-h-[420px]">
                <iframe title="Nara Cell no Google Maps" src="https://www.google.com/maps?q=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Presidente+Roosevelt%2C+Uberl%C3%A2ndia+-+MG&output=embed" className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </div>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-[2rem] border border-border bg-background">
            <div className="grid gap-0 md:grid-cols-3">
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={heroPhone} alt="Celulares disponíveis na Nara Cell" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={accessories} alt="Acessórios para celulares na Nara Cell" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={repair} alt="Assistência técnica da Nara Cell" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Smartphone className="h-4 w-4" />
            </span>
            <span className="font-display font-bold">
              Nara<span className="text-primary">Cell</span>
            </span>
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nara Cell. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
