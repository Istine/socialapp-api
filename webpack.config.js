const path = require("path");

module.exports = {
  entry: [`${path.resolve(__dirname, "src", "index.js")}`],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "api.bundle.js",
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
            cacheDirectory: true, // speeds up recompiling 2x by caching compilation results and reusing it
          },
        },
      },
    ],
  },
};
