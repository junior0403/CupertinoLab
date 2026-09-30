import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArticleLink } from "@/components/article-card";
import { articles } from "@/content/articles";
import { clusters, type Cluster } from "@/content/taxonomy";
import { getArticle } from "@/content/articles";

const nav = [
  { href: "/iphone", label: "iPhone" },
  { href: "/airpods", label: "AirPods" },
  { href: "/watch", label: "Watch" },
  { href: "/ios", label: "iOS" },
  { href: "/iphone/iphone-duo", label: "Duo" },
  { href: "/mapa", label: "Mapa" },
  { href: "/editorial", label: "Método" },
] as const;

export function Shell({
  children,
  width = "read",
}: {
  children: ReactNode;
  width?: "read" | "wide";
}) {
  const column = width === "wide" ? "max-w-6xl" : "max-w-2xl";
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-inverse focus:px-4 focus:py-3 focus:text-paper"
      >
        Saltar al contenido
      </a>
      <Masthead />
      <main id="contenido" className={`mx-auto w-full ${column} px-5 pb-20`}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Masthead() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const hits = useMemo(() => {
    if (needle.length < 2) return [];
    return articles
      .filter((article) => {
        const blob = `${article.title} ${article.dek} ${article.tags.join(" ")}`.toLowerCase();
        return blob.includes(needle);
      })
      .slice(0, 6);
  }, [needle]);

  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <Link to="/" className="block">
            <p className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">Laboratorio</p>
            <p className="font-serif text-3xl leading-none tracking-tight text-ink sm:text-4xl">CupertinoLab</p>
          </Link>
          <div className="flex items-start gap-3">
            <p className="hidden max-w-32 text-right font-sans text-xs leading-snug text-muted sm:block">
              Otoño 2026
              <span className="mt-1 block">Ya en tienda</span>
            </p>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="busqueda"
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center border border-line text-ink"
            >
              <span className="sr-only">{open ? "Cerrar búsqueda" : "Buscar"}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l5 5" />
              </svg>
            </button>
          </div>
        </div>

        <nav aria-label="Secciones" className="mt-4 hidden flex-wrap gap-x-5 gap-y-2 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-ink underline decoration-line underline-offset-4 hover:text-oxide hover:decoration-oxide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="mt-4 border-t border-line pt-3 md:hidden">
          <summary className="font-sans text-sm text-ink">Secciones</summary>
          <nav aria-label="Secciones" className="mt-3 flex flex-col gap-3">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="font-sans text-base text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </details>

        {open ? (
          <div id="busqueda" className="mt-4">
            <label className="block">
              <span className="sr-only">Buscar en CupertinoLab</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="iPhone, AirPods, Watch, Duo"
                className="w-full border border-line bg-card px-4 py-3 font-sans text-base text-ink outline-none placeholder:text-muted"
                autoFocus
              />
            </label>
            {needle.length >= 2 ? (
              <ul className="mt-2 border border-line bg-card">
                {hits.length === 0 ? (
                  <li className="px-4 py-3 font-sans text-sm text-muted">Nada con esas palabras.</li>
                ) : (
                  hits.map((article) => (
                    <li key={article.slug} className="border-t border-line first:border-t-0">
                      <ArticleLink article={article} className="block px-4 py-3 font-serif text-lg text-ink">
                        {article.title}
                      </ArticleLink>
                    </li>
                  ))
                )}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}

const footerNav = [
  { href: "/iphone", label: "iPhone" },
  { href: "/iphone/iphone-duo", label: "iPhone Duo" },
  { href: "/ios", label: "iOS" },
  { href: "/airpods", label: "AirPods" },
  { href: "/watch", label: "Watch" },
  { href: "/comparativas", label: "Comparativas" },
  { href: "/guias", label: "Guías" },
  { href: "/mapa", label: "Mapa" },
  { href: "/editorial", label: "Método" },
] as const;

const footerInfo = [
  { href: "/sobre", label: "Sobre CupertinoLab" },
  { href: "/contacto", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/aviso", label: "Publicidad" },
  { href: "/terminos", label: "Términos" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-ink">CupertinoLab</p>
          <p className="mt-2 font-serif text-lg text-ink">El catálogo, sin el tráiler.</p>
          <p className="mt-3 max-w-prose font-sans text-sm leading-relaxed text-muted">
            Redacción independiente sobre iPhone, iOS, AirPods, Watch y el Duo. No pertenecemos a Apple ni
            vendemos sus productos.
          </p>
          <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
            iPhone 18: fotos de Kyu3a y 茅野ふたば en Wikimedia Commons, CC BY-SA 4.0. Pantalla de iOS 26: Sla1708, misma licencia. El plegable de portada:{" "}
            <a
              className="underline underline-offset-4"
              href="https://commons.wikimedia.org/wiki/File:Apple_foldable_phone.jpg"
              rel="noreferrer"
              target="_blank"
            >
              ΚΑ ΚΙΤ
            </a>
            , misma licencia. Agua y pantalla rota: Pexels (Erlan Shatmanov, Towfiqu barbhuiya). Apple Store: midnightbreakfastcafe, CC BY 2.0. Fold y carga: Matabalt y Wikideas1, CC0. SIM: Subhrajyoti07, CC BY-SA 4.0. Bisagra: Ka Kit Pang, CC BY-SA. AirPods, Watch y funda: Pexels y Unsplash.
          </p>
        </div>
        <nav aria-label="Secciones del pie" className="flex flex-col gap-2">
          {footerNav.map((item) => (
            <a key={item.href} href={item.href} className="font-sans text-sm text-ink underline underline-offset-4">
              {item.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Información" className="flex flex-col gap-2">
          {footerInfo.map((item) => (
            <a key={item.href} href={item.href} className="font-sans text-sm text-ink underline underline-offset-4">
              {item.label}
            </a>
          ))}
          <Link to="/aviso" className="font-sans text-sm text-ink underline underline-offset-4">
            Publicidad
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export function ClusterMark({ cluster }: { cluster: Cluster }) {
  return (
    <span className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">{clusters[cluster]}</span>
  );
}

export function AdSlot({ slot }: { slot: string }) {
  return <div data-ad-slot={slot} hidden />;
}

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
        if (!match) return <span key={index}>{part}</span>;
        const slug = match[1];
        const label = match[2];
        const article = slug ? getArticle(slug) : undefined;
        if (!article || !label) return <span key={index}>{label ?? part}</span>;
        return (
          <ArticleLink
            key={index}
            article={article}
            className="text-ink underline decoration-oxide/50 decoration-1 underline-offset-4 hover:text-oxide"
          >
            {label}
          </ArticleLink>
        );
      })}
    </>
  );
}

export function SpecTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-x-auto border border-line">
      <table className="w-full min-w-full border-collapse text-left font-sans text-sm">
        <caption className="border-b border-line bg-card px-4 py-3 text-left font-sans text-xs tracking-widest text-muted uppercase">
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-medium text-ink">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-line">
              {row.map((cell, index) => (
                <td key={`${cell}-${index}`} className="px-4 py-3 align-top text-ink tabular-nums">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
