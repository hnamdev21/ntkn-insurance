/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "@Styles/_tools.scss";
      @import "@Styles/_utils.scss";
    `,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
              "prefixIds",
            ],
          },
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
