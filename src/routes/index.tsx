import { createFileRoute } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles } from "@/content/articles";
import { articlesInSection, pickArticles } from "@/components/section-view";
import { duoSpotlight, featuredSlug, sections } from "@/content/taxonomy";

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
  const featured = articles.find((article) => article.slug === featuredSlug) ?? articles[0];
  const latest = articles.filter((article) => article.slug !== featured?.slug).slice(0, 6);
  const duo = pickArticles(duoSpotlight);
  const guides = articlesInSection("guias").slice(0, 4);
  const comparisons = articlesInSection("comparativas").slice(0, 4);

  return (
    <Shell width="wide">
      <p className="pt-6 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
        Laboratorio · otoño 2026
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-5xl">
        El catálogo, sin el tráiler.
      </h1>
      <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-ink">
        Noticias, guías, comparativas y pruebas sobre iPhone, iOS y el ecosistema Apple.
      </p>
      <p className="mt-2 font-sans text-sm text-muted">
        Una pregunta, la cifra publicada y lo que nadie ha medido.
      </p>

      {featured ? (
        <section className="mt-8 border-t border-line pt-6" aria-labelledby="destacado">
          <h2 id="destacado" className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">
            Destacado
          </h2>
          <div className="mt-4 max-w-3xl">
            <ArticleCard article={featured} />
          </div>
        </section>
      ) : null}

      <section className="mt-12" aria-labelledby="ultimos">
        <h2 id="ultimos" className="font-serif text-3xl text-ink">
          Últimos artículos
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3">
          {latest.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 bg-inverse px-5 py-8 text-paper md:px-8" aria-labelledby="duo">
        <h2 id="duo" className="font-serif text-3xl">
          iPhone Duo
        </h2>
        <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-sand">
          El primer plegable de Apple, explicado sin humo.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {duo.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} tone="inverse" />
            </li>
          ))}
        </ul>
        <a href="/iphone/iphone-duo" className="mt-8 inline-block font-sans text-sm text-paper underline underline-offset-4">
          Ver todo sobre iPhone Duo →
        </a>
      </section>

      <Rail title="Guías y trucos" href="/guias" items={guides} />
      <Rail title="Comparativas" href="/comparativas" items={comparisons} />

      <section className="mt-14" aria-labelledby="explorar">
        <h2 id="explorar" className="font-serif text-3xl text-ink">
          Explorar CupertinoLab
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:grid-cols-4">
          {sections.map((section) => {
            const count = articlesInSection(section.slug).length;
            return (
              <li key={section.slug} className="bg-paper">
                <a href={section.path} className="block px-4 py-5">
                  <span className="block font-serif text-xl text-ink">{section.name}</span>
                  <span className="mt-1 block font-sans text-xs tracking-wide text-muted uppercase">
                    {count === 0 ? "Sin fichas" : `${count} fichas`}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Shell>
  );
}

function Rail({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: typeof articles;
}) {
  return (
    <section className="mt-14">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl text-ink">{title}</h2>
        <a href={href} className="font-sans text-sm text-oxide underline underline-offset-4">
          Ver sección
        </a>
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        {items.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
}
