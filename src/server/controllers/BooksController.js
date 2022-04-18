const Controller = require('./controller');
// const BooksModel = require('../models/BooksModel');
// const booksModel = new BooksModel();
class BooksController extends Controller {
    constructor() {
        super();
    }

    async actionBooksListPage(ctx) {
        // throw new Error('自定义错误');
        // const result = await booksModel.getBooksList();
        ctx.body = await ctx.render('books/pages/list', {
            // data: result.data
            data: [{
                id: 1,
                name: '图书1'
            },{
                id: 2,
                name: '图书2'
            }]
        });
    }

    async actionBooksCreatePage(ctx) {
        // throw new Error('自定义错误');
        // const result = await booksModel.getBooksList();
        ctx.body = await ctx.render('books/pages/create', {
            // data: result.data
            data: [{
                id: 1,
                name: '图书1'
            },{
                id: 2,
                name: '图书2'
            }]
        });
    }
}

module.exports = BooksController;