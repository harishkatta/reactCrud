var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   /*devServer: {
      inline: true,
      port: 3333
     },*/

   module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
