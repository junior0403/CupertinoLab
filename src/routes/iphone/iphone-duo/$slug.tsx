import { createFileRoute, redirect } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";
import { legacyArticleHrefs } from "@/content/taxonomy";

export const Route = createFileRoute("/iphone/iphone-duo/$slug")({
  loader: ({ params }) => {
    const legacy = legacyArticleHrefs[params.slug];
    if (legacy) throw redirect({ href: legacy, statusCode: 301 });
    return loadDeskArticle(params.slug, "duo");
  },
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function DuoArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});

