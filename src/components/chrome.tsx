import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { categories, clusters, type Cluster } from "@/content/taxonomy";
import { getArticle } from "@/content/articles";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-inverse focus:px-4 focus:py-3 focus:text-paper"
      >
        Saltar al contenido
      </a>
      <Masthead />
      <main id="contenido" className="mx-auto w-full max-w-2xl px-5 pb-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Masthead() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <Link to="/" className="group block">
            <p className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">
              Laboratorio
            </p>
            <p className="font-serif text-3xl leading-none tracking-tight text-ink sm:text-4xl">
              CupertinoLab
            </p>
          </Link>
          <p className="max-w-32 text-right font-sans text-xs leading-snug text-muted">
            Otoño 2026
            <span className="mt-1 block">Ya en tienda</span>
          </p>
        </div>
        <nav aria-label="Secciones" className="flex flex-wrap gap-x-4 gap-y-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to="/categoria/$slug"
              params={{ slug: category.slug }}
              className="font-sans text-sm text-ink underline decoration-line underline-offset-4 hover:text-oxide hover:decoration-oxide"
            >
              {category.name}
            </Link>
          ))}
          <Link
            to="/mapa"
            className="font-sans text-sm text-muted underline decoration-line underline-offset-4 hover:text-oxide"
          >
            Mapa
          </Link>
          <Link
            to="/editorial"
            className="font-sans text-sm text-muted underline decoration-line underline-offset-4 hover:text-oxide"
          >
            Método
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-5 py-8">
        <p className="font-serif text-2xl text-ink">CupertinoLab</p>
        <p className="max-w-prose font-sans text-sm leading-relaxed text-muted">
          Redacción independiente sobre iPhone, AirPods, Watch y el Duo.
          No pertenecemos a Apple ni vendemos sus productos. Las cifras salen
          de la ficha publicada. Lo que no está medido, se dice.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link to="/editorial" className="font-sans text-sm underline underline-offset-4">
            Método editorial
          </Link>
          <Link to="/aviso" className="font-sans text-sm underline underline-offset-4">
            Publicidad y afiliación
          </Link>
          <Link to="/mapa" className="font-sans text-sm underline underline-offset-4">
            Mapa del sitio
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function ClusterMark({ cluster }: { cluster: Cluster }) {
  return (
    <span className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">
      {clusters[cluster]}
    </span>
  );
}

export function AdSlot({ slot }: { slot: string }) {
  return (
    <aside
      aria-label={`Publicidad, espacio ${slot}`}
      data-ad-slot={slot}
      className="my-10 flex h-64 items-center justify-center border border-dashed border-line bg-card"
    >
      <p className="font-sans text-xs font-medium tracking-widest text-muted uppercase">
        Publicidad
      </p>
    </aside>
  );
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
        if (!slug || !label || !getArticle(slug)) return <span key={index}>{label}</span>;
        return (
          <Link
            key={index}
            to="/articulo/$slug"
            params={{ slug }}
            className="text-ink underline decoration-oxide/50 decoration-1 underline-offset-4 hover:text-oxide"
          >
            {label}
          </Link>
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
                <td
                  key={`${cell}-${index}`}
                  className="px-4 py-3 align-top text-ink tabular-nums"
                >
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
