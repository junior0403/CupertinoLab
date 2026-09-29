import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles, type Article } from "@/content/articles";
import { sectionBySlug, sectionsFor, type SectionSlug } from "@/content/taxonomy";

export function articlesInSection(slug: SectionSlug) {
  return articles.filter((article) => sectionsFor(article).includes(slug));
}

export function sectionMeta(slug: SectionSlug) {
  const section = sectionBySlug(slug);
  if (!section) return { meta: [] };
  return {
    meta: [
      { title: `${section.name} · CupertinoLab` },
      { name: "description", content: section.dek },
    ],
  };
}

export function SectionView({ slug }: { slug: SectionSlug }) {
  const section = sectionBySlug(slug);
  if (!section) return null;
  const items = articlesInSection(slug);

  return (
    <Shell width="wide">
      <p className="pt-8 font-sans text-sm text-muted">
        <Link to="/" className="underline underline-offset-4">
          Inicio
        </Link>
        {" · Sección"}
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{section.name}</h1>
      <p className="mt-3 max-w-prose font-sans text-base leading-relaxed text-muted">{section.dek}</p>
      {slug === "iphone" ? (
        <p className="mt-4 font-sans text-sm">
          <a href="/iphone/iphone-duo" className="text-oxide underline underline-offset-4">
            El iPhone Duo tiene sección propia
          </a>
        </p>
      ) : null}
      {items.length === 0 ? (
        <p className="mt-8 border-t border-line pt-6 font-sans text-base text-muted">
          Esta sección está abierta. Todavía no hay fichas.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}
    </Shell>
  );
}

export function pickArticles(slugs: readonly string[]) {
  return slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is Article => article !== undefined);
}
