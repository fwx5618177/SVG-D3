const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        ts_webgl: "./src/start.tsx",
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[contenthash:8].js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.less', '.css'],
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!static-files*',
                '!directoryToExclude/**',
            ],
            cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
            dangerouslyAllowCleanPatternsOutsideProject: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Drag',
            template: 'public/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            inject: 'body',
            showErrors: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:8]_[name].css',
        }),
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "ts-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
        ]
    },
    devServer: {
        static: path.join(__dirname, './'),
        compress: true,
        host: process.env.npm_package_config_href,
        port: process.env.npm_package_config_port,
        open: true,
        historyApiFallback: true,
    },

}