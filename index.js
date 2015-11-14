var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var fileServer = new static.Server('./public', {cache: 10});

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		fileServer.serve(request, response, function (e, res) {
			if (e) {
				fileServer.serveFile('/sitedown.html', 404, {}, request, response);
			}
		});
	}).resume();
}).listen(8080);