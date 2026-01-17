import Link from "next/link";
import { getAllBlogMeta } from "@/lib/blog";

export default function BlogListPage() {
  const blogs = getAllBlogMeta();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">All Blogs</h1>
      <ul className="space-y-4">
        {blogs.map(({ slug, title, date, excerpt }) => (
          <li key={slug}>
            <Link href={`/blogs/${slug}`}>
              <h2 className="text-xl text-blue-600 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
