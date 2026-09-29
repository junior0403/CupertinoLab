import { Link, notFound } from "@tanstack/react-router";
import { ArticleCard, ArticleCover, ArticleLink, articleSectionName } from "@/components/article-card";
import { RichText, Shell, SpecTable } from "@/components/chrome";
import { articles, confidenceLabel, getArticle, type Article } from "@/content/articles";
import { sections, sectionsFor, type CategorySlug } from "@/content/taxonomy";

export function loadDeskArticle(slug: string, category: CategorySlug) {
  const article = getArticle(slug);
  if (!article || article.category !== category) throw notFound();
  return article;
}

export function articleMeta(article: Article | undefined) {
  if (!article) return { meta: [] };
  return {
    meta: [
      { title: `${article.title} · CupertinoLab` },
      { name: "description", content: article.dek },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.dek },
    ],
  };
}

export function ArticleView({ article }: { article: Article }) {
  const rails = sectionsFor(article)
    .map((slug) => sections.find((section) => section.slug === slug))
    .filter((section) => section !== undefined);
  const primary = rails[0];
  const related = article.related
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item) => item !== undefined)
    .slice(0, 3);

  return (
    <Shell>
      <article className="pt-6">
        <p className="font-sans text-sm text-muted">
          <Link to="/" className="underline underline-offset-4">
            Inicio
          </Link>
          {primary ? (
            <>
              {" · "}
              <a href={primary.path} className="underline underline-offset-4">
                {primary.name}
              </a>
            </>
          ) : null}
        </p>
        <p className="mt-4 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
          {articleSectionName(article)}
        </p>
        <h1 className="mt-2 font-serif text-4xl leading-tight text-ink md:text-5xl">{article.title}</h1>
        <p className="mt-3 font-sans text-lg leading-relaxed text-muted">{article.dek}</p>
        <p className="mt-4 font-sans text-xs tracking-wide text-muted uppercase">
          {article.updated}
          <span aria-hidden="true"> · </span>
          {article.minutes} min de lectura
          <span aria-hidden="true"> · </span>
          {confidenceLabel[article.confidence]}
        </p>
        <div className="mt-6">
          <ArticleCover article={article} />
        </div>

        <p className="mt-8 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
          Respuesta rápida
        </p>
        <div className="mt-2 border border-line bg-card px-5 py-5">
          <p className="font-serif text-2xl leading-snug text-ink">{article.directAnswer}</p>
        </div>

        {article.sections.map((section, index) => (
          <section key={section.heading} className="mt-8">
            <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-3 font-sans text-base leading-relaxed text-ink">
                <RichText text={paragraph} />
              </p>
            ))}
            {index === 0 && article.table ? (
              <SpecTable
                caption={article.table.caption}
                headers={article.table.headers}
                rows={article.table.rows}
              />
            ) : null}
            <div data-ad-slot={index === 0 ? "medio-1" : undefined} hidden />
          </section>
        ))}

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink">Lo que nadie puede afirmar aún</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-base leading-relaxed text-ink">
            {article.unknowns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <aside className="mt-8 border-l-4 border-oxide bg-card px-5 py-5">
          <p className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">Decisión</p>
          <p className="mt-2 font-serif text-xl leading-snug text-ink">{article.decision}</p>
        </aside>

        <div data-ad-slot="cierre" hidden />

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink">Preguntas cortas</h2>
          <div className="mt-3 divide-y divide-line border-y border-line">
            {article.faq.map((item) => (
              <details key={item.q} className="group py-3">
                <summary className="font-sans text-base font-medium text-ink">{item.q}</summary>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-line pt-4">
          <h2 className="font-serif text-2xl text-ink">Fuentes</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
            Fuentes de trabajo, septiembre de 2026: ficha de Apple y crónicas de Reuters, Ars Technica,
            MacRumors, MacObserver y 9to5Mac. CupertinoLab no está afiliado a Apple.
            {article.category === "duo"
              ? " El Duo no tiene todavía unidades de venta: el envío empieza el 23 de octubre."
              : " Lo que lleva días en tienda se cita como ficha, no como prueba propia."}
          </p>
          <p className="mt-3 font-sans text-sm">
            <a
              className="underline underline-offset-4"
              href="https://www.reuters.com/business/retail-consumer/apple-expected-unveil-first-folding-phone-with-new-ceo-ternus-command-2026-09-09/"
              rel="noreferrer"
              target="_blank"
            >
              Reuters
            </a>
            {" · "}
            <a
              className="underline underline-offset-4"
              href="https://arstechnica.com/gadgets/2026/09/apples-long-rumored-foldable-becomes-reality-with-the-2000-iphone-duo/"
              rel="noreferrer"
              target="_blank"
            >
              Ars Technica
            </a>
            {" · "}
            <a
              className="underline underline-offset-4"
              href="https://9to5mac.com/2026/09/18/apple-vp-of-hardware-talks-iphone-duo-durability-crease-hinge-and-more/"
              rel="noreferrer"
              target="_blank"
            >
              9to5Mac
            </a>
          </p>
        </footer>

        {related.length > 0 ? (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-ink">También te puede interesar</h2>
            <ul className="mt-6 grid grid-cols-1 gap-8">
              {related.map((item) => (
                <li key={item.slug}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="mt-10 font-sans text-base">
          {primary ? (
            <a href={primary.path} className="text-oxide underline underline-offset-4">
              Seguir en {primary.name}
            </a>
          ) : null}
          <span aria-hidden="true"> · </span>
          <Link to="/mapa" className="text-ink underline underline-offset-4">
            Mapa de CupertinoLab
          </Link>
        </p>
      </article>
    </Shell>
  );
}

export function ArticleMissing() {
  return (
    <Shell>
      <h1 className="pt-10 font-serif text-4xl text-ink">Esa ficha no está</h1>
      <p className="mt-3 font-sans text-base text-muted">El enlace no coincide con ninguna ficha publicada.</p>
      <Link to="/" className="mt-6 inline-block font-sans text-base text-oxide underline underline-offset-4">
        Volver al índice
      </Link>
    </Shell>
  );
}

