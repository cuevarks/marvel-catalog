/* eslint-disable */
const {
  override,
  addBabelPlugins,
  addWebpackPlugin,
} = require("customize-cra");
const { InjectManifest } = require("workbox-webpack-plugin");
const WebpackLighthousePlugin = require("webpack-lighthouse-plugin");

module.exports = function overrideConfigurations(webpack, ...args) {
  webpack.plugins.pop();
  const overridenConf = override(
    ...addBabelPlugins(
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining"
    ),
    addWebpackPlugin(
      new InjectManifest({
        swSrc: "./src/service-worker.js",
        swDest: "sw.js",
        exclude: [
          /\.map$/,
          /manifest$/,
          /\.htaccess$/,
          /service-worker\.js$/,
          /sw\.js$/,
        ],
      })
    ),
    process.env.LIGHTHOUSE_AUDIT === "true"
      ? addWebpackPlugin(
          new WebpackLighthousePlugin({
            url: "http://localhost:5000",
            disableDeviceEmulation: true,
          })
        )
      : null
  )(webpack, ...args);

  return overridenConf;
};
