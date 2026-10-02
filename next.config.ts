import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a portable static site for the production cPanel host.
  output: "export",
  trailingSlash: true,
  // Allow phones on the local network to use the dev server's HMR socket.
  // Without this, Next blocks the socket and the page force-reloads itself.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "10.*.*.*"],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
