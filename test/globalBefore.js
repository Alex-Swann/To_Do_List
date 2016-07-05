var http = require('http-server');
var Browser = require('zombie');


before(function(done) {
	this.server = http.createServer().listen(3000);
	this.browser = new Browser({site: 'http://localhost:3000'});
	this.browser.visit('/', done);
});
