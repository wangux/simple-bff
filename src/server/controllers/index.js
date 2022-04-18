const Router = require('@koa/router');
const router = new Router();
const IndexController = require('./indexController');
const indexController = new IndexController();

const ApiController = require('./apiController');
const apiController = new ApiController();

const BooksController = require('./BooksController');
const booksController = new BooksController();

function initController(app) {
  /* 页面路由 */
  router.get('/', indexController.actionIndex);
  router.get('/books/list', booksController.actionBooksListPage);
  router.get('/books/create', booksController.actionBooksCreatePage);
  /* 接口路由 */
  router.get('/newapi/getDataList', apiController.actionDataList);
  
  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = initController;