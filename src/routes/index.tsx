import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  BarChart3,
  CalendarCheck,
  Cable,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  Filter,
  Headphones,
  Hand,
  Instagram,
  CreditCard,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Settings2,
  PackageCheck,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { Header, WHATSAPP_URL } from "@/components/site/Header";
import { ScrollVideoHero } from "@/components/site/ScrollVideoHero";
import { useScrollReveal, useScrollScene } from "@/hooks/use-scroll";
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
    type: "Smartphone",
    specs: ["Novos", "Seminovos", "Acessórios"],
  },
  {
    name: "Samsung",
    tag: "Galaxy",
    type: "Smartphone",
    specs: ["Linha Galaxy", "Novos", "Seminovos"],
  },
  {
    name: "Xiaomi",
    tag: "Tecnologia",
    type: "Smartphone",
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

const DIAGNOSIS = [
  { label: "Tela quebrada ou trincada", icon: Smartphone },
  { label: "Celular não carrega", icon: Cable },
  { label: "Bateria descarregando rápido", icon: BatteryCharging },
  { label: "Celular não liga", icon: Zap },
  { label: "Outro problema", icon: Wrench },
];

const ACCESSORY_ITEMS = [
  { icon: ShieldCheck, label: "Capinhas" },
  { icon: ShieldCheck, label: "Películas de vidro" },
  { icon: Cable, label: "Cabos USB-C" },
  { icon: Zap, label: "Carregadores" },
  { icon: Headphones, label: "Fones Bluetooth" },
  { icon: MessageCircle, label: "Outros produtos", whatsapp: true },
];

const createWhatsAppLink = (message: string) =>
  `https://wa.me/5534991974536?text=${encodeURIComponent(message)}`;

function Index() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const phonesShowcaseRef = useScrollScene<HTMLDivElement>();
  const [catalogFilter, setCatalogFilter] = useState("Todos");
  const [catalogSearch, setCatalogSearch] = useState("");
  const [compare, setCompare] = useState(["iPhone", "Samsung"]);
  const [diagnosis, setDiagnosis] = useState("");
  const [repairBrand, setRepairBrand] = useState("Não informado");
  const [repairModel, setRepairModel] = useState("");
  const [recommendBudget, setRecommendBudget] = useState("Até R$ 2.000");
  const [recommendPriority, setRecommendPriority] = useState("Equilíbrio");
  const [recommendSystem, setRecommendSystem] = useState("Tanto faz");
  const [adminOpen, setAdminOpen] = useState(false);
  const [catalogStatus, setCatalogStatus] = useState<Record<string, string>>({
    iPhone: "Consulte disponibilidade",
    Samsung: "Consulte disponibilidade",
    Xiaomi: "Consulte disponibilidade",
  });
  const [leadIntent, setLeadIntent] = useState("comprar");
  const [leadBrand, setLeadBrand] = useState("Qualquer marca");
  const [leadBudget, setLeadBudget] = useState("Ainda não defini");
  const [leadNeed, setLeadNeed] = useState("Quero orientação");
  const [repairPosition, setRepairPosition] = useState(52);
  const [isRepairing, setIsRepairing] = useState(false);
  const [repairStoryStep, setRepairStoryStep] = useState(0);
  const repairStoryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = repairStoryRef.current;
    if (!section) return;

    const updateStep = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.72 - rect.top) / Math.max(rect.height - window.innerHeight * 0.28, 1)));
      setRepairStoryStep(Math.min(4, Math.floor(progress * 5)));
    };

    updateStep();
    window.addEventListener("scroll", updateStep, { passive: true });
    window.addEventListener("resize", updateStep);
    return () => {
      window.removeEventListener("scroll", updateStep);
      window.removeEventListener("resize", updateStep);
    };
  }, []);

  const filteredPhones = useMemo(() => {
    const term = catalogSearch.trim().toLowerCase();
    return PHONES.filter((phone) => {
      const matchesFilter = catalogFilter === "Todos" || phone.name === catalogFilter;
      const searchable = [phone.name, phone.tag, phone.type, ...phone.specs].join(" ").toLowerCase();
      return matchesFilter && (!term || searchable.includes(term));
    });
  }, [catalogFilter, catalogSearch]);

  const diagnosisLink = diagnosis
    ? createWhatsAppLink(
        `Olá! Vim pelo site da Nara Cell. Quero diagnóstico/orçamento. Problema: ${diagnosis}. Marca: ${repairBrand}. Modelo: ${repairModel || "não informado"}.`,
      )
    : WHATSAPP_URL;

  const leadLink = createWhatsAppLink(
    `Olá! Vim pelo site da Nara Cell. Quero atendimento sobre ${leadIntent}. Marca/interesse: ${leadBrand}. Faixa de investimento: ${leadBudget}. Preciso de: ${leadNeed}. Pode me orientar?`,
  );

  const recommendationLink = createWhatsAppLink(
    `Olá! Vim pelo site da Nara Cell. Quero ajuda para escolher um celular. Orçamento: ${recommendBudget}. Prioridade: ${recommendPriority}. Sistema: ${recommendSystem}.`,
  );

  const toggleCompare = (name: string) => {
    setCompare((current) => {
      if (current.includes(name)) return current.filter((item) => item !== name);
      if (current.length >= 2) return [current[1] ?? "", name];
      return [...current, name];
    });
  };

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("nara-cell-catalog-status");
      if (saved) setCatalogStatus(JSON.parse(saved));
    } catch {
      // Ignore unavailable or malformed local storage.
    }
  }, []);

  const updateCatalogStatus = (brand: string, status: string) => {
    setCatalogStatus((current) => {
      const next = { ...current, [brand]: status };
      try {
        window.localStorage.setItem("nara-cell-catalog-status", JSON.stringify(next));
      } catch {
        // Keep the current UI working if storage is unavailable.
      }
      return next;
    });
  };

  return (
    <div id="conteudo" ref={revealRef} tabIndex={-1} className="min-h-screen bg-background text-foreground outline-none">
      <Header />

      {/* ============ HERO ============ */}
      <ScrollVideoHero>

            <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Loja + Assistência técnica especializada
            </p>
            <h1 className="reveal mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
              SEU PRÓXIMO
              <br />
              SMARTPHONE
              <br />
              <span className="text-primary text-glow">COMEÇA AQUI.</span>
            </h1>
            <p className="reveal mt-4 max-w-md text-base sm:text-lg text-muted-foreground" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
              Compra e venda de celulares, acessórios e assistência técnica em um só lugar.
              Atendimento presencial e pelo WhatsApp.
            </p>
            <div className="reveal mt-6 lg:mt-10 flex flex-wrap items-center gap-4" style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
              <a href="#celulares" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                Ver celulares <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#diagnostico" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary">
                <Wrench className="h-4 w-4" /> Diagnóstico rápido
              </a>
            </div>

            <div className="reveal mt-10 hidden lg:grid max-w-xl grid-cols-3 gap-3" style={{ "--reveal-delay": "400ms" } as React.CSSProperties}>
              {[
                ["Celulares", "Compra e venda"],
                ["Assistência", "Reparos"],
                ["WhatsApp", "Atendimento"],
              ].map(([title, text]) => (
                <a key={title} href={title === "Assistência" ? "#diagnostico" : title === "Celulares" ? "#catalogo" : WHATSAPP_URL} target={title === "WhatsApp" ? "_blank" : undefined} rel={title === "WhatsApp" ? "noopener noreferrer" : undefined} className="rounded-2xl border border-border bg-card/70 p-4 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <p className="font-display text-sm font-bold text-primary">{title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{text}</p>
                </a>
              ))}
            </div>
      </ScrollVideoHero>

      {/* ============ MARQUEE ============ */}
      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12" aria-hidden={dup === 1}>
              {["Compra e venda de celulares", "Assistência técnica", "Acessórios", "Atendimento pelo WhatsApp", "Loja física", "Orçamento"].map((item) => (
                <span key={item} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ ENCONTRE O QUE PRECISA ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="reveal rounded-[2rem] border border-primary/20 bg-card p-6 shadow-xl sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Atendimento guiado</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Encontre o que você precisa</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">Escolha seu objetivo e vá direto para a parte certa do site.</p>
            </div>
            <ArrowRight className="hidden h-8 w-8 text-primary lg:block" />
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              { title: "Quero comprar um celular", text: "Veja marcas e consulte disponibilidade.", href: "#catalogo", icon: Smartphone },
              { title: "Quero acessórios", text: "Proteção, carga e áudio para seu aparelho.", href: "#acessorios", icon: Headphones },
              { title: "Meu celular está com problema", text: "Faça um diagnóstico inicial em poucos cliques.", href: "#diagnostico", icon: Wrench },
            ].map((item) => (
              <a key={item.title} href={item.href} className="group rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><item.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-primary">Continuar <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CENTRAL DE ATENDIMENTO INTELIGENTE ============ */}
      <section id="atendimento" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="reveal overflow-hidden rounded-[2.5rem] border border-primary/20 bg-card shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-black p-7 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Atendimento inteligente
                </span>
                <h2 className="mt-5 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                  Chegue no WhatsApp já com o que você precisa.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  Monte seu pedido em poucos toques. A mensagem é preparada automaticamente para facilitar o atendimento da equipe.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    ["01", "Escolha seu objetivo", "Compra, acessório ou reparo."],
                    ["02", "Dê contexto", "Marca, orçamento e necessidade."],
                    ["03", "Fale com a equipe", "Tudo chega pronto no WhatsApp."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <span className="text-[10px] font-bold tracking-widest text-primary">{number}</span>
                      <p className="mt-1 font-display font-bold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-white/40">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <p className="font-display text-xl font-bold">Monte seu atendimento</p>
              </div>

              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">O que você procura?</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ["comprar um celular", "Comprar celular"],
                    ["comprar acessórios", "Acessórios"],
                    ["fazer um reparo", "Reparo"],
                  ].map(([value, label]) => (
                    <button key={value} type="button" onClick={() => setLeadIntent(value ?? "")} aria-pressed={leadIntent === value}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${leadIntent === value ? "border-primary bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground hover:border-primary/40"}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Marca / interesse</span>
                  <select value={leadBrand} onChange={(e) => setLeadBrand(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary">
                    {["Qualquer marca", "iPhone / Apple", "Samsung", "Xiaomi", "Outra marca"].map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Faixa de investimento</span>
                  <select value={leadBudget} onChange={(e) => setLeadBudget(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary">
                    {["Ainda não defini", "Até R$ 1.000", "R$ 1.000 a R$ 2.000", "R$ 2.000 a R$ 4.000", "Acima de R$ 4.000"].map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">O que você precisa?</span>
                <select value={leadNeed} onChange={(e) => setLeadNeed(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary">
                  {["Quero orientação", "Ver modelos disponíveis", "Comparar opções", "Saber valor do reparo", "Consultar estoque", "Agendar atendimento"].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>

              <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Sua mensagem está pronta</p>
                  <p className="mt-1 text-xs text-muted-foreground">A equipe recebe seu contexto e pode continuar o atendimento.</p>
                </div>
                <a href={leadLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105">
                  <MessageCircle className="h-4 w-4" /> Continuar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CELULARES 3D ============ */}
      <section id="celulares" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Celulares</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Celulares e smartphones</h2>
          <p className="mt-4 text-muted-foreground">Explore a experiência Nara Cell e consulte modelos, disponibilidade e condições direto com a equipe.</p>
        </div>

        <div ref={phonesShowcaseRef} className="reveal-right relative mt-12 min-h-[680px] overflow-hidden rounded-[2.5rem] border border-primary/20 bg-black shadow-2xl sm:min-h-[760px]" style={{ perspective: "1400px" }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(239,24,38,0.26),transparent_34%),radial-gradient(circle_at_25%_20%,rgba(239,24,38,0.12),transparent_30%)]" />
          <div data-scene data-scene-x="-80" data-scene-y="40" data-scene-scale="0.08" className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[120px] will-change-transform" />
          <div data-scene data-scene-x="90" data-scene-y="-50" data-scene-scale="0.1" className="absolute -bottom-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[130px] will-change-transform" />
          <div data-scene data-scene-x="60" data-scene-y="-20" data-scene-rotate="2" className="absolute inset-0 will-change-transform">
            <img src={phonesDuo} alt="" aria-hidden="true" className="image-red-tone h-full w-full scale-[1.12] object-cover opacity-25 blur-[2px]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_34%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_55%,transparent_0%,rgba(0,0,0,0.15)_35%,rgba(0,0,0,0.78)_100%)]" />

          <div className="relative z-20 grid h-full min-h-[680px] items-center gap-8 px-7 py-12 sm:min-h-[760px] sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"><Smartphone className="h-4 w-4" /> Experiência interativa</div>
              <h2 className="mt-6 font-display text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl">As melhores<br />marcas, em um<br /><span className="text-primary text-glow">só lugar!</span></h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">iPhone, Samsung, Xiaomi e muito mais. Role a página para explorar o ambiente e consulte a equipe Nara Cell.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["iPhone", "Samsung", "Xiaomi"].map((brand) => <span key={brand} className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/85 backdrop-blur">{brand}</span>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#catalogo" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><Search className="h-4 w-4" /> Explorar catálogo</a>
                <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"><MapPin className="h-4 w-4" /> Visitar a loja</a>
              </div>
            </div>

            <div className="relative h-[430px] sm:h-[520px]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="absolute h-[250px] w-[250px] rounded-full border border-primary/20 shadow-[0_0_80px_rgba(239,24,38,0.28)] sm:h-[340px] sm:w-[340px]" />
                <div className="absolute h-[330px] w-[330px] rounded-full border border-primary/10 sm:h-[440px] sm:w-[440px]" />
              </div>
              <div data-scene data-scene-mouse="18" data-scene-spin-y="360" data-scene-rotate="-4" data-scene-scale="0.05" className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-black/50 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-3">
                  <img src={phonesDuo} alt="Smartphones em destaque na Nara Cell" width={1024} height={1024} loading="lazy" className="image-red-tone h-[350px] w-full rounded-[1.5rem] object-cover sm:h-[450px] sm:rounded-[2rem]" />
                </div>
              </div>
              <div data-scene data-scene-mouse="10" data-scene-x="120" data-scene-y="-80" data-scene-rotate="7" className="absolute right-0 top-8 z-10 rounded-2xl border border-white/15 bg-black/70 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-4 sm:top-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Nara Cell</p>
                <p className="mt-1 font-display text-lg font-bold text-white">Tecnologia que impressiona</p>
              </div>
              <div data-scene data-scene-mouse="8" data-scene-x="-110" data-scene-y="80" data-scene-rotate="-6" className="absolute bottom-8 left-0 z-10 rounded-2xl border border-primary/30 bg-black/75 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-4 sm:bottom-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Experiência Nara Cell</p>
                <p className="mt-1 flex items-center gap-2 font-semibold text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Role para explorar</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45"><span className="h-8 w-px bg-primary/70" /> Role para explorar <span className="h-8 w-px bg-primary/70" /></div>
        </div>
      </section>

      {/* ============ OFERTAS ============ */}
      <section id="ofertas" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Ofertas da semana</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Ofertas e condições especiais</h2>
            <p className="mt-4 max-w-md text-muted-foreground">Consulte no WhatsApp as ofertas, aparelhos disponíveis e condições especiais do momento.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"><MessageCircle className="h-4 w-4" /> Quero aproveitar</a>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[
              { label: "iPhone", value: "Apple" },
              { label: "Galaxy", value: "Samsung" },
              { label: "Xiaomi", value: "Smartphones" },
              { label: "Acessórios", value: "Para seu aparelho" },
            ].map((deal, i) => (
              <a key={deal.label} href={createWhatsAppLink(`Olá! Vim pelo site da Nara Cell e quero consultar a oferta de ${deal.label}.`)} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg" style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <p className="font-display text-2xl font-bold text-primary">{deal.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{deal.label}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">Consultar <ArrowRight className="h-3 w-3" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACESSÓRIOS ============ */}
      <section id="acessorios" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Acessórios e produtos</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Tudo para seu celular</h2>
            <p className="mt-5 text-lg text-muted-foreground">Capinhas, películas, cabos, carregadores, áudio e outros produtos para proteger, conectar e complementar seu aparelho.</p>
          </div>
          <div className="reveal-right mt-12 overflow-hidden rounded-[2rem] border border-border"><img src={accessories} alt="Acessórios para celulares na Nara Cell" width={1024} height={1024} loading="lazy" className="image-red-tone h-64 w-full object-cover sm:h-80" /></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ACCESSORY_ITEMS.map((item, i) => (
              <a key={item.label} href={createWhatsAppLink(`Olá! Vim pelo site da Nara Cell e quero consultar sobre: ${item.label}.`)} target="_blank" rel="noopener noreferrer" className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg" style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"><item.icon className="h-5 w-5" /></span>
                <span className="text-sm font-semibold leading-tight">{item.label}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIAGNÓSTICO ============ */}
      <section id="diagnostico" className="relative overflow-hidden border-y border-border">
        <div className="absolute inset-0"><img src={repair} alt="" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" /></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Diagnóstico rápido</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Seu celular está com problema?</h2>
            <p className="mt-4 text-muted-foreground">Escolha o que está acontecendo. O site prepara uma mensagem específica para a equipe Nara Cell avaliar seu caso.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIAGNOSIS.map((item) => (
              <button key={item.label} onClick={() => setDiagnosis(item.label)} className={`reveal flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${diagnosis === item.label ? "border-primary bg-primary/10 shadow-lg" : "border-border bg-card/80 hover:-translate-y-1 hover:border-primary/40"}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><item.icon className="h-5 w-5" /></span>
                <span className="font-display font-bold">{item.label}</span>
                {diagnosis === item.label && <CircleCheck className="ml-auto h-5 w-5 text-primary" />}
              </button>
            ))}
          </div>
          <div className="reveal mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Marca</span>
              <select value={repairBrand} onChange={(e) => setRepairBrand(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary">
                {["Não informado","iPhone / Apple","Samsung","Xiaomi","Motorola","Outra marca"].map((x) => <option key={x}>{x}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Modelo</span>
              <input value={repairModel} onChange={(e) => setRepairModel(e.target.value)} placeholder="Ex.: iPhone 13, Galaxy S23..." className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary" />
            </label>
          </div>
          <div className="reveal mt-8 rounded-3xl border border-primary/30 bg-card/90 p-6 backdrop-blur">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Seu próximo passo</p><p className="mt-2 font-display text-xl font-bold">{diagnosis || "Selecione um problema acima"}</p><p className="mt-1 text-sm text-muted-foreground">A Nara Cell confirma o diagnóstico e o orçamento antes do reparo.</p></div>
              <a href={diagnosisLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><MessageCircle className="h-4 w-4" /> {diagnosis ? "Enviar para a Nara Cell" : "Falar com a equipe"}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POR QUE NARA CELL ============ */}
      <section id="sobre" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Por que Nara Cell?</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Uma experiência pensada para facilitar sua escolha</h2>
            <p className="mt-5 text-lg text-muted-foreground">Informação clara, atendimento direto e uma loja física para você conversar com a equipe.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CircleCheck, title: "Orçamento claro", text: "Converse com a equipe antes de decidir." },
              { icon: Smartphone, title: "Tudo em um lugar", text: "Celulares, acessórios e assistência." },
              { icon: Clock3, title: "Atendimento direto", text: "WhatsApp e loja física em Uberlândia." },
              { icon: ShieldCheck, title: "Suporte próximo", text: "Seu aparelho acompanhado de perto." },
            ].map((item) => (
              <div key={item.title} className="reveal rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><item.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AVALIAÇÕES ============ */}
      <section id="avaliacoes" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Avaliações</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Confira a experiência de outros clientes</h2>
            <p className="mt-5 text-muted-foreground">A loja tem avaliações públicas no Google. Consulte a página oficial para ver comentários e a nota atualizada antes de visitar.</p>
            <a href="https://www.google.com/search?q=Nara+Cell+Celulares+Uberlandia" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><Star className="h-4 w-4" /> Ver avaliações no Google</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["4,4 ★", "Nota registrada no Google"],
              ["Google", "Avaliações públicas"],
              ["WhatsApp", "Contato direto com a equipe"],
              ["Serviços", "Celulares, acessórios e reparos"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-primary"><Star className="h-4 w-4 fill-current" /><span className="font-display font-bold">{title}</span></div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTATO / LOCALIZAÇÃO ============ */}
      <section id="contato" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary"><MapPin className="h-3.5 w-3.5" /> Nossa loja</span>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Visite a <span className="text-primary">Nara Cell</span></h2><div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary"><CalendarCheck className="h-4 w-4" /> Horários: seg–sex 08:30–19:00 • sáb 08:30–14:00</div>
              <p className="mt-5 text-muted-foreground">Estamos em Uberlândia, no bairro Presidente Roosevelt. Venha conhecer a loja, consultar aparelhos, acessórios ou deixar seu celular para avaliação.</p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span><div><p className="font-semibold">Endereço</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Av. João Bernardes de Souza, 505<br />Presidente Roosevelt • Uberlândia/MG<br />CEP 38401-016</p></div></div>
                <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span><div><p className="font-semibold">Telefone / WhatsApp</p><p className="mt-1 text-sm text-muted-foreground">(34) 99197-4536</p></div></div>
                <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Zap className="h-5 w-5" /></span><div><p className="font-semibold">Horário de atendimento</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Segunda a sexta: 08:30 às 19:00<br />Sábado: 08:30 às 14:00<br />Domingo: fechado</p></div></div>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://www.google.com/maps/search/?api=1&query=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Uberl%C3%A2ndia%2C+MG" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><MapPin className="h-4 w-4" /> Como chegar</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl"><div className="relative h-full min-h-[420px]"><iframe title="Nara Cell no Google Maps" src="https://www.google.com/maps?q=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Presidente+Roosevelt%2C+Uberl%C3%A2ndia+-+MG&output=embed" className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div>
          </div>
          <div className="reveal mt-10 overflow-hidden rounded-[2rem] border border-border bg-background">
            <div className="grid gap-0 md:grid-cols-3">
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={heroPhone} alt="Celulares na Nara Cell" className="image-red-tone h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={accessories} alt="Acessórios na Nara Cell" className="image-red-tone h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
              <div className="relative min-h-[220px] overflow-hidden md:min-h-[260px]"><img src={repair} alt="Assistência técnica na Nara Cell" className="image-red-tone h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative overflow-hidden border-y border-primary/20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,24,38,0.2),transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Pronto para o próximo passo?</p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-6xl">Fale com a Nara Cell.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">Consulte celular, acessório, reparo ou orçamento diretamente com a equipe.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"><MessageCircle className="h-4 w-4" /> Chamar no WhatsApp</a>
            <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"><MapPin className="h-4 w-4" /> Ver localização</a>
          </div>
        </div>
      </section>

      {/* ============ FLOATING WHATSAPP ============ */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Nara Cell no WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_15px_45px_-15px_var(--primary)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7">
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xl sm:block">Falar com a Nara Cell</span>
      </a>

      <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="reveal grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]">
            <div className="max-w-sm">
              <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Nara Cell — voltar ao início">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_40px_-14px_var(--primary)] transition-transform duration-300 group-hover:scale-105">
                  <Smartphone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-black tracking-tight">Nara<span className="text-primary">Cell</span></span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Tecnologia • Reparos • Acessórios</span>
                </span>
              </a>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Celulares, acessórios e assistência técnica com atendimento próximo em Uberlândia.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_35px_-16px_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-16px_var(--primary)]">
                <MessageCircle className="h-4 w-4" /> Fale com a Nara Cell
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Links rápidos</p>
              <nav className="mt-5 grid gap-3 text-sm text-white/55" aria-label="Links rápidos do rodapé">
                {[
                  ["Início", "#inicio"],
                  ["Celulares", "#celulares"],
                  ["Catálogo", "#catalogo"],
                  ["Acessórios", "#acessorios"],
                  ["Diagnóstico", "#diagnostico"],
                  ["Sobre a Nara Cell", "#sobre"],
                  ["Contato e localização", "#contato"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="w-fit transition-colors hover:text-white">{label}</a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Atendimento</p>
              <div className="mt-5 space-y-4 text-sm">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 transition-colors hover:text-white">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong className="block text-white">WhatsApp</strong>(34) 99197-4536</span>
                </a>
                <a href="tel:+5534991974536" className="flex items-start gap-3 text-white/60 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong className="block text-white">Telefone</strong>(34) 99197-4536</span>
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span><strong className="block text-white">Horário</strong>Seg–sex 08:30–19:00<br />Sáb 08:30–14:00</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Uberl%C3%A2ndia%2C+MG" target="_blank" rel="noopener noreferrer" aria-label="Abrir localização no Google Maps" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Onde estamos</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Nara+Cell+Celulares%2C+Av.+Jo%C3%A3o+Bernardes+de+Souza%2C+505%2C+Uberl%C3%A2ndia%2C+MG" target="_blank" rel="noopener noreferrer" className="mt-5 block text-sm leading-6 text-white/55 transition-colors hover:text-white">
                <span className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Av. João Bernardes de Souza, 505<br />Presidente Roosevelt<br />Uberlândia/MG • 38401-016</span>
                </span>
              </a>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-white">Formas de pagamento</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">Pix, cartões e outras condições disponíveis. Consulte a equipe para confirmar as opções no atendimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal mt-14 border-t border-white/10 pt-8">
            <div className="grid gap-5 md:grid-cols-2">
              <details id="politicas" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between">Política de privacidade <ChevronDown className="h-4 w-4 text-white/40 transition-transform group-open:rotate-180" /></span>
                </summary>
                <p className="mt-3 text-xs leading-6 text-white/45">Este site usa as informações enviadas voluntariamente pelo cliente para facilitar o atendimento. Dados não são solicitados além do necessário para responder à sua solicitação.</p>
              </details>
              <details id="termos" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between">Termos de uso <ChevronDown className="h-4 w-4 text-white/40 transition-transform group-open:rotate-180" /></span>
                </summary>
                <p className="mt-3 text-xs leading-6 text-white/45">As informações de disponibilidade, preços e condições podem ser confirmadas diretamente com a Nara Cell antes da compra ou contratação de um serviço.</p>
              </details>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nara Cell. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#politicas" className="transition-colors hover:text-white">Privacidade</a>
              <a href="#termos" className="transition-colors hover:text-white">Termos</a>
              <a href="#inicio" className="inline-flex items-center gap-1 transition-colors hover:text-white">Voltar ao topo <ArrowRight className="h-3 w-3 -rotate-90" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
