const Controller = require("./controller");

class indexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx) {
    // throw new Error('自定义错误');
    ctx.body = await ctx.render('index');
  }
}

module.exports = indexController;