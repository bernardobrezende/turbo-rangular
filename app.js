'use strict';

angular.module('turboRangular', [ 'ngRoute' ])

.config(function($routeProvider) {
  $routeProvider
    .when('/restaurantes', {
      templateUrl: 'templates/restaurantes.html',
      controller: 'RestaurantesController'
    })
});