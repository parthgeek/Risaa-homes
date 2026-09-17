import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones on the local network to use the dev server's HMR socket.
  // Without this, Next blocks the socket and the page force-reloads itself.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
