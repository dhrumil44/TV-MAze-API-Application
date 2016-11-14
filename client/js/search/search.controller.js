angular.module('search.controller', [])
	.controller('SearchController', function (SearchService,$scope,$location) {
		
		$scope.showsf = [];

		 $scope.getDetails= function(id){
		 	console.log(id);
		 	$location.url("/shows/"+id);
  			
		  }

		$scope.fetchData = function() {
			
			SearchService.query({search:$scope.showquery}, function(response){

				$scope.showsf = [];
		
					for(var i=0; i<response.length; i++) {

						if(response[i].show.image != null) {

							$scope.showsf.push({

								showid:	response[i].show.id,
								showname : response[i].show.name,
								showsummary : response[i].show.summary,
								showimage : response[i].show.image.medium

							});

						} else {

							$scope.showsf.push({

								showid:	response[i].show.id,
								showname : response[i].show.name,
								showsummary : response[i].show.summary,
								showimage : '/views/st.png'

							});

						}

						

					}

			});

		};
}).filter('tag', function(){
  return function(summ){
    	
    	var regularE = /(<([^>]+)>)/ig;
       return summ.replace(regularE , "");

  };
}).directive('showData', function(){

  return { 
    template: '<div ng-repeat="y in showsf">' +
    		  '<p><h3><b><i>Title:</i></b></h3><div class="navbar-nav" >{{y.showname}}</div><br>' +
    		  '<h3>Image:</h3><div class="more-results-block"><img src={{y.showimage}}></img></div>' +
    		  '<h3>Description</h3><div>{{y.showsummary | tag}}</div>' +'</br>'+
    		  '<input type="button" ng-click="getDetails(y.showid)" value="Detais"></input>'+
    		  '</p></div>'
  };

 
});