var expect    = require("chai").expect;
var LibraryDao = require("../app/dao/LibraryDAO");

describe("removeRightArrObj", function () {

    describe("If the arrObj is equal to the condition, the arrObj should get removed from the array. Calling the function with these parameters should return unchanged array since the condition is not fulfilled", function () {

        it('return [1, 2]', function () {
            var arr = [1, 2];
            var arrObj = arr[1];
            var cond = 1;
            var index = 1;

            var result = LibraryDao.removeRightArrObj(
                arrObj, cond, arr, index
            );
            expect(result).to.deep.equal([1, 2]);
        });
    });

    describe("Calling the function with these parameters should remove desired array object and return updated array", function () {

        it('return [1]', function () {
            var arr = [1, 2];
            var arrObj = arr[1];
            var cond = 2;
            var index = 1;

            var result = LibraryDao.removeRightArrObj(
                arrObj, cond, arr, index
            );
            expect(result).to.deep.equal([1]);
        });
    });
});

/*
describe("titleLongEnough", function () {

    describe("Return boolean showing if the title is long enough", function () {

        it('return true', function () {
            var title = "This title should be long enough."

            var result = LibraryDao.titleLongEnough(title);

            expect(result).to.deep.equal(true);
        });
    });

});
*/