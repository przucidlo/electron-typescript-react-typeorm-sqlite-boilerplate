//
module.exports = rules = [
    {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.(svg|ico|icns)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    },
    {
        test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
            name: '[path][name].[ext]',
        },
    },
];
