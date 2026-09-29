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
  { icon: Smartphone, title: "Troca de câmera" },
  { icon: Headphones, title: "Troca de alto-falante" },
  { icon: MessageCircle, title: "Troca de microfone" },
  { icon: Smartphone, title: "Troca de botões" },
  { icon: Smartphone, title: "Troca de tampa traseira" },
  { icon: Smartphone, title: "Troca de carcaça" },
  { icon: Wrench, title: "Reparo de placa" },
  { icon: Zap, title: "Reparo de curto" },
  { icon: Wrench, title: "Reparo de oxidação" },
  { icon: Smartphone, title: "Recuperação de aparelho molhado" },
  { icon: ShieldCheck, title: "Diagnóstico" },
  { icon: Wrench, title: "Limpeza interna" },
  { icon: Zap, title: "Atualização de sistema" },
  { icon: Zap, title: "Restauração de sistema" },
  { icon: Cable, title: "Backup e transferência de dados" },
  { icon: Smartphone, title: "Configuração inicial" },
  { icon: Smartphone, title: "Instalação de aplicativos" },
  { icon: ShieldCheck, title: "Configuração de contas" },
  { icon: Cable, title: "Migração de dados entre celulares" },
  { icon: ShieldCheck, title: "Aplicação de película" },
  { icon: Sparkles, title: "Higienização do aparelho" },
];

const ACCESSORY_ITEMS = [
  { icon: ShieldCheck, label: "Capinhas" },
  { icon: ShieldCheck, label: "Películas de vidro" },
  { icon: ShieldCheck, label: "Películas de hidrogel" },
  { icon: ShieldCheck, label: "Películas de privacidade" },
  { icon: ShieldCheck, label: "Películas para câmera" },
  { icon: Cable, label: "Cabos USB-C" },
  { icon: Cable, label: "Cabos Lightning" },
  { icon: Cable, label: "Cabos Micro USB" },
  { icon: Zap, label: "Carregadores" },
  { icon: Zap, label: "Carregadores rápidos" },
  { icon: Zap, label: "Carregadores veiculares" },
  { icon: Zap, label: "Carregadores sem fio" },
  { icon: Zap, label: "Fontes" },
  { icon: Cable, label: "Adaptadores" },
  { icon: Headphones, label: "Fones Bluetooth" },
  { icon: Headphones, label: "Fones com fio" },
  { icon: Headphones, label: "Headsets" },
  { icon: Smartphone, label: "Suportes veiculares" },
  { icon: Smartphone, label: "Popsockets" },
  { icon: Smartphone, label: "Suportes de mesa" },
  { icon: Smartphone, label: "Smartwatches" },
  { icon: Smartphone, label: "Pulseiras inteligentes" },
  { icon: BatteryCharging, label: "Power banks" },
  { icon: Smartphone, label: "Cartões de memória" },
  { icon: Cable, label: "Pendrives" },
  { icon: Cable, label: "Adaptadores OTG" },
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
              <div
                key={item.label}
                className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-tight">{item.label}</span>
              </div>
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
              <div
                key={service.title}
                className="reveal flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold leading-tight">{service.title}</h3>
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
