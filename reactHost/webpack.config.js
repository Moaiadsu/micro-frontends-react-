const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    proxy: {
      "/api": {
        target: {
          host: "nginx",
          protocol: 'http:',
          port: 80
        },
        changeOrigin: true,
        secure: false
      },
      "/request": {
        target: {
          host: "nginx",
          protocol: 'http:',
          port: 80
        },
        changeOrigin: true,
        secure: false
      },
    },
    port: 8000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "reactHost",
      filename: "remoteEntry.js",
      remotes: {
        rmoteAppReact: "rmoteAppReact@http://localhost:3000/remoteEntry.js",
        remoteLogin: "remoteLogin@http://localhost:3330/remoteEntryLogin.js",
        remoteSearch: "remoteSearch@http://localhost:4400/remoteEntrySearch.js",
        remoteNotes: "remoteNotes@http://localhost:3220/remoteNotesEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
