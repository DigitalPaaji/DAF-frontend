/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
   dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
       {
        protocol: "http",
        hostname: "72.62.199.21",
        port: "8006",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
