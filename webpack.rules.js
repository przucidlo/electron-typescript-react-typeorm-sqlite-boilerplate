//
module.exports = rules = [
    {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192, // in bytes
                },
            },
        ],
    },
];
