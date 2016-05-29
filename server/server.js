var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

const app = express();

new WebpackDevServer(webpack(config), {
  hot: true,
  colors: true,
  historyApiFallback: true,
  inline: true,
  publicPath: config.output.publicPath
}).listen(3001, 'localhost', function (err, result) {
  if (err) { console.log(err) }
  console.log('Listening at localhost:3001');
});


app.use('/', express.static(__dirname + '/../public'));

// app.get('*', function response(req, res) {
//   res.sendFile(path.join(__dirname, '/../index.html'));
// });

const server = app.listen(3000, () => {
  console.log('Express listening on port', 3000);
});