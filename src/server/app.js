const Koa = require('koa');
const config = require('./config');
const initController = require('./controllers')
const render = require('koa-swig');
var co = require('co');
const staticServer = require('koa-static');
const compress = require('koa-compress');
const {
  historyApiFallback
} = require('koa2-connect-history-api-fallback');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const errorHandler = require('./middlewares/ErrorHandler');
const log4js = require('log4js');
log4js.configure({
    appenders: {
        globalError: {
            type: "file",
            filename: "./logs/error.log"
        },
        infoError: {
            type: "file",
            filename: "./logs/info.log"
        }
    },
    categories: {
        default: {
            appenders: ["globalError"],
            level: "error"
        },
        info: {
            appenders: ["infoError"],
            level: "info"
        }
    }
});
const logger = log4js.getLogger("globalError");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

const app = new Koa();

app.use(staticServer(config.staticDir));
app.use(compress());
// app.use(createProxyMiddleware('/api', { target: 'http://192.250.110.152:8023/', changeOrigin: true, pathRewrite: {"^/api": ""} }));
app.use(historyApiFallback({
  index: "/",
  whiteList: ['/newapi/getDataList', '/books']
}));
errorHandler.error(app, logger);
initController(app);

app.context.render = co.wrap(render({
  root: config.viewDir,
  cache: config.cache, // disable, set to false
  varControls: ['[[', ']]']
}));

app.listen(config.port, () => {
  console.log(`serve is running at http://localhost:${config.port}`);
});