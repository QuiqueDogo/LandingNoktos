module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_NUMBER_OF_ITEMS_PER_PAGE:
      process.env.NEXT_PUBLIC_NUMBER_OF_ITEMS_PER_PAGE,
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    NEXT_PUBLIC_CURRENT_VERSION_APP:
      process.env.NEXT_PUBLIC_CURRENT_VERSION_APP,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/dynamic-sitemap.js");
    }
    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/beneficios": { page: "/beneficios" },
      "/home/politics": { page: "/home/politics" },
      "/home/privacity": { page: "/home/privacity" },
      "/registro-gbta": { page: "/registro-gbta" },
      "/precios": { page: "/precios" },
      "/como-funciona": { page: "/como-funciona" },
      "/totalplay": { page: "/totalplay" },
    };
  },
  trailingSlash: true,
};
