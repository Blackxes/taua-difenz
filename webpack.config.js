const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { merge } = require('webpack-merge');

// common config
const commonConfig = {
    entry: {
        app: path.resolve(__dirname, 'App/index.tsx')
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        // 'styled-component': 'styled-component',
        redux: 'Redux',
        lodash: '_'
        // 'redux-saga': 'umd redux-saga'
        // '@fortawesome/fontawesome-svg-core': 'FontAwesomeCVGCore',
        // '@fortawesome/free-regular-svg-icons': 'FontAwesomeRegularIcons',
        // '@fortawesome/free-solid-svg-icons': 'FontAwesomeSolidIcons',
        // '@fortawesome/react-fontawesome': 'FontAwesomeReactMiddleware',
        // 'final-form': 'FinalForm',
        // 'react-final-form': 'ReactFinalForm',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts'
                }
            }
        ]
    },
    output: {
        // chunkFilename: '[name].bundle.js',
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/templates/template.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'assets/icons/favicon.ico'),
            outputPath: '',
            prefix: 'assets/icons',
            favicons: {
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    windows: false,
                    yandex: false
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        extensions: ['.css', '.scss', '.ts', '.tsx', '.js', '.jsx']
    }
};

// development config
const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/'
    }
};

// production config
const prodConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};

module.exports = (env, argv) => {
    switch (argv.mode) {
        case 'development':
            return merge(commonConfig, devConfig);
        case 'production':
            return merge(commonConfig, prodConfig);
    }
};
