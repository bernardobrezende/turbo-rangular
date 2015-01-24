'use strict';

describe('RestaurantesController', function() {
  
  var $scopeSendoTestada = null
  , restaurantesController = null;
  
  beforeEach(module('turboRangular'));
  
  beforeEach(
    inject(function($rootScope, $controller) {
      $scopeSendoTestada = $rootScope.$new();
      $scopeSendoTestada.formCadastroRestaurante = {};
      // também poderíamos ter feito com jasmine:
      // spyOn($scopeSendoTestada.formCadastroRestaurante, '$setPristine').andReturn(function() { });
      $scopeSendoTestada.formCadastroRestaurante.$setPristine = function() { };
      restaurantesController = $controller('RestaurantesController', {
        $scope: $scopeSendoTestada
      });
    })
  );
  
  describe('cadastrar()', function() {
    it('deve cadastrar novo restaurante', function() {
      
      var novo = {
        nome: 'Maradona Grill',
        latitude: 123,
        longitude: -123
      };
      
      $scopeSendoTestada.cadastrar(novo);
      
      expect($scopeSendoTestada.restaurantes.length).toBe(1);
      expect($scopeSendoTestada.restaurantes[0]).toBe(novo);
    });
  });
  
  describe('remover()', function() {
    it('deve remover restaurante que está no $scope', function() {
      var novo = {
        nome: 'Maradona Grill',
        latitude: 123,
        longitude: -123
      };
      
      $scopeSendoTestada.cadastrar(novo);
      $scopeSendoTestada.remover(novo);
      
      expect($scopeSendoTestada.restaurantes.length).toBe(0);
      
    });
    
    it('não deve remover restaurante que está fora do $scope', function() {
      var novo = {
        nome: 'Maradona Grill',
        latitude: 123,
        longitude: -123
      };
      
      $scopeSendoTestada.remover(novo);
      
      expect($scopeSendoTestada.restaurantes.length).toBe(0);
    });
  });
});