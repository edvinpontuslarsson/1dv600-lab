(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            return new Promise (function(resolve, reject){
            var parser = new xml2js.Parser();
            fs.readFile("books.xml", "utf8", function(error, data) {
                if (error) {
                    return reject (new Error ("Could not read xml-file"));
                };
                
                parser.parseString(data, function(err, result) {
                    if (err) {
                        return reject (new Error ("Could not parse xml-file"));
                    };
                    resolve(result);
                    });
                });
            }); 
        },

        /**
        * The arrObj gets converted to a number,
        * if it is equal to the condition,
        * it gets removed from the array.
        * 
        * @param {*} arrObj - number as string
        * @param {*} cond - the condition to check for
        * @param {*} arr - the array
        * @param {*} index - the array index to remove
        */
        removeRightArrObj: function(arrObj, cond, arr, index) {
            if (parseInt(arrObj) === parseInt(cond)) {
                arr.splice(index, 1);
              };
              // only necessary for the testing
              return arr;
        },

        /**
         * Not finished yet, returns false if the title is too short
         * Should return true if the title is long enough
         */
        titleLongEnough: function(title) {
            if (title.length < 1) {
                return false;
            };
        },

        // Write the entire file from the file system.
        writeXMLFile: function(update) {
                var builder = new xml2js.Builder();
                var xml = builder.buildObject(update);

                fs.writeFileSync("books.xml", xml, "utf8", function(err) {
                    if (err) {
                        return reject (new Error ("Could not write xml-file"));
                    };
                });
            },
        };

    module.exports = LibraryDAO;
}());
