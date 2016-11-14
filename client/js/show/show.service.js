angular.module('show.service', [])
	.factory('ShowService', function ($resource) {
		return  $resource('http://localhost:8080/Show?q=:showid', {showid:'@id'});
});