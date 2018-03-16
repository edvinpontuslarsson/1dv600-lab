
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app"); 

describe("List Books", function () {

    describe("GET /api/books", function () {

        it("Get status code 200 (OK) since the url is correct", function (done) {

                request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect(200, done)          
        });
    });

    describe("GET /api/bookz", function () {

        it("Get status code 404 (Not found) since the url is incorrect", function (done) {

                request(app)
                .get('/api/bookz')
                .set('Accept', 'application/json')
                .expect(404, done)          
        });
    });
});
