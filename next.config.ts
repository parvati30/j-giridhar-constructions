const CompressionPlugin = require("compression-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  output: "standalone",

  // 🔥 IMPORTANT → disable turbopack
  // turbopack: false,

  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  webpack(config: any, { isServer }: any) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 70000,
      };

      config.plugins.push(new CompressionPlugin());
    }

    return config;
  },
});