
module.exports = {
  target: 'web',
  entry: './src/bootstrap',
  output: {
    path: __dirname + '/__build__',
    publicPath: '__build__/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.json', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /node_modules/ ]
      }
    ],
    noParse: [ /zone\.js\/dist/ ]
  }
};
