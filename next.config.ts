import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 restricts quality to a configured allowlist (default [75]).
    // We use 82 for hero/section imagery and 70 for low-opacity texture layers.
    qualities: [70, 75, 82],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
