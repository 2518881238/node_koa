const path = require('path');

module.exports = {
  entry: ['./app.ts'],
  mode: "production",
  target: 'node',
  devtool: 'cheap-module-source-map',
  externals: {
    mysql: 'commonjs mysql'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', 'src', 'package.json'],
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: []
};
