// process.env.NODE_ENV = 'test';
var http = require("http");
var Browser = require('zombie');
var app = require('../../app.js');
var expect  = require("chai").expect;

require('../globalBefore');

describe('User visits signup page', function() {

  before(function (done) {
    this.browser.visit('/', done);
  });

  it('should be successful', function() {
    this.browser.assert.success();
  });


});
