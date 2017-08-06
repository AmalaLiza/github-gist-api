const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getConfig = require('./webpack.config.js');

const hosts = {
  DEV_SERVER: {
    name: 'Dev Server',
    port: 8080,
    proxy: 'https://api.github.com',
  },
};

const startServer = (module) => {
  const port = module.port;
  const config = getConfig(module.name, port);

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    proxy: { '/rest/*': module.proxy, '/ide-web-socket': module.proxy },
  }).listen(port, '0.0.0.0', (err) => {
    if (err) { console.error(err); }

    console.info(`Starting ${module.name} server. Listening at localhost:${port}`);
  });
};

module.exports = {
  start: startServer,
  hosts,
};
