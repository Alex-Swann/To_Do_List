(function(){
  'use strict';
})();

var http = require('http-server');

var PORT=3000;

console.log(require.main.filename);

var server = http.createServer();


server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
