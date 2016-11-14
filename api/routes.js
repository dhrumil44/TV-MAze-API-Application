var configuration = require('../config.json');
var superagent = require('superagent');

module.exports = function(application) {

		console.log("registering service");
		application.get('/fData', function(req,res){

			superagent
			.get('http://api.tvmaze.com/search/shows')
			.query({q: req.query.q})
			.end(function(err, response){

				if (err) {
					return res.send(err);
				}

				else
				{

    			res.json(response.body);
    			}
			});

		});

			application.get('/Show', function(req,res){

			//console.log("routes"+req.query.q);
			superagent
			.get('http://api.tvmaze.com/shows/'+ req.query.q)
			.query({embed : "cast"})
			.end(function(err, response){

				if (err) {
					console.log(err);
					return res.send(err);
				}

				else
				{
					console.log(response.body);
    			res.json(response.body);
    			}
			});
			


		});
};



