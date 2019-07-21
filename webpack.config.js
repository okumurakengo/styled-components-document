module.exports = {
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  devServer: {
    port: 9000,
    contentBase: "./",
    publicPath: "/dist/",
    open: true
  }
};
