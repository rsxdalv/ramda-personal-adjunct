const webpack = require('webpack'); //to access built-in plugins
const path = require("path");
const fs = require("fs");

var node_modules = fs.readdirSync('./node_modules')
    .filter(function (x) { return x !== '.bin' })
    .reduce((p, c) => ({ ...p, [c]: `commonjs ${c}` }), {});

module.exports = {
    entry: {
        "index": "./index.ts",
    },
    target: "node",
    node: {
        // __filename: false,
        __dirname: false
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: 'commonjs'
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     optimizeMinimise: true,
        //     output: {
        //         comments: false
        //     }
        // })
        new webpack.WatchIgnorePlugin([
            /\.js$/,
            /\.d\.ts$/
        ])
    ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
            test: /^(?!.*\.test\.tsx?$).*\.ts$/,
            // test: /\.tsx?$/,
            // test: x =>
            //     /\.tsx?$/.test(x) ?
            //         /\.test\.tsx?$/.test(x) ? false :
            //             true : true,
            loader: "awesome-typescript-loader"
        }]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    externals: node_modules,
};