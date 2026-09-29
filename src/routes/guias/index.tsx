import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/guias/")({
  head: () => sectionMeta("guias"),
  component: () => <SectionView slug="guias" />,
});
