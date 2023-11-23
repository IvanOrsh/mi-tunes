/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wleckkrhtkopzrztmrus.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
