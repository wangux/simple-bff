const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'HtmlAfterPlugin';

const assetHelp = (data) => {
    let js = [];
    for(let item of data.js) {
        js.push(`<script src="${item}"></script>`)
    }
    return {
        js
    }
}

class HtmlAfterPlugin {
    constructor() {
        this.jsArr = [];
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            console.log('webpack 构建正在启动！');
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
                pluginName, // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    const { js } = assetHelp(data.assets)
                    this.jsArr = js;
                    cb(null, data)
                }
            )
            // Static Plugin interface |compilation |HOOK NAME | register listener 
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName, // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    let _html = data.html;
                    _html = _html.replace("<!-- injectjs -->", this.jsArr.join(''));
                    data.html = _html
                    cb(null, data)
                }
            )
        })
    }
}

module.exports = HtmlAfterPlugin;