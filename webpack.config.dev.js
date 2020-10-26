const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.ts',
    mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 9000,
        hot: true,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 指定特定的ts编译配置，为了区分脚本的ts配置
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                        },
                    },
                ],
                exclude: /node_modules/,
            },

            {
                test: /[\.ts|\.tsx]$/,
                loader: 'tslint-loader',
                enforce: "pre",
                options: {
                    emitErrors: true
                },
                exclude: /node_modules/,
            }
    
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    }
}