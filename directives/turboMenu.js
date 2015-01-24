'use strict';

angular
.module('turboRangular')
.directive('turboMenu', [ function() {
  return {
    scope: {
      itensMenu: '='
    },
    // A => <div turbo-menu></div>
    // E => <turbo-menu></turbo-menu>
    // C => <div class="turbo-menu"></div>
    restrict: 'AEC',
    templateUrl: 'templates/turboMenu.html',
    /*controller: ctrl*/
  };
}]);

// turboMenu => <turbo-menu>

/*
  var ctrl = [ '$scope', function($scope) {
    $scope.itensMenu = [
      { texto: 'Restaurantes', href: "/restaurantes" },
      { texto: 'Rodar testes' }
    ];
  }];
  */