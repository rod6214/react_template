const webpack = require("webpack");
const path = require('path');
const middleware = require("webpack-dev-middleware");
var webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
const express = require("express");
const app = express();

app.use('/assets', express.static(__dirname + '/public'));

var midhandler = middleware(compiler, {
  // webpack-dev-middleware options
  publicPath: webpackConfig.output.publicPath,
});

app.use(midhandler);

var hot = require("webpack-hot-middleware")(compiler, {
  log: false,
  path: "/__webpack_hmr",
  heartbeat: 2000
})

app.use(hot);

app.use('/*', function (req, res, next) {
  midhandler(req, res, next)
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
