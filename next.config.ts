const CompressionPlugin = require("compression-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  devIndicators: false,
  output: "standalone",
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    // NEXT_PUBLIC_BASIC_AUTH: process.env.NEXT_PUBLIC_BASIC_AUTH,
    // NEXT_PUBLIC_ASSET_URL: process.env.NEXT_PUBLIC_ASSET_URL
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: "./tsconfig.json",
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  webpack(config: any, { isServer }: any) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 70000,
      };
      // config.optimization.usedExports = true;
      config.plugins.push(new CompressionPlugin());
    }

    return config;
  },
});
