'use strict';

angular
.module('turboRangular')
.controller('IndexController', function($scope) {
  $scope.cabecalho = "Hello World";
  $scope.itensMenu = [
    { texto: 'Restaurantes', href: "/restaurantes", ativo: true },
    { texto: 'Rodar testes', ativo: false }
  ];
});

/*
angular
.module('turboRangular')
.controller('IndexController', [
  '$scope',
  function($scope) {
  }
]);
*/

// public class IndexController
// {
//    private String cabecalho = "Hello World";
//    public String getCabecalho() { return cabecalho; }
// }