const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',       
        page1: './src/about.js',        
        page2: './src/contact-me.js',        
        page3: './src/404.js'         
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            inject: 'body',
            chunks: ['about'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/contact-me.html',
            filename: 'contact-me.html',
            inject: 'body',
            chunks: ['contact-me'], 
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html', 
            filename: '404.html',
            inject: 'body',
            chunks: ['404'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
