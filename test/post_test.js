//test/post_test.js

var expect = require('chai').expect;
var Post = require('../lib/post');

describe('Post object tests', function() {
    var post;

    beforeEach(function() {
        post = new Post('A test post');
    });

    describe('constructor', function() {

        it('post should be truthy (exists)', function() {
            expect(post).to.be.ok;

        });
    });

});
