/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["skillslash-cdn.s3.ap-south-1.amazonaws.com"],
  },
};
