`use strict`;

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const jQuery = new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', jquery: 'jquery'});
const HtmlWebpackPlugin = require('html-webpack-plugin');

//common config for both dev and prod builds
const common = {
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /(\.scss)/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                          }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.woff2$|\.woff$|\.ttf$|\.eot$|\.svg$/,
                use: "file-loader"
            }, {
                test: /\.jpe?g$|\.gif$|\.png$/,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(`${__dirname}/src/Components/`),
            "node_modules"
        ]
    }
};

// config for dev server
let dev = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        path.resolve('./src/index.js')
    ],
    output: {
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), jQuery, new HtmlWebpackPlugin({
          template:'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|build)/,

                use: ['react-hot-loader', 'babel-loader']
            }
        ]
    }

};

//config for production build
let prod = {
    entry: path.resolve('./src/index.js'),
    output: {
        publicPath: '/'
    },
    plugins: [
        jQuery,
        new webpack.optimize.UglifyJsPlugin({sourceMap: false, mangle: true, compress: true}),
        new HtmlWebpackPlugin({
          template:'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|build)/,
                use: "babel-loader"
            }

        ]
    }
};

let config;
switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(prod, common);
        break;
    case 'start':
        config = merge(dev, common);
        break;
    default:
    config = merge(prod, common);
}

module.exports = config;
