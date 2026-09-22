const isProd = process.env.NODE_ENV === "production";
const repoName = "saiteja_portfolio";
const basePath = isProd ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
