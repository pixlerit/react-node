var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');

var cssModulesIdentName = '[name]__[local]__[hash:base64:5]';
if (process.env.NODE_ENV === 'production') {
  cssModulesIdentName = '[hash:base64]';
}

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js','.scss', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=' + cssModulesIdentName + '&modules&importLoaders=1!postcss-loader!resolve-url-loader',
      },
      {
        test: /\.scss$/,
        loaders: 'css-loader/locals?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1!sass-loader!resolve-url-loader',
      },
      {
        test:/.svg$/,
        loader:'url-loader',query:{mimetype:'image/svg+xml',name:'./semantic/dist/themes/default/assets/fonts/icons.svg'}
      },

      {
        test:/.woff$/,
        loader:'url-loader',query:{mimetype:'application/font-woff',name:'./semantic/dist/themes/default/assets/fonts/icons.woff'}
      },

      {
        test:/.woff2$/,
        loader:'url-loader',query:{mimetype:'application/font-woff2',name:'./semantic/dist/themes/default/assets/fonts/icons.woff2'}
      },

      {
        test:/.[ot]tf$/,
        loader:'url-loader',query:{mimetype:'application/octet-stream',name:'./semantic/dist/themes/default/assets/fonts/icons.ttf'}
      },
      {
        test:/.eot$/,
        loader:'url-loader',query:{mimetype:'application/vnd.ms-fontobject',name:'./semantic/dist/themes/default/assets/fonts/icons.eot'}
      },
      {
         test: /\.(png|jpe?g|woff|woff2|eot|ttf|svg)$/, 
         loader: 'url-loader?limit=100000'
      },
      // {
      //   test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
      //   loader: 'url-loader?limit=10000',
      // },
    ],
  },
  postcss: () => [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
};
