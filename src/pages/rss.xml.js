import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    // 配置文件里的site
    site: context.site,
    // 所有三级md文件
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
