const SafeRequest = require('../utils/safeRequest');

class BooksModel {
  getBooksList() {
    return SafeRequest.fetch('http://localhost/basic/web/index.php?r=books');
  }
  findBook(id) {
    //
  }
}

module.exports = BooksModel;