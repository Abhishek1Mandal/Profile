const path = require('path');

module.exports = {
  mode: 'production', // Set your desired mode
  entry: './src/index.js', // Adjust the entry point if needed
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js', // Adjust the output filename if needed
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx'], // Add '.jsx' for JSX file extensions
  },
};
