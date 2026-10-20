import { readFileSync, writeFileSync } from "node:fs";

const raw = JSON.parse(readFileSync("/workspace/attachments/articles.json", "utf8"));
const alias = {
  "/ios/ios-27-ajustes-iniciales": "/guias/ajustes-iphone-privacidad-seguridad",
};
const pathToSlug = new Map(raw.map((item) => [item.slug, item.slug.split("/").pop()]));
for (const [from, to] of Object.entries(alias)) pathToSlug.set(from, to.split("/").pop());
const idToSlug = new Map(raw.map((item) => [item.id, item.slug.split("/").pop()]));

const unresolved = [];

function sourceLabel(href, current) {
  const known = {
    "https://www.apple.com/es/iphone-18-pro/": "Apple España: iPhone 18 Pro",
    "https://www.apple.com/es/iphone/compare/": "Apple España: comparador de iPhone",
    "https://www.apple.com/es/iphone/": "Apple España: iPhone",
    "https://support.apple.com/es-es": "Apple Support España",
    "https://support.apple.com/es-es/101575": "Apple Support: batería y rendimiento",
    "https://www.apple.com/es/airpods-5/": "Apple España: AirPods 5",
    "https://www.apple.com/es/airpods-5/compare/": "Apple España: comparar AirPods",
    "https://support.apple.com/es-es/guide/airpods/welcome/web": "Apple Support: guía de AirPods",
    "https://www.apple.com/es/apple-watch-series-12/": "Apple España: Watch Series 12",
    "https://www.apple.com/es/apple-watch-ultra-4/": "Apple España: Watch Ultra 4",
    "https://www.apple.com/es/watch/": "Apple España: Apple Watch",
    "https://support.apple.com/es-es/watch": "Apple Support: Apple Watch",
    "https://www.apple.com/es/watch/cellular/": "Apple España: Watch Cellular",
    "https://www.apple.com/es/ios/": "Apple España: iOS",
    "https://support.apple.com/es-es/guide/iphone/iph251e92810/ios": "Apple Support: privacidad del iPhone",
    "https://support.apple.com/es-es/102660": "Apple Support: seguridad de la cuenta",
    "https://support.apple.com/es-es/guide/iphone/iph47c931112/ios": "Apple Support: almacenamiento del iPhone",
    "https://support.apple.com/es-es/108922": "Apple Support: liberar espacio",
    "https://support.apple.com/es-es/118670": "Apple Support: pasar de Android a iPhone",
    "https://www.android.com/intl/es_es/": "Android",
    "https://www.apple.com/es/iphone-air/": "Apple España: iPhone Air",
    "https://www.apple.com/es/iphone-17/": "Apple España: iPhone 17",
    "https://www.apple.com/es/apple-intelligence/": "Apple España: Apple Intelligence",
    "https://www.apple.com/es/shop": "Apple Store España",
    "https://support.apple.com/es-es/108044": "Apple Support: identificar el iPhone",
    "https://www.apple.com/es/shop/refurbished": "Apple Store: reacondicionados",
    "https://support.apple.com/es-es/109511": "Apple Support: borrar el iPhone",
    "https://support.apple.com/es-es/104978": "Apple Support: iPhone perdido",
    "https://support.apple.com/es-es/102560": "Apple Support: modo perdido",
    "https://support.apple.com/es-es/guide/iphone/iph63eecc618/ios": "Apple Support: carga de la batería",
    "https://support.apple.com/es-es/102541": "Apple Support: piezas y servicio",
    "https://www.apple.com/es/support/products/iphone/": "Apple: AppleCare+ para iPhone",
    "https://www.apple.com/es/legal/sales-support/applecare/applecareplus/": "Condiciones de AppleCare+",
    "https://www.apple.com/es/shop/iphone/accessories": "Apple Store: accesorios para iPhone",
    "https://www.apple.com/es/shop/buy-iphone/iphone-duo": "Apple Store España: iPhone Duo",
    "https://www.apple.com/es/iphone-duo/": "Apple España: iPhone Duo",
    "https://www.apple.com/es/newsroom/2026/10/open-up-to-new-possibilities-with-iphone-duo/":
      "Apple Newsroom: iPhone Duo",
    "https://www.apple.com/es/esim/": "Apple: eSIM",
    "https://support.apple.com/es-es/108039": "Apple Support: resistencia al agua",
    "https://support.apple.com/es-es/iphone": "Apple Support: iPhone",
    "https://www.samsung.com/es/smartphones/galaxy-z-fold8/": "Samsung España: Galaxy Z Fold8",
    "https://www.samsung.com/uk/smartphones/galaxy-z-fold8/": "Samsung Reino Unido: Galaxy Z Fold8",
  };
  const host = href.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
  if (current && current !== host && !current.endsWith(".com")) return current;
  return known[href] ?? known[href.replace(/\/$/, "")] ?? known[`${href.replace(/\/$/, "")}/`] ?? current ?? host;
}

function coverAltFor(item) {
  const path = item.slug;
  const slug = path.split("/").pop();
  if (slug === "iphone-18-pro-vs-max" || slug === "iphone-18-pro-vs-iphone-17-pro") {
    return "iPhone 18 Pro y iPhone 17 Pro, fotografía de producto";
  }
  if (path.startsWith("/airpods/")) return "AirPods, fotografía de producto";
  if (path.startsWith("/watch/")) return "Apple Watch, fotografía de producto";
  if (slug === "iphone-duo-vs-iphone-18-pro-max") return "iPhone Duo e iPhone 18 Pro Max, fotografía de producto";
  if (slug === "iphone-duo-vs-galaxy-z-fold8") return "iPhone Duo abierto, fotografía de producto";
  if (path.startsWith("/iphone/iphone-duo/")) return "iPhone Duo, fotografía de producto";
  if (path.startsWith("/comparativas/")) return "Teléfonos comparados, fotografía de producto";
  return "iPhone, fotografía de producto";
}

function clean(text) {
  return text
    .replace(/<\/?sup>/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (all, label, href) => {
      if (href.startsWith("/")) {
        const slug = pathToSlug.get(href);
        if (!slug) {
          unresolved.push(href);
          return label;
        }
        return `[[${slug}|${label}]]`;
      }
      return `[${label}](${href})`;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function parseTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && lines[i].trim().startsWith("|")) {
    const cells = lines[i]
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => clean(cell.trim()));
    const isSep = cells.every((cell) => /^:?-{3,}:?$/.test(cell));
    if (!isSep) rows.push(cells);
    i += 1;
  }
  return { block: { kind: "table", headers: rows[0] ?? [], rows: rows.slice(1) }, next: i };
}

function parseBlocks(lines) {
  const blocks = [];
  let i = 0;
  let para = [];
  const flush = () => {
    if (!para.length) return;
    blocks.push({ kind: "p", text: clean(para.join(" ")) });
    para = [];
  };
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      flush();
      i += 1;
      continue;
    }
    if (line.trim().startsWith("|")) {
      flush();
      const parsed = parseTable(lines, i);
      blocks.push(parsed.block);
      i = parsed.next;
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(clean(lines[i].replace(/^\s*[-*]\s+/, "")));
        i += 1;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      flush();
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(clean(lines[i].replace(/^\s*\d+\.\s+/, "")));
        i += 1;
      }
      blocks.push({ kind: "ol", items });
      continue;
    }
    para.push(line.trim());
    i += 1;
  }
  flush();
  return blocks;
}

function categoryFromPath(path) {
  if (path.startsWith("/iphone/iphone-duo/")) return "duo";
  if (path.startsWith("/iphone/")) return "iphone";
  if (path.startsWith("/airpods/")) return "airpods";
  if (path.startsWith("/watch/")) return "watch";
  if (path.startsWith("/ios/")) return "ios";
  if (path.startsWith("/guias/")) return "guias";
  if (path.includes("iphone-duo")) return "duo";
  return "iphone";
}

function extraRails(item) {
  const label = item.category.toLowerCase();
  const path = item.slug;
  const extra = [];
  if (label.includes("iphone") && !label.includes("duo") && !path.startsWith("/iphone/")) extra.push("iphone");
  if (label.includes("airpods") && !path.startsWith("/airpods/")) extra.push("airpods");
  if (label.includes("watch") && !path.startsWith("/watch/")) extra.push("watch");
  if (label.includes("ios") && !path.startsWith("/ios/")) extra.push("ios");
  if (label.includes("accesorio")) extra.push("accesorios");
  return extra;
}

function clusterFor(path, title) {
  if (path.startsWith("/comparativas/")) return "transaccional";
  if (/^Qué |^Cuánto |^Cuándo /.test(title)) return "pilar";
  return "informativo";
}

function parseArticle(item) {
  const body = item.markdown_body.replace(/\r\n/g, "\n");
  const lines = body.split("\n");
  const chunks = [];
  let current = null;
  const leadLines = [];
  let started = false;
  for (const line of lines) {
    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading && heading[1] === "#") continue;
    if (heading && heading[1] === "##") {
      started = true;
      current = { heading: heading[2].trim(), lines: [] };
      chunks.push(current);
      continue;
    }
    if (!started) {
      if (line.trim()) leadLines.push(line);
      continue;
    }
    current.lines.push(line);
  }

  const lead = parseBlocks(leadLines)
    .filter((block) => block.kind === "p")
    .map((block) => block.text);
  let direct = "";
  const sections = [];
  const faq = [];
  const sources = [];

  for (const chunk of chunks) {
    const name = chunk.heading.toLowerCase();
    if (name.startsWith("lecturas relacionadas")) continue;
    if (name.startsWith("fuentes")) {
      for (const line of chunk.lines) {
        const linked = line.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
        const bare = line.match(/https?:\/\/\S+/);
        if (linked) sources.push({ label: sourceLabel(linked[2], linked[1]), href: linked[2] });
        else if (bare) {
          const href = bare[0].replace(/[).,]+$/, "");
          sources.push({ label: sourceLabel(href), href });
        }
      }
      continue;
    }
    if (name.startsWith("preguntas frecuentes")) {
      let q = "";
      let answer = [];
      const flush = () => {
        if (!q) return;
        faq.push({ q: clean(q), a: clean(answer.join(" ")) });
        answer = [];
      };
      for (const line of chunk.lines) {
        const h3 = line.match(/^###\s+(.*)$/);
        if (h3) {
          flush();
          q = h3[1];
          continue;
        }
        if (line.trim()) answer.push(line.trim());
      }
      flush();
      continue;
    }
    if (name.startsWith("respuesta rápida")) {
      const blocks = parseBlocks(chunk.lines);
      const prose = blocks.filter((block) => block.kind === "p").map((block) => block.text);
      direct = prose.join(" ");
      const rest = blocks.filter((block) => block.kind !== "p");
      if (rest.length) sections.push({ heading: "Detalle de la respuesta", paragraphs: [], blocks: rest });
      continue;
    }
    const sectionLines = [];
    const subsections = [];
    let sub = null;
    for (const line of chunk.lines) {
      const h3 = line.match(/^###\s+(.*)$/);
      if (h3) {
        sub = { heading: h3[1].trim(), lines: [] };
        subsections.push(sub);
        continue;
      }
      if (sub) sub.lines.push(line);
      else sectionLines.push(line);
    }
    const blocks = parseBlocks(sectionLines);
    const parsedSubs = subsections
      .map((item) => ({
        heading: item.heading,
        paragraphs: [],
        blocks: parseBlocks(item.lines),
      }))
      .filter((item) => item.blocks.length);
    if (!blocks.length && !parsedSubs.length) continue;
    sections.push({
      heading: chunk.heading,
      paragraphs: [],
      ...(blocks.length ? { blocks } : {}),
      ...(parsedSubs.length ? { subsections: parsedSubs } : {}),
    });
  }

  const path = item.slug;
  const slug = path.split("/").pop();
  const related = (item.related ?? []).map((id) => idToSlug.get(id)).filter(Boolean);
  const fallbackSources = (item.sources ?? []).map((href) => ({ label: sourceLabel(href), href }));
  return {
    slug,
    path,
    title: item.title,
    dek: item.deck,
    directAnswer: direct,
    metaTitle: item.meta_title,
    metaDescription: item.meta_description,
    cluster: clusterFor(path, item.title),
    category: categoryFromPath(path),
    tags: item.category.split("·").map((part) => part.trim()).slice(0, 3),
    minutes: Math.max(4, Math.round((item.word_count || 500) / 180)),
    updated: "19 oct 2026",
    revised: item.status !== "NUEVO",
    confidence: "ficha",
    coverAlt: coverAltFor(item),
    extraRails: extraRails(item),
    lead,
    sections,
    unknowns: [],
    decision: "",
    faq,
    related,
    sources: sources.length ? sources : fallbackSources,
  };
}

const articles = raw.map(parseArticle);
const missingAnswer = articles.filter((article) => !article.directAnswer).map((article) => article.slug);
const missingSection = articles.filter((article) => article.sections.length === 0).map((article) => article.slug);
const missingFaq = articles.filter((article) => article.faq.length === 0).map((article) => article.slug);
const slugs = new Set(articles.map((article) => article.slug));
const brokenRelated = [];
for (const article of articles) {
  for (const slug of article.related) if (!slugs.has(slug)) brokenRelated.push(`${article.slug} -> ${slug}`);
}
const paths = articles.map((article) => article.path);
const duplicatePaths = paths.filter((path, index) => paths.indexOf(path) !== index);
console.log(
  JSON.stringify(
    {
      count: articles.length,
      unresolved: [...new Set(unresolved)],
      missingAnswer,
      missingSection,
      missingFaq,
      brokenRelated,
      duplicatePaths,
      revised: articles.filter((article) => article.revised).map((article) => article.path),
      newCount: raw.filter((item) => item.status === "NUEVO").length,
      updateCount: raw.filter((item) => item.status !== "NUEVO").length,
    },
    null,
    2,
  ),
);

writeFileSync(
  "/workspace/src/content/lote-45.ts",
  `import type { Article } from "@/content/articles";\n\nexport const lote45: Article[] = ${JSON.stringify(articles, null, 2)};\n`,
);

const kept = [
  ["/", "2026-10-01"],
  ["/iphone", "2026-10-19"],
  ["/iphone/otono-2026", "2026-10-18"],
  ["/iphone/precios-gama-iphone", "2026-10-14"],
  ["/iphone/iphone-duo", "2026-10-19"],
  ["/ios", "2026-10-19"],
  ["/ios/ios-26", "2026-09-29"],
  ["/airpods", "2026-10-19"],
  ["/airpods/airpods-5", "2026-09-29"],
  ["/watch", "2026-10-19"],
  ["/watch/watch-2026", "2026-09-29"],
  ["/comparativas", "2026-10-19"],
  ["/guias", "2026-10-19"],
  ["/accesorios", "2026-10-19"],
  ["/mapa", "2026-10-01"],
  ["/editorial", "2026-10-01"],
  ["/sobre", "2026-10-01"],
  ["/contacto", "2026-10-01"],
  ["/privacidad", "2026-10-01"],
  ["/cookies", "2026-10-01"],
  ["/terminos", "2026-10-01"],
  ["/aviso", "2026-10-01"],
];
const urls = new Map(kept);
for (const article of articles) urls.set(article.path, "2026-10-19");
const body = [...urls.entries()]
  .map(
    ([path, date]) =>
      `  <url><loc>https://cupertinolab.space${path === "/" ? "/" : path}</loc><lastmod>${date}</lastmod></url>`,
  )
  .join("\n");
writeFileSync(
  "/workspace/public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);
