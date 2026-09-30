import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArticleLink, coverSrc } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles, type Article } from "@/content/articles";
import { sections } from "@/content/taxonomy";
import { articlesInSection } from "@/components/section-view";

const homeOrder = [
  "otono-2026",
  "precios-gama-iphone",
  "iphone-18-pro-vs-max",
  "ios-26",
  "airpods-5",
  "watch-2026",
];

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
  const slides = homeSlides();
  return (
    <Shell width="wide">
      <p className="pt-8 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
        Laboratorio · otoño 2026
      </p>
      <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">
        Elige una ficha.
      </h1>
      <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-muted">
        Desliza con el dedo. El iPhone Duo entra por una sola puerta.
      </p>
      <ArticleShelf slides={slides} />
      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Secciones">
        {sections
          .filter((section) => articlesInSection(section.slug).length > 0)
          .map((section) => (
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

type Slide = {
  key: string;
  title: string;
  image: string;
  article?: Article;
  href?: string;
};

function homeSlides(): Slide[] {
  const bySlug = new Map(articles.map((article) => [article.slug, article]));
  const slides: Slide[] = [];
  const first = bySlug.get(homeOrder[0]);
  if (first) slides.push(articleSlide(first));
  slides.push({
    key: "iphone-duo",
    title: "iPhone Duo",
    image: "/covers/duo.jpg",
    href: "/iphone/iphone-duo",
  });
  for (const slug of homeOrder.slice(1)) {
    const article = bySlug.get(slug);
    if (article) slides.push(articleSlide(article));
  }
  return slides;
}

function articleSlide(article: Article): Slide {
  return {
    key: article.slug,
    title: article.title,
    image: coverSrc(article),
    article,
  };
}

function ArticleShelf({ slides }: { slides: Slide[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const paint = () => {
      const box = root.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      for (const card of cards.current) {
        if (!card) continue;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - mid);
        const amount = Math.min(distance / (box.width * 0.62), 1);
        if (reduce) {
          card.style.filter = "";
          card.style.transform = "";
          card.style.opacity = "1";
          continue;
        }
        card.style.transform = `scale(${1 - amount * 0.07})`;
        card.style.filter = `blur(${amount * 12}px)`;
        card.style.opacity = `${1 - amount * 0.35}`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };
    paint();
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [slides.length]);

  return (
    <section className="mt-8" aria-roledescription="carrusel" aria-label="Artículos">
      <div className="-mx-5">
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[14vw] scroll-px-[14vw] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, position) => (
            <div
              key={slide.key}
              ref={(node) => {
                cards.current[position] = node;
              }}
              className="w-[72vw] max-w-sm shrink-0 snap-center sm:w-[46vw] md:w-[22rem]"
            >
              <ShelfCard slide={slide} priority={position < 2} />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 font-sans text-xs tracking-widest text-muted uppercase">Desliza</p>
    </section>
  );
}

function ShelfCard({ slide, priority }: { slide: Slide; priority?: boolean }) {
  const face = (
    <>
      <span className="relative block min-h-0 flex-1 overflow-hidden bg-ink">
        <img
          src={slide.image}
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
      </span>
      <span className="block border-t border-line px-3 py-3">
        <span className="line-clamp-3 block font-serif text-lg leading-tight text-ink group-hover:text-oxide">
          {slide.title}
        </span>
      </span>
    </>
  );
  const className =
    "group flex aspect-square flex-col border border-ink/15 bg-card will-change-transform";
  if (slide.article) {
    return (
      <ArticleLink article={slide.article} className={className}>
        {face}
      </ArticleLink>
    );
  }
  return (
    <a href={slide.href} className={className}>
      {face}
    </a>
  );
}
