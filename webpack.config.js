const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist/scripts',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/jquery/immersiveReader.js', to: 'jquery/immersiveReader.js' }
            ]
        }),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
            test: /.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}