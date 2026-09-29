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
  priority = false,
}: {
  article: Pick<Article, "title" | "slug" | "category">;
  priority?: boolean;
}) {
  const label = articleSectionName(article);
  return (
    <div
      role="img"
      aria-label={`Portada editorial: ${article.title}`}
      data-priority={priority ? "high" : "low"}
      className="relative aspect-[16/10] overflow-hidden border border-line bg-card"
    >
      <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden="true">
        <rect width="640" height="400" fill="#faf7f2" />
        <path d="M48 48h80M48 64h48" stroke="#7a2a0f" strokeWidth="2" />
        <circle cx="560" cy="72" r="28" fill="none" stroke="#1c1915" strokeWidth="1.5" />
        <circle cx="560" cy="72" r="4" fill="#7a2a0f" />
        <path d="M48 332h544" stroke="#e0d6c6" strokeWidth="1" />
      </svg>
      <p className="absolute bottom-4 left-4 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
        {label}
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
      <ArticleCover article={article} />
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
