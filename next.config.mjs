/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/destination-search",
  // output: "export",
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'booking.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'maps.gstatic.com',
        pathname: '**',
      },
    ],
    // domains: ['booking.com', 'q-xx.bstatic.com', 'maps.gstatic.com'],
  },
};

export default nextConfig;
