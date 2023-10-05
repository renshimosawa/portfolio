/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/test-lab/",
        destination: "/map/hachinohe/",
        permanent: true,
      },
      {
        source: "/test-lab-kyoto/",
        destination: "/map/kyoto/",
        permanent: true,
      },
    ];
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
  trailingSlash: true,
  swcMinify: true,
};

module.exports = nextConfig;
