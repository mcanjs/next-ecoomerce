/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'placeimg.com',
      'i.dummyjson.com',
      'media.istockphoto.com',
      'cdn-icons-png.flaticon.com'
    ]
  }
};

module.exports = nextConfig;
