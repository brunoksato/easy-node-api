(function() {
  'use strict';

  angular.module('main', [])
    .controller('MainController', MainController);

    function MainController($state){

      this.cadastro = function(){
        $state.go('cadastro');
      };
      
      this.login = function(){
        $state.go('login');
      };

    }


})();
