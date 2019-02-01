module.exports = {
  entry: "./src/cms/cms.js",
  output: {
    filename: "./admin/cms.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
