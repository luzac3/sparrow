const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

let entries = {};
glob
    .sync("./common/ts/**/*.ts", {
        ignore: ["./common/ts/**/*.d.ts","./common/ts/modules/**/*"]
    }).
    map(function (file) {
        const key = file.replace("./common/ts/", "").replace(/\.ts$/, "");
        entries[key] = file;
    });

module.exports = (env, argv) => {
    const IS_DEVELOPMENT = argv.mode === "development";

    return {
        devtool: IS_DEVELOPMENT ? "source-map" : "none",

        devServer: {
            index: "Index.html",
            port: 9223,
        },

        entry: entries,

        output: {
            path: path.join(__dirname, "./common/js"),
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    type: "javascript/auto"
                },
            ],
        },
        resolve: {
            extensions: [
                '.ts', '.js',
            ],
        },
    }
};
