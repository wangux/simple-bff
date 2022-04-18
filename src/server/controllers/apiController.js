const Controller = require("./controller");
const BooksModel = require('../models/BooksModel');
const booksModel = new BooksModel();

class apiController extends Controller {
  constructor() {
    super();
  }
  async actionDataList(ctx) {
    // const res = await booksModel.getBooksList();
    // ctx.body = res.data;
    ctx.body = "图书列表";
  }
}

module.exports = apiController;