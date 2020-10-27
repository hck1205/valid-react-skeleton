const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = () => {
    // Common Plugins
    const pluginList = [
        // It removes old chunk files after webpack building
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build'],
        }),

        // Read index.html file and use it as a template for dev-server
        // Produce index.html when webpack build
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../public', 'index.html'),
            //   favicon: path.resolve(__dirname, "../public", "favicon.ico")
        }),

        // Loader Options
        new webpack.LoaderOptionsPlugin({
            minimize: true, // Where loaders can be switched to minimize mode.
        }),
        new webpack.DefinePlugin({
            'process.env': {
                STAGE: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ];

    // Dev Plugins
    if (isDevMode) {
    } else {
        // Prod Plugins
    }

    return pluginList;
};
