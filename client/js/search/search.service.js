angular.module('search.service', [])
	.factory('SearchService', function ($resource) {
		return  $resource('http://localhost:8080/fData?q= :search', {'showquery':  {method:'GET', isArray:true}}, {search:'@id'});

});