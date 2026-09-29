import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/articles";
import { sections, sectionsFor, type CategorySlug } from "@/content/taxonomy";

export function articleSectionName(article: { slug: string; category: CategorySlug }) {
  const slug = sectionsFor(article)[0];
  return sections.find((section) => section.slug === slug)?.name ?? "CupertinoLab";
}

export function ArticleLink({
  article,
  className,
  children,
}: {
  article: Pick<Article, "slug" | "category">;
  className?: string;
  children: ReactNode;
}) {
  const classNames = className ?? "";
  if (article.category === "duo") {
    return (
      <Link to="/iphone/iphone-duo/$slug" params={{ slug: article.slug }} className={classNames}>
        {children}
      </Link>
    );
  }
  if (article.category === "iphone") {
    return (
      <Link to="/iphone/$slug" params={{ slug: article.slug }} className={classNames}>
        {children}
      </Link>
    );
  }
  if (article.category === "airpods") {
    return (
      <Link to="/airpods/$slug" params={{ slug: article.slug }} className={classNames}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/watch/$slug" params={{ slug: article.slug }} className={classNames}>
      {children}
    </Link>
  );
}

export function ArticleCover({
  article,
  tone = "paper",
}: {
  article: Pick<Article, "title" | "slug" | "category">;
  tone?: "paper" | "inverse";
}) {
  const label = articleSectionName(article);
  const onDark = tone === "inverse";
  const field =
    onDark ? "bg-paper text-ink" : article.category === "duo" ? "bg-oxide text-paper" : "bg-inverse text-paper";
  const kicker = onDark ? "text-oxide" : "text-sand";

  return (
    <div
      role="img"
      aria-label={`Portada editorial: ${article.title}`}
      className={`relative aspect-[16/10] overflow-hidden ${field}`}
    >
      <p className={`absolute top-4 left-4 font-sans text-xs font-medium tracking-widest uppercase ${kicker}`}>
        {label}
      </p>
      <p className="absolute inset-x-4 bottom-4 line-clamp-4 font-serif text-[1.65rem] leading-[1.05] sm:text-4xl">
        {article.title.replace(/[¿?]/g, "")}
      </p>
    </div>
  );
}

export function ArticleCard({
  article,
  tone = "paper",
}: {
  article: Article;
  tone?: "paper" | "inverse";
}) {
  const inverse = tone === "inverse";
  return (
    <ArticleLink article={article} className="group block">
      <ArticleCover article={article} tone={tone} />
      <p
        className={`mt-3 font-sans text-xs font-medium tracking-widest uppercase ${inverse ? "text-sand" : "text-oxide"}`}
      >
        {articleSectionName(article)}
      </p>
      <h3
        className={`mt-1 font-serif text-2xl leading-snug transition-colors duration-150 ${inverse ? "text-paper group-hover:text-sand" : "text-ink group-hover:text-oxide"}`}
      >
        {article.title}
      </h3>
      <p className={`mt-2 font-sans text-sm leading-relaxed ${inverse ? "text-sand" : "text-muted"}`}>
        {article.dek}
      </p>
      <p className={`mt-3 font-sans text-xs tracking-wide uppercase ${inverse ? "text-sand/80" : "text-muted"}`}>
        {article.updated}
        <span aria-hidden="true"> · </span>
        {article.minutes} min de lectura
      </p>
    </ArticleLink>
  );
}
