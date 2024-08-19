/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  output: 'standalone',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
