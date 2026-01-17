import { getAllBlogMeta, getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const blogs = getAllBlogMeta();
  return blogs.map(({ slug }) => ({ slug }));
}

export default function BlogPage({ params }) {
  const { metadata, content } = getBlogBySlug(params.slug);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto p-8">
      <h1>{metadata.title}</h1>
      <p className="text-sm text-gray-500">{metadata.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
