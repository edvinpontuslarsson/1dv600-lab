(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, data, callback) {
        var filePromise = LibraryDAO.readXMLFile();

        filePromise.then(function(bookInfo) {          
           for (var i = 0; bookInfo.catalog.book.length > i; i += 1) {
                if (bookInfo.catalog.book[i].$.id === id) {
                    bookInfo.catalog.book[i].author = data.author;
                    bookInfo.catalog.book[i].title = data.title;
                    bookInfo.catalog.book[i].genre = data.genre;
                    bookInfo.catalog.book[i].price = data.price;
                    bookInfo.catalog.book[i].publishDate = data.publishDate;
                    bookInfo.catalog.book[i].description = data.description;
                    bookInfo.catalog.book[i].publish_date = data.publish_date;
                };
           };

            LibraryDAO.writeXMLFile(bookInfo);
        });

        callback();
    };

}());
