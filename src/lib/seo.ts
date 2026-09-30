const origin = "https://cupertinolab.space";

const months: Record<string, string> = {
  ene: "01",
  feb: "02",
  mar: "03",
  abr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dic: "12",
};

export function isoFromUpdated(updated: string) {
  const match = updated
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2})\s+([a-záéíóúñ]+)\s+(\d{4})$/);
  if (!match) return undefined;
  const month = months[match[2].slice(0, 3)];
  if (!month) return undefined;
  return `${match[3]}-${month}-${match[1].padStart(2, "0")}`;
}

export function pageMeta(input: { title: string; description: string; path: string }) {
  const canonical = `${origin}${input.path}`;
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CupertinoLab" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { property: "og:image", content: `${origin}/og.jpg` },
      { name: "twitter:image", content: `${origin}/og.jpg` },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export function siteJsonLd() {
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "CupertinoLab",
        url: `${origin}/`,
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CupertinoLab",
        url: `${origin}/`,
        contactPoint: {
          "@type": "ContactPoint",
          email: "contacto@cupertinolab.space",
          contactType: "editorial",
          availableLanguage: "es",
        },
      }),
    },
  ];
}
