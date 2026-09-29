import { createFileRoute } from "@tanstack/react-router";
import { SectionView, sectionMeta } from "@/components/section-view";

export const Route = createFileRoute("/comparativas/")({
  head: () => sectionMeta("comparativas"),
  component: () => <SectionView slug="comparativas" />,
});
