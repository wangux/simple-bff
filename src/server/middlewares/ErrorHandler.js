class ErrorHandler {
  static error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
        if (ctx.status === 404) {
          ctx.body = '友好的404页面'
        }
      } catch (error) {
        logger.error(error.message);
        ctx.body = '500请求，正在积极修复'
      }
    })
  }
}

module.exports = ErrorHandler;