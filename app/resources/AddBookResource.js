(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    // var util = require('util');


    module.exports = function (data, callback) {
        var filePromise = LibraryDAO.readXMLFile();
    
        filePromise.then(function(bookInfo) {
            // console.log(util.inspect(bookInfo, false, null));
            var index = bookInfo.catalog.book.length -1;
            var tempId = bookInfo.catalog.book[index].$.id;
            var id = {
                id: tempId + 1
            }; 
            data.$ = id;

            bookInfo.catalog.book.push(data);

            LibraryDAO.writeXMLFile(bookInfo);
        });

        callback();
    };

}());
