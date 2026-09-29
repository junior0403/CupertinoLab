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

function coverSrc(article: Pick<Article, "slug" | "category">) {
  if (article.slug === "otono-2026") return "/covers/lineup.jpg";
  if (article.slug === "apple-pencil") return "/covers/pencil.jpg";
  if (
    article.slug === "mejores-fundas" ||
    article.slug === "mejores-accesorios" ||
    article.slug === "necesita-funda"
  ) {
    return "/covers/case.jpg";
  }
  if (article.slug === "vs-iphone-18-pro-max" || article.slug === "vs-galaxy-z-fold") {
    return "/covers/compare.jpg";
  }
  if (article.category === "airpods") return "/covers/airpods.jpg";
  if (article.category === "watch") return "/covers/watch.jpg";
  if (article.category === "duo") return "/covers/duo.jpg";
  return "/covers/iphone.jpg";
}

export function ArticleCover({
  article,
  priority = false,
}: {
  article: Pick<Article, "title" | "slug" | "category">;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden bg-card">
      <img
        src={coverSrc(article)}
        alt=""
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ArticleCard({
  article,
  tone = "paper",
  priority = false,
}: {
  article: Article;
  tone?: "paper" | "inverse";
  priority?: boolean;
}) {
  const inverse = tone === "inverse";
  return (
    <ArticleLink article={article} className="group block">
      <ArticleCover article={article} priority={priority} />
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
