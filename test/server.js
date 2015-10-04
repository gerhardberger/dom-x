const server = require('http').createServer()
const fs = require('fs');
const browserify = require('browserify')

server.listen(8000, function () {
  console.log('Server running at localhost:8000')
})

server.on('request', function (req, res) {
  if (req.url === '/') {
		fs.createReadStream('./index.html').pipe(res);
	}

  if (req.url === '/bundle.js') {
		browserify('./main.js').bundle().pipe(res);
	}
})
