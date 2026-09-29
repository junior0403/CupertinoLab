import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/airpods/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "airpods"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function AirPodsArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
