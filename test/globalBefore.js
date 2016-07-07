(function(){
  'use strict';
})();

var http = require('http-server');
var Browser = require('zombie');
var expect = require('chai').expect;
var server = http.createServer();

beforeEach(function(done) {
	// server = http.createServer().listen(3000);
  server.listen(3000);
	browser = new Browser({site: 'http://localhost:3000'});
	browser.visit('/', done);
});

afterEach(function() {
  server.close();
});
