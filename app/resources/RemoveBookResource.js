(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  
  module.exports = function (id, callback) {
    var filePromise = LibraryDAO.readXMLFile();
    
    filePromise.then(function(bookInfo) {
      for (var i = 0; bookInfo.catalog.book.length > i; i += 1) {
        LibraryDAO.removeRightArrObj(bookInfo.catalog.book[i].$.id, id, bookInfo.catalog.book, i);
      };
      LibraryDAO.writeXMLFile(bookInfo);
    });

    callback();
  };
}());
