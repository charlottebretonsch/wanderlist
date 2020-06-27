module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        child_process: "empty",
        fs: "empty",
      };
    }

    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    return config;
  },
};
