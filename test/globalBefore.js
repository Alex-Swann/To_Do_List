var http = require('http-server');
var Browser = require('zombie');


before(function(done) {
	this.server = http.createServer({ root: '../' }).listen(3001);
	this.browser = new Browser({site: 'http://localhost:3001'});
	done();
});
