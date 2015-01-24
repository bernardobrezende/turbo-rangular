'use strict';

angular
.module('turboRangular')
.controller('IndexController', function($scope) {
  $scope.cabecalho = "TurboRangular";
  $scope.itensMenu = [
    { texto: 'Restaurantes', href: "#/restaurantes", ativo: true },
    { texto: 'Rodar testes', href: "/specs.html", ativo: true }
  ];
  $scope.anoRodape = new Date().getFullYear();
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