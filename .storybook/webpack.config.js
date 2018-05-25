const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.yml/,
                loaders: [ 'yml-loader' ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
};
