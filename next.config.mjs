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
        protocol: "https",
        hostname: "api.draulakhfoods.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
