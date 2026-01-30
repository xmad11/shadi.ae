/* ═══════════════════════════════════════════════════════════════════════════════
   NEXT.JS CONFIG - Shadi.ae 2026
   ═══════════════════════════════════════════════════════════════════════════════ */

const nextConfig = {
  // Image optimization: AVIF/WebP formats
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 70, 75],
    minimumCacheTTL: 31536000, // 1 year cache
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "**.cloudinary.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
    unoptimized: process.env.NODE_ENV !== "production",
  },
}

export default nextConfig
