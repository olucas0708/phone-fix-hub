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
import { useParallax, useScrollReveal } from "@/hooks/use-scroll";
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
    name: "Nara X Pro",
    tag: "Flagship",
    price: "R$ 4.999",
    oldPrice: "R$ 5.799",
    specs: ["256 GB", "Câmera 200 MP", "5G"],
  },
  {
    name: "Nara X",
    tag: "Mais vendido",
    price: "R$ 3.499",
    oldPrice: null,
    specs: ["128 GB", "Tela 120 Hz", "5G"],
  },
  {
    name: "Nara Lite",
    tag: "Custo-benefício",
    price: "R$ 1.899",
    oldPrice: "R$ 2.199",
    specs: ["128 GB", "Bateria 2 dias", "5G"],
  },
];

const SERVICES = [
  {
    icon: Smartphone,
    title: "Troca de tela",
    desc: "Telas originais e de alta qualidade com garantia de 90 dias.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria",
    desc: "Substituição rápida com teste completo de desempenho.",
  },
  {
    icon: Wrench,
    title: "Placa e microsoldagem",
    desc: "Laboratório próprio para reparos avançados em placa.",
  },
  {
    icon: ShieldCheck,
    title: "Diagnóstico gratuito",
    desc: "Avaliação completa do aparelho sem compromisso.",
  },
];

const ACCESSORY_ITEMS = [
  { icon: Headphones, label: "Fones e áudio" },
  { icon: Cable, label: "Cabos e carregadores" },
  { icon: ShieldCheck, label: "Capas e películas" },
  { icon: Zap, label: "Carregamento sem fio" },
];

function Index() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const parallaxRef = useParallax<HTMLDivElement>();

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
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        />
        <div
          data-parallax-speed="0.3"
          className="pointer-events-none absolute right-[-120px] top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]"
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
              Os melhores celulares, acessórios premium e um laboratório de
              reparo de confiança — tudo em um só lugar.
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
              <p className="font-display text-xl font-bold text-primary">R$ 1.899</p>
            </div>
            <div
              data-parallax-speed="-0.12"
              className="absolute -right-2 bottom-24 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Garantia de 1 ano
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
                "Entrega rápida",
                "Garantia de 1 ano",
                "Diagnóstico gratuito",
                "Peças originais",
                "Pagamento facilitado",
                "Suporte especializado",
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
            Os lançamentos mais desejados
          </h2>
          <p className="mt-4 text-muted-foreground">
            Modelos selecionados com as melhores condições do mercado.
          </p>
        </div>

        <div className="reveal-right mt-12 overflow-hidden rounded-3xl border border-border">
          <img
            src={phonesDuo}
            alt="Smartphones em destaque"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-72 w-full object-cover sm:h-96"
          />
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
                  aria-label={`Comprar ${phone.name}`}
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
              Até <span className="text-primary">30% off</span> em selecionados
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Condições especiais por tempo limitado em smartphones, smartwatches
              e acessórios. Consulte disponibilidade no WhatsApp.
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
              { label: "Smartphones", value: "-30%" },
              { label: "Smartwatches", value: "-25%" },
              { label: "Fones", value: "-20%" },
              { label: "Películas", value: "-15%" },
            ].map((deal, i) => (
              <div
                key={deal.label}
                className="rounded-3xl border border-border bg-background p-6 text-center transition-colors hover:border-primary/40"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <p className="font-display text-3xl font-bold text-primary">
                  {deal.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{deal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACESSÓRIOS ============ */}
      <section id="acessorios" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left overflow-hidden rounded-3xl border border-border">
            <img
              src={accessories}
              alt="Acessórios premium para celular"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="reveal-right">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Acessórios
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Complete seu setup
            </h2>
            <p className="mt-4 text-muted-foreground">
              Acessórios originais e selecionados para proteger e potencializar
              seu aparelho.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ACCESSORY_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className="reveal flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
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
              Laboratório próprio, técnicos certificados e peças de qualidade.
              Diagnóstico gratuito e orçamento sem compromisso.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="reveal rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
              </div>
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
            Há anos no mercado, a Nara Cell une curadoria de produtos, preço
            justo e um laboratório de reparo de alto padrão. Nosso compromisso
            é simples: você sai daqui com o aparelho certo — ou com o seu de
            volta funcionando como novo.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { value: "+5.000", label: "Aparelhos reparados" },
            { value: "98%", label: "Clientes satisfeitos" },
            { value: "90 dias", label: "Garantia nos reparos" },
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

      {/* ============ CONTATO ============ */}
      <section id="contato" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Fale com a gente
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tire dúvidas, peça um orçamento ou reserve seu próximo smartphone.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+5500000000000"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                Ligar agora
              </a>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Av. Principal, 123 — Centro (endereço de exemplo)
            </p>
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
