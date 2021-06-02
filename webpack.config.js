const path=require("path")
const HtmlWebpackPlugin =require("html-webpack-plugin")
module.exports={
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use:[
          "babel-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"Structure&Algorithm",
      template:"./src/index.html"
    }),

  ],
  resolve: {
    extensions: [".js"]
  },
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 5000
  }

}