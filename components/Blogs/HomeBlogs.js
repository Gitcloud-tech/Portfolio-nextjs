import Link from "next/link";
import { getAllBlogMeta } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function HomeBlogs() {
  const blogs = getAllBlogMeta().slice(0, 3);

  return (
    <section className="py-8">
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">Latest Blogs</h2> */}

      <div className="w-full flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold whitespace-nowrap">Latest Blogs</h2>
        <Separator className="flex-1 bg-gray-300 dark:bg-gray-700 h-[2px]" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map(({ slug, title, excerpt, date, image }) => (
          <div
            key={slug}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            {/* Image area placeholder */}
            <div className="relative h-[65%] bg-gray-200 dark:bg-gray-700">
              <p className="absolute top-2 right-2 text-xs text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded px-2 py-1">
                {date}
              </p>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {excerpt}
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/blogs/${slug}`}
                  className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
