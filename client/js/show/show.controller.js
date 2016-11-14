angular.module('show.controller', [])
	.controller('ShowController', function(ShowService,$scope,$routeParams){

		$scope.showsf = [];
		
		ShowService.get({showid:$routeParams.id}, function(response){

			$scope.showsf = [];

			castDetails = {

				showname:response.name,
				showimage:response.image.medium,
				showsummary:response.summary,
				geners:[],
				cast:[]
			}

			$scope.showsf.push(castDetails);

			for(i=0;i<response._embedded.cast.length;i++){

				if(response._embedded.cast[i].person.image != null) {

					$scope.showsf[0].cast.push({oname:response._embedded.cast[i].person.name,cname:response._embedded.cast[i].character.name,image:response._embedded.cast[i].person.image.original});

				} else if(response._embedded.cast[i].character.image != null){

					$scope.showsf[0].cast.push({oname:response._embedded.cast[i].person.name,cname:response._embedded.cast[i].character.name,image:response._embedded.cast[i].character.image.original});

				} else {

					$scope.showsf[0].cast.push({oname:response._embedded.cast[i].person.name,cname:response._embedded.cast[i].character.name,image:'/images/st.png'});
				}
			}
				 

			for(i=0;i<response.genres.length;i++)
			{

				$scope.showsf[0].geners.push(response.genres[i]);
			}

			//alert($scope.showsf[0].geners.length);
			
			


});

}).filter('tag', function(){
  return function(summ){
    	
    	var regularE = /(<([^>]+)>)/ig;
       return summ.replace(regularE , "");

  };
}).directive('castData', function(){

  return { 
    template: '<div ng-repeat="y in showsf">' +
    		  '<p><h3><b><i>Title:</i></b></h3><div class="navbar-nav" >{{y.showname}}</div><br><h3>Genres:</h3><div ng-repeat="x in y.geners">{{x}}</div>' +
    		  '<h3>Image:</h3><div class="more-results-block"><img src={{y.showimage}} alt="st.png"></img></div>' +
    		  '<h3>Description</h3><div>{{y.showsummary | tag}}</div>' +'</br>'+
    		  '<h3>Cast:</h3><br><div ng-repeat="x in y.cast"><img src={{x.image}} width="42" hieght="42"></img>{{x.oname}} as {{x.cname}}</div><br>'+
    		  '</p></div>'
  };

  });
