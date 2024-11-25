
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/sloth.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2', // Important for Node.js compatibility
  },
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
};
