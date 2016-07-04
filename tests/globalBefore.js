var http = require("http");
var app =  require('../app');
var Browser = require('zombie');

before(function(done) {
	this.server = http.createServer(app).listen(3000);
	this.browser = new Browser({site: 'http://localhost:3000'});
	done();
});
