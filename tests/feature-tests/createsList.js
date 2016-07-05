// process.env.NODE_ENV = 'test';

var Browser = require('zombie');
var expect  = require("chai").expect;
var request = require("request");
var http = require("http");

require('../globalBefore');

describe('User visits signup page', function() {

  before(function (done) {
    this.browser.visit('/', done);
  });

  it('should be successful', function() {
    this.browser.assert.success();
  });


});
