(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  var bookObjects = require('../dao/bookObjects');

  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    var bookPromise = LibraryDAO.readXMLFile();

    bookPromise.then(function (bookInfo) {
      var books = bookObjects(bookInfo);
      callback(books);
    });
  };
}());
