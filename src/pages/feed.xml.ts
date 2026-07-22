import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "@/data/content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${profile.name} — Cybersecurity Blog`,
    description: profile.subtitle,
    site: context.site ?? "https://anuragbathani.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      categories: [post.data.category],
      link: `/blog/${post.id}/`,
    })),
  });
}
