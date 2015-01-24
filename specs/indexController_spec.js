'use strict';

describe('IndexController', function() {
  
  var $scopeSendoTestada = null
  , indexController = null;
  
  beforeEach(module('turboRangular'));
  
  beforeEach(
    inject(function($rootScope, $controller) {
      $scopeSendoTestada = $rootScope.$new();
      indexController = $controller('IndexController', {
        $scope: $scopeSendoTestada
      });
    })
  );
  
  it ('possui cabeçalho', function() {
    expect($scopeSendoTestada.cabecalho).toBe("TurboRangular");
  });
  
  it ('possui rodapé', function() {
    expect($scopeSendoTestada.anoRodape).toBe(new Date().getFullYear());
  });
  
});








