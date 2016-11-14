angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service','show.controller','show.service'])
  .config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/index', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        }) 
        .when('/shows/:id', {
          templateUrl: 'views/show.html',
          controller: 'ShowController',
          resolve : {

          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
