const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

let entries = {};
glob
    .sync("./typescripts/**/*.ts", {
        ignore: ["./typescripts/**/*.d.ts","./typescripts/module/**/*"]
    }).
    map(function (file) {
        const key = file.replace("./typescripts/", "").replace(/\.ts$/, "");
        entries[key] = file;
    });

module.exports = (env, argv) => {
    const IS_DEVELOPMENT = argv.mode === "development";

    const configs  = {
        //devtool: IS_DEVELOPMENT ? "source-map" : "none",

        devServer: {
            index: "Index.html",
            port: 9223,
        },

        entry: entries,

        output: {
            path: path.join(__dirname, "./scripts"),
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

    if (IS_DEVELOPMENT) {
      // development であれば、devtool を追加
      configs.devtool = 'source-map';
    }

    return configs;
};
