var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'webMeta',
    libraryTarget: 'umd',
    filename: 'web-meta.js',
  },
};
