import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/accesorios/")({
  loader: () => {
    throw redirect({ href: "/mapa", statusCode: 301 });
  },
});
