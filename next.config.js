/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static HTML export for Vercel/Netlify
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
