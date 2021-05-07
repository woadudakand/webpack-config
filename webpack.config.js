const path = require('path');

 module.exports = {
   entry: ['./src/main.js', './src/style.scss'],
   output: {
    filename: 'public/main.js',
    path: path.resolve(__dirname, './'),
   },
   module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },       
        ]
      },
      {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'src/style.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
     
    ],
  },
 };
