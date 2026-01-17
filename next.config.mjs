/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = { pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"] };

const withMDX = createMDX();
export default withMDX(nextConfig);
