var expr = require('express');
var application = expr();

application.use(expr.static('./client'));

require('./api/routes')(application);

application.get('/', function (req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
});

// application.get('/shows/:id', function (req, res,next) {

// 	console.log('about to send show.html');
// 	res.sendFile('/client/views/show.html', { root: __dirname });
// 	next();

// });

application.get('/index', function(req,res){

	console.log("will show index.html");

});

application.listen(8080, function () {
	console.log('Server is running:8080.')
});	