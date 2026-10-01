import { Link, notFound } from "@tanstack/react-router";
import { ArticleCard, ArticleLink, coverSrc } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles, type Article } from "@/content/articles";
import { duoChapters, sectionBySlug, sectionsFor, type SectionSlug } from "@/content/taxonomy";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export function articlesInSection(slug: SectionSlug) {
  return articles.filter((article) => sectionsFor(article).includes(slug));
}

export function sectionMeta(slug: SectionSlug) {
  const section = sectionBySlug(slug);
  if (!section) return { meta: [] };
  const meta = pageMeta({
    title: `${section.name} · CupertinoLab`,
    description: section.dek,
    path: section.path,
  });
  return {
    ...meta,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Inicio", path: "/" },
            { name: section.name, path: section.path },
          ]),
        ),
      },
    ],
  };
}

export function SectionView({ slug }: { slug: SectionSlug }) {
  const section = sectionBySlug(slug);
  if (!section) throw notFound();
  const items = articlesInSection(slug);
  if (items.length === 0) throw notFound();

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
      {slug === "iphone-duo" ? (
        <DuoPath />
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

export function DuoPath({ current }: { current?: string }) {
  const chapters = pickArticles(duoChapters);
  return (
    <ol className="mt-8 border-t border-line">
      {chapters.map((article, index) => {
        const here = article.slug === current;
        return (
          <li key={article.slug} className="border-b border-line">
            <ArticleLink article={article} className="flex items-center gap-4 py-4">
              <span className="w-8 shrink-0 font-sans text-xs tracking-widest text-oxide">
                {String(index + 1).padStart(2, "0")}
              </span>
              <img
                src={coverSrc(article)}
                alt=""
                width={72}
                height={72}
                className="h-16 w-16 shrink-0 object-cover"
              />
              <span className="min-w-0">
                <span className={`block font-serif text-xl leading-tight ${here ? "text-oxide" : "text-ink"}`}>
                  {article.title}
                </span>
                <span className="mt-1 block line-clamp-2 font-sans text-sm text-muted">{article.dek}</span>
              </span>
            </ArticleLink>
          </li>
        );
      })}
    </ol>
  );
}
