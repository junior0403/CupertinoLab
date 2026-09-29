import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/iphone/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "iphone"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function IphoneArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
