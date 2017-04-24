var http = require('http'),
    Faye = require('faye');
var client = new Faye.Client('http://127.0.0.1:8000/');

client.subscribe('/test', function(message) {
  console.log('Got a message', message);
});
