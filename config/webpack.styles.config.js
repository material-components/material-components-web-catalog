const autoprefixer = require('autoprefixer');
const paths = require('./paths');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

const publicPath = paths.servedPath;

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldUseRelativeAssetPaths = publicPath === './';

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

const mainExtractTextPlugin = new ExtractTextPlugin(cssFilename);
const themeExtractTextPlugin = new ExtractTextPlugin('static/css/theme.[contenthash:8].css');

const extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};

// The notation here is somewhat confusing.
// "postcss" loader applies autoprefixer to our CSS.
// "css" loader resolves paths in CSS and adds assets as dependencies.
// "style" loader normally turns CSS into JS modules injecting <style>,
// but unlike in development configuration, we do something different.
// `ExtractTextPlugin` first applies the "postcss" and "css" loaders
// (second argument), then grabs the result CSS and puts it into a
// separate file in our build process. This way we actually ship
// a single CSS file in production instead of JS code injecting <style>
// tags. If you use code splitting, however, any async bundles will still
// use the "style" loader inside the async code so CSS from them won't be
// in the main CSS file.
const scssLoaders = Object.assign(
    {
      fallback: {
        loader: require.resolve('style-loader'),
        options: {
          hmr: false,
        },
      },
      use: [
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            minimize: true,
            sourceMap: shouldUseSourceMap,
          },
        },
        {
          loader: require.resolve('postcss-loader'),
          options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('dart-sass'),
            fiber: require('fibers'),
            importer: require('./material-sass-importer')
          }
        },
      ],
    },
    extractTextPluginOptions
);

const webpackLoaders = [
  // This loader is used to compile all of our scss assets into css
  // except for the assets used for the theme.
  {
    test: /\.scss$/,
    loader: mainExtractTextPlugin.extract(scssLoaders),
  },
];

const webpackPlugins =  [
  // This plugin automatically adds <script>/<link> tags in the index.html
  // file for the assets that were generated.
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
    excludeAssets: /theme.*.css/,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }
  }),
  // This plugin ensures that any file that matches the 'excludeAssets'
  // property (of the HtmlWebpackPlugin) does not get automatically added
  // to the index.html page. The theme file will be dynamically loaded when
  // the user navigates to the theme route.
  new HtmlWebpackExcludeAssetsPlugin(),
  mainExtractTextPlugin,
  themeExtractTextPlugin,
  // This plugin generates the `asset-manifest` file showing the asset that
  // were generated. The plugin can't handle css file splitting, so to get
  // around that there is a customized map function provided.
  // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/653
  new ManifestPlugin({
    fileName: 'asset-manifest.json',
    map: function(file) {
      // The plugin doesn't handle multiple assets, so the name property is the same
      // causing the map to override a previous value. To get around this,
      // this function will remove the content hash and path from the filename
      // to create a key of the common name of the file (main.css, theme.css)
      // that is mapped to the full path of the asset generated.
      // Ex. "main.css": "static/css/main.5b3c03dd.css"
      file.name = file.path.replace(/\..{8}\./, '.');
      file.name = file.name.replace(file.name.substring(0, file.name.lastIndexOf('/') + 1), '');
      return file;
    },
  }),
];

module.exports = {
  webpackLoaders: webpackLoaders,
  webpackPlugins: webpackPlugins
};
