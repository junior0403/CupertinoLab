import { createFileRoute } from "@tanstack/react-router";
import { ArticleMissing, ArticleView, articleMeta, loadDeskArticle } from "@/components/article-view";

export const Route = createFileRoute("/iphone/iphone-duo/$slug")({
  loader: ({ params }) => loadDeskArticle(params.slug, "duo"),
  head: ({ loaderData }) => articleMeta(loaderData),
  component: function DuoArticle() {
    return <ArticleView article={Route.useLoaderData()} />;
  },
  notFoundComponent: ArticleMissing,
});
