//var webpack = require('webpack');

module.exports = {
    entry: ["./index.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
    /*
    plugins: [
        new webpack.OldWatchingPlugin()
    ]
    */
};
