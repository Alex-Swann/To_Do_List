var http = require('http-server');
var Browser = require('zombie');
var expect = require('chai').expect;

before(function(done) {
	server = http.createServer().listen(3000);
	browser = new Browser({site: 'http://localhost:3000'});
	browser.visit('/', done);
});
