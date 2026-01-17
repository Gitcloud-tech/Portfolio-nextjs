import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blogs");

export function getAllBlogMeta() {
  const files = fs.readdirSync(blogDir);

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const content = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data } = matter(content);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const rawContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawContent);
  return { metadata: data, content };
}
