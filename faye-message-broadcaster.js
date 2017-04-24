var http = require('http'),
    Faye = require('faye');

var client = new Faye.Client('http://127.0.0.1:8000/');

var i = 0;
setInterval(function() {
	client.publish('/test', {
	  message: 'Hello world' + i
	});
	console.log('Publishing message ', i);
	i++;
}, 2000);
