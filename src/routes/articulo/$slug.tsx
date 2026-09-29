import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdSlot, ClusterMark, RichText, Shell, SpecTable } from "@/components/chrome";
import { articles, confidenceLabel, getArticle } from "@/content/articles";
import { categories } from "@/content/taxonomy";

export const Route = createFileRoute("/articulo/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · CupertinoLab` },
          { name: "description", content: loaderData.directAnswer },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: NotFound,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const category = categories.find((item) => item.slug === article.category);
  const related = article.related
    .map((slug) => articles.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  return (
    <Shell>
      <article className="pt-6">
        <p className="font-sans text-sm text-muted">
          <Link to="/" className="underline underline-offset-4">
            Inicio
          </Link>
          {category ? (
            <>
              {" · "}
              <Link
                to="/categoria/$slug"
                params={{ slug: category.slug }}
                className="underline underline-offset-4"
              >
                {category.name}
              </Link>
            </>
          ) : null}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <ClusterMark cluster={article.cluster} />
          <span className="font-sans text-xs tracking-wide text-muted uppercase">
            {confidenceLabel[article.confidence]}
          </span>
        </div>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink">{article.title}</h1>
        <p className="mt-3 font-sans text-base leading-relaxed text-muted">{article.dek}</p>

        <p className="mt-6 font-sans text-xs font-medium tracking-widest text-oxide uppercase">
          Si vienes de un vídeo, la respuesta es esta
        </p>
        <div className="mt-2 bg-inverse px-5 py-5 text-paper">
          <p className="font-serif text-2xl leading-snug text-paper">{article.directAnswer}</p>
        </div>
        <p className="mt-3 font-sans text-xs tracking-wide text-muted uppercase">
          {article.updated} · {article.minutes} min
        </p>

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
            {index === 0 ? <AdSlot slot="medio-1" /> : null}
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
          <p className="font-sans text-xs font-medium tracking-widest text-oxide uppercase">
            Decisión
          </p>
          <p className="mt-2 font-serif text-xl leading-snug text-ink">{article.decision}</p>
        </aside>

        <AdSlot slot="cierre" />

        <section>
          <h2 className="font-serif text-2xl text-ink">Preguntas cortas</h2>
          <div className="mt-3 divide-y divide-line border-y border-line">
            {article.faq.map((item) => (
              <details key={item.q} className="group py-3">
                <summary className="font-sans text-base font-medium text-ink">
                  {item.q}
                </summary>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink">Sigue en el mismo grupo</h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/articulo/$slug"
                  params={{ slug: item.slug }}
                  className="block py-4"
                >
                  <ClusterMark cluster={item.cluster} />
                  <span className="mt-1 block font-serif text-xl text-ink">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-10 border-t border-line pt-4">
          <p className="font-sans text-sm leading-relaxed text-muted">
            Fuentes de trabajo, septiembre de 2026: ficha de Apple y crónicas
            de Reuters, Ars Technica, MacRumors, MacObserver y 9to5Mac. CupertinoLab
            no está afiliado a Apple.
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
      </article>
    </Shell>
  );
}

function NotFound() {
  return (
    <Shell>
      <h1 className="pt-10 font-serif text-4xl text-ink">Esa ficha no está</h1>
      <p className="mt-3 font-sans text-base text-muted">
        El enlace no coincide con ninguna ficha publicada.
      </p>
      <Link to="/" className="mt-6 inline-block font-sans text-base text-oxide underline underline-offset-4">
        Volver al índice
      </Link>
    </Shell>
  );
}
