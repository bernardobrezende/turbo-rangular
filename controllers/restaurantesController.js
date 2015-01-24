'use strict';

angular
.module('turboRangular')
.controller('RestaurantesController', function($scope, $timeout) {
  
  $scope.restaurantes = [];
  
  var resetarFormulario = function() {
    delete $scope.restaurante;
    $scope.formCadastroRestaurante.$setPristine();
  };
  
  $scope.remover = function(restaurante) {
    var indice = $scope.restaurantes.indexOf(restaurante);
    
    if (indice > -1)
      $scope.restaurantes.splice(indice, 1);
  };
  
  $scope.cadastrar = function(novo) {
    
    $scope.restaurantes.push(novo);
    
    resetarFormulario();
    
    /*$timeout(function() {
      alert("Cadastrou!");
      $scope.cadastrou = true;
    }, 1000);
    */
    
    /*
    setTimeout(function() {
      alert("Cadastrou!");
      $scope.$apply(function() {
        $scope.cadastrou = true;
      });
    }, 1000);
    */
  };
  
  // @Path("/cadastrar")
  // @Post
  // public void cadastrar(RestauranteTO restaurante) { }
});