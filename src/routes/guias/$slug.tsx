import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/guias/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "guias"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function GuideArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
