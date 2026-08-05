import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve local images as-is instead of routing them through the built-in
    // optimizer (which depends on the native `sharp` binary). On some
    // Windows setups a broken/missing sharp install can cause the image
    // optimization step to hang indefinitely on first request.
    unoptimized: true,
  },
};

export default nextConfig;