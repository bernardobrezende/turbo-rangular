'use strict';

angular
.module('turboRangular')
.directive('nomeValidador', function($timeout, $http) {
  return {
    require: 'ngModel',
    link: function ($scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.nomeValidador = function(valor) {
        // return $http.get('/temBacon');
        return $timeout(function() {
          if (!valor.match(/bacon/i))
            throw Error;
        }, 2000);
      };
    }
  }
});