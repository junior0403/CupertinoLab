import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

const destinations: Record<string, string> = {
  iphone: "/iphone",
  airpods: "/airpods",
  watch: "/watch",
  duo: "/iphone/iphone-duo",
};

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const href = destinations[params.slug];
    if (!href) throw notFound();
    throw redirect({ href, statusCode: 301 });
  },
});
