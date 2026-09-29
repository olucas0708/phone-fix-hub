import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NARA_CELL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "#nara-cell",
  name: "Nara Cell Celulares",
  alternateName: "Nara Cell",
  description:
    "Loja de celulares, acessórios e assistência técnica em Uberlândia, Minas Gerais.",
  telephone: "+55 34 99197-4536",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. João Bernardes de Souza, 505",
    addressLocality: "Uberlândia",
    addressRegion: "MG",
    postalCode: "38401-016",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "14:00",
    },
  ],
  sameAs: ["https://www.instagram.com/naracellcelulares/"],
  areaServed: {
    "@type": "City",
    name: "Uberlândia",
  },
  knowsAbout: [
    "smartphones",
    "acessórios para celulares",
    "assistência técnica de celulares",
    "troca de tela",
    "troca de bateria",
    "reparo de placa",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente atualizar ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0f1010" },
      { name: "color-scheme", content: "dark" },
      { name: "robots", content: "index, follow" },
      { name: "application-name", content: "Nara Cell" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "description", content: "Nara Cell: smartphones, acessórios e assistência técnica especializada em Uberlândia. Tecnologia, atendimento e reparos em um só lugar." },
      { property: "og:type", content: "business.business" },
      { property: "og:site_name", content: "Nara Cell" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: "Nara Cell — Celulares, Acessórios e Assistência Técnica" },
      { property: "og:description", content: "Smartphones, acessórios e assistência técnica especializada em Uberlândia." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nara Cell — Celulares, Acessórios e Assistência Técnica" },
      { name: "twitter:description", content: "Smartphones, acessórios e assistência técnica especializada em Uberlândia." },
      { title: "Nara Cell — Celulares, Acessórios e Assistência Técnica" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(NARA_CELL_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
