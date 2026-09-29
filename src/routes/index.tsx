import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/content/articles";
import { categories } from "@/content/taxonomy";
import { ClusterMark, Shell } from "@/components/chrome";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const pillar = articles.find((article) => article.slug === "otono-2026");

  const filtered = useMemo(() => {
    if (!needle) return articles;
    return articles.filter((article) => {
      const blob = `${article.title} ${article.dek} ${article.directAnswer} ${article.tags.join(" ")}`.toLowerCase();
      return blob.includes(needle);
    });
  }, [needle]);

  return (
    <Shell>
      <p className="pt-8 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
        Número 02 · otoño 2026
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
        El catálogo, sin el tráiler.
      </h1>
      <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-muted">
        CupertinoLab cubre el iPhone que ya está en tienda, los AirPods, el
        Watch y el Duo que todavía no sale. Una pregunta, la cifra publicada
        y lo que nadie ha medido. El plegable es una sección, no el sitio.
      </p>

      {pillar ? (
        <Link
          to="/articulo/$slug"
          params={{ slug: pillar.slug }}
          className="mt-8 block bg-inverse px-5 py-6 text-paper"
        >
          <span className="font-sans text-xs font-medium tracking-widest text-sand uppercase">
            Pilar
          </span>
          <span className="mt-2 block font-serif text-3xl leading-tight text-paper">
            {pillar.title}
          </span>
          <span className="mt-3 block font-sans text-sm leading-relaxed text-sand">
            {pillar.directAnswer}
          </span>
        </Link>
      ) : null}

      <label className="mt-8 block">
        <span className="font-sans text-xs font-medium tracking-widest text-muted uppercase">
          Buscar en iPhone, AirPods, Watch y Duo
        </span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Pro Max, AirPods, pulso, pliegue…"
          className="mt-2 w-full border border-line bg-card px-4 py-3 font-sans text-base text-ink outline-none placeholder:text-muted"
        />
      </label>

      {needle ? (
        <section className="mt-8" aria-live="polite">
          <h2 className="font-serif text-2xl text-ink">
            {filtered.length === 0 ? "Nada con esas palabras" : `${filtered.length} fichas`}
          </h2>
          <ArticleList items={filtered} />
        </section>
      ) : (
        categories.map((category) => {
          const items = articles.filter(
            (article) => article.category === category.slug && article.slug !== pillar?.slug,
          );
          return (
            <section key={category.slug} className="mt-10">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl text-ink">{category.name}</h2>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: category.slug }}
                  className="font-sans text-sm text-oxide underline underline-offset-4"
                >
                  Ver sección
                </Link>
              </div>
              <p className="mt-1 font-sans text-sm text-muted">{category.dek}</p>
              <ArticleList items={items} />
            </section>
          );
        })
      )}
    </Shell>
  );
}

function ArticleList({ items }: { items: typeof articles }) {
  return (
    <ul className="mt-4 divide-y divide-line border-y border-line">
      {items.map((article) => (
        <li key={article.slug}>
          <Link
            to="/articulo/$slug"
            params={{ slug: article.slug }}
            className="block py-4"
          >
            <ClusterMark cluster={article.cluster} />
            <span className="mt-1 block font-serif text-xl leading-snug text-ink">
              {article.title}
            </span>
            <span className="mt-1 block font-sans text-sm leading-relaxed text-muted">
              {article.dek}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
