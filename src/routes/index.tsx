import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArticleLink, coverSrc } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles, type Article } from "@/content/articles";
import { sections } from "@/content/taxonomy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CupertinoLab · El catálogo, sin el tráiler" },
      {
        name: "description",
        content: "Noticias, guías, comparativas y pruebas sobre iPhone, iOS y el ecosistema Apple.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell width="wide">
      <p className="pt-8 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
        Laboratorio · otoño 2026
      </p>
      <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">
        Elige una ficha.
      </h1>
      <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-muted">
        Cada cuadrado es un artículo. Se van turnando solos. Pulsa para abrirlo.
      </p>

      <ArticleCarousel items={articles} />

      <nav className="mt-10 flex flex-wrap gap-2" aria-label="Secciones">
        {sections.map((section) => (
          <a
            key={section.slug}
            href={section.path}
            className="border border-line bg-card px-3 py-2 font-sans text-sm text-ink"
          >
            {section.name}
          </a>
        ))}
      </nav>
    </Shell>
  );
}

function ArticleCarousel({ items }: { items: Article[] }) {
  const [index, setIndex] = useState(0);
  const [per, setPer] = useState(1);
  const [paused, setPaused] = useState(false);
  const max = Math.max(1, items.length - per + 1);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const apply = () => setPer(wide.matches ? 3 : 1);
    apply();
    wide.addEventListener("change", apply);
    return () => wide.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, Math.max(0, items.length - per)));
  }, [per, items.length]);

  useEffect(() => {
    if (paused || items.length <= per) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % max);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, per, max, items.length]);

  const step = (direction: number) => {
    setIndex((current) => (current + direction + max) % max);
  };

  return (
    <section className="mt-8" aria-roledescription="carrusel" aria-label="Artículos">
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{
            width: `${(items.length / per) * 100}%`,
            transform: `translateX(-${(index * 100) / items.length}%)`,
          }}
        >
          {items.map((article, position) => (
            <div key={article.slug} className="px-2" style={{ width: `${100 / items.length}%` }}>
              <SquareTile article={article} priority={position < 3} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-2">
        <p className="font-sans text-xs tracking-widest text-muted uppercase">
          {index + 1} de {max}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            className="h-11 border border-line bg-card px-4 font-sans text-sm text-ink"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="h-11 border border-ink bg-ink px-4 font-sans text-sm text-paper"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}

function SquareTile({ article, priority }: { article: Article; priority?: boolean }) {
  return (
    <ArticleLink
      article={article}
      className="group flex aspect-square flex-col border border-ink/15 bg-card shadow-[0_8px_24px_rgba(28,25,21,0.06)]"
    >
      <div className="relative min-h-0 flex-1 overflow-hidden bg-ink">
        <img
          src={coverSrc(article)}
          alt=""
          width={800}
          height={800}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-paper px-2 py-1 font-sans text-[11px] font-medium tracking-widest text-oxide uppercase">
          Abrir
        </span>
      </div>
      <span className="block border-t border-line px-3 py-3">
        <span className="line-clamp-3 block font-serif text-lg leading-tight text-ink group-hover:text-oxide">
          {article.title}
        </span>
      </span>
    </ArticleLink>
  );
}
