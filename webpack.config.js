const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',//npm install babel-loader @babel/core @babel/preset-env --save-dev
                },
              },
              // Use style-loader and css-loader for handling CSS files
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //npm install style-loader css-loader --save-dev
              },
              // Use file-loader for handling image files
              {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'], //npm install file-loader --save-dev
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        }),
      ],
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 3000,
        open: true,
    }
}