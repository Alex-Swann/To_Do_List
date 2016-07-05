// process.env.NODE_ENV = 'test';
var http = require("http");
var Browser = require('zombie');
// var expect  = require("chai").expect;

require('../globalBefore');

describe('User visits signup page', function() {

  it('should be successful', function() {
    this.browser.assert.success();
  });


});
