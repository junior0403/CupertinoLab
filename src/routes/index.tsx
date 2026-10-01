import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArticleLink, coverSrc } from "@/components/article-card";
import { Shell } from "@/components/chrome";
import { articles, type Article } from "@/content/articles";
import { articlePath, sections } from "@/content/taxonomy";
import { articlesInSection } from "@/components/section-view";
import { breadcrumbLd, pageMeta, siteJsonLd } from "@/lib/seo";

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
    ...pageMeta({
      title: "CupertinoLab · El catálogo, sin el tráiler",
      description:
        "Fichas de iPhone 18, iPhone Duo, iOS 26, AirPods y Apple Watch. La cifra de Apple, separada de lo que todavía no está medido.",
      path: "/",
    }),
    scripts: [
      ...siteJsonLd(),
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([{ name: "Inicio", path: "/" }])),
      },
      { type: "application/ld+json", children: JSON.stringify(homeListLd()) },
    ],
  }),
  component: Home,
});

function homeListLd() {
  const bySlug = new Map(articles.map((article) => [article.slug, article]));
  const items: { name: string; path: string }[] = [];
  const first = bySlug.get(homeOrder[0]);
  if (first) items.push({ name: first.title, path: articlePath(first) });
  items.push({ name: "iPhone Duo", path: "/iphone/iphone-duo" });
  for (const slug of homeOrder.slice(1)) {
    const article = bySlug.get(slug);
    if (article) items.push({ name: article.title, path: articlePath(article) });
  }
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://cupertinolab.space${item.path}`,
    })),
  };
}

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
  crop?: string;
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
    crop: "scale-[1.85]",
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
        const amount = Math.min(distance / (box.width * 0.55), 1);
        if (reduce) {
          card.style.filter = "";
          card.style.transform = "";
          card.style.opacity = "1";
          continue;
        }
        card.style.transform = `scale(${1 - amount * 0.05})`;
        card.style.filter = `blur(${amount * 8}px)`;
        card.style.opacity = `${1 - amount * 0.28}`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = event.clientX;
      startScroll = root.scrollLeft;
      root.style.scrollSnapType = "none";
      root.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      root.scrollLeft = startScroll - dx;
    };
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      root.style.scrollSnapType = "";
    };
    const onClickCapture = (event: MouseEvent) => {
      if (moved < 8) return;
      event.preventDefault();
      event.stopPropagation();
      moved = 0;
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = root.scrollWidth - root.clientWidth;
      const next = root.scrollLeft + event.deltaY;
      if ((event.deltaY < 0 && root.scrollLeft <= 0) || (event.deltaY > 0 && root.scrollLeft >= max - 1)) {
        return;
      }
      root.scrollLeft = Math.min(max, Math.max(0, next));
      event.preventDefault();
    };

    paint();
    root.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);
    root.addEventListener("click", onClickCapture, true);
    root.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("scroll", onScroll);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerup", endDrag);
      root.removeEventListener("pointercancel", endDrag);
      root.removeEventListener("click", onClickCapture, true);
      root.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onScroll);
    };
  }, [slides.length]);

  return (
    <section className="mt-8" aria-roledescription="carrusel" aria-label="Artículos">
      <div
        ref={scroller}
        className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, position) => (
          <div
            key={slide.key}
            ref={(node) => {
              cards.current[position] = node;
            }}
            className="w-[78%] shrink-0 snap-center sm:w-[46%] md:w-[calc((100%-2rem)/3)]"
          >
            <ShelfCard slide={slide} priority={position < 2} />
          </div>
        ))}
      </div>
      <p className="mt-4 font-sans text-xs tracking-widest text-muted uppercase">Desliza</p>
    </section>
  );
}

function ShelfCard({ slide, priority }: { slide: Slide; priority?: boolean }) {
  const face = (
    <>
      <span className="relative block aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={slide.image}
          alt=""
          width={800}
          height={600}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${slide.crop ?? ""}`}
        />
        <span className="absolute top-3 right-3 bg-paper px-2 py-1 font-sans text-[11px] font-medium tracking-widest text-oxide uppercase">
          Abrir
        </span>
      </span>
      <span className="block border-t border-line px-3 py-3">
        <span className="line-clamp-2 block min-h-[3.25rem] font-serif text-lg leading-tight text-ink group-hover:text-oxide">
          {slide.title}
        </span>
      </span>
    </>
  );
  const className = "group flex flex-col border border-ink/15 bg-card will-change-transform";
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
