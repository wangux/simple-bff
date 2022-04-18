const { argv } = require('yargs');
console.log('dev', argv);

const mode = argv.mode || "development";
const path = require('path');

const envConfig = require(`./build/webpack.${mode}.js`);

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterPlugin = require('./build/HtmlAfterPlugin');
const CopyPlugin = require("copy-webpack-plugin");


const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.entry.js');
const entries = {};
const htmlPlugins = [];
files.forEach(url => {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test(url)) {
        console.log(RegExp.$1);
        const entryKey = RegExp.$1;
        const [pagesName, template] = entryKey.split('-')
        htmlPlugins.push(
            new HtmlWebpackPlugin({
                filename: `../views/${pagesName}/pages/${template}.html`,
                template: `./src/web/views/${pagesName}/pages/${template}.html`,
                chunks: [entryKey],
                inject: false
            })
        )
        entries[entryKey] = url;
    }
})

const baseConfig = {
    mode,//webpack配置mode为production默认进行treeshaking
    entry: entries,
    output: {
        path: path.join(__dirname, './dist/assets'),
        filename: 'scripts/[name].bundle.js',
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single'
    },
    resolve: {
        alias: {
            "@": path.resolve("./src/web")
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        ...htmlPlugins,
        new HtmlAfterPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.join(__dirname, './src/web/views/layouts/layout.html'),
                to: '../views/layouts/layout.html'
            }, {
                from: path.join(__dirname, './src/web/components'),
                filter: url => {
                    if (/\.(js|css)$/.test(url)) {
                        return false;
                    }
                    return true;
                },
                to: '../components'
            }]
        })
    ]
}

module.exports = merge(baseConfig, envConfig);