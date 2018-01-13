const path = require('path');

module.exports = {
  entry: {
    Timetable: './src/Timetable.jsx',
    'Timetable.min': './src/Timetable.jsx'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};