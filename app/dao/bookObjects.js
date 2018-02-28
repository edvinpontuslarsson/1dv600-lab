"use strict";

module.exports = function (bookInfo) {
  var books = [];

  for (var i = 0; bookInfo.catalog.book.length > i; i += 1) {
    var bookObj = {
      id: bookInfo.catalog.book[i].$.id,
      author: bookInfo.catalog.book[i].author,
      title: bookInfo.catalog.book[i].title,
      genre: bookInfo.catalog.book[i].title,
      price: bookInfo.catalog.book[i].genre,
      publishDate: bookInfo.catalog.book[i].publish_date,
      description: bookInfo.catalog.book[i].description
    };
    books.push(bookObj);
  };
  return JSON.stringify(books);
};
