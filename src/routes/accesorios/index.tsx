import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/accesorios/")({
  head: () => sectionMeta("accesorios"),
  component: () => <SectionView slug="accesorios" />,
});
