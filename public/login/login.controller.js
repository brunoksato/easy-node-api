(function() {
  'use strict';

  angular.module('login', [])
    .controller('LoginController', LoginController);

    function LoginController($state, $http){

      var vm = this;
      vm.user = {};

      vm.logar = function(model){
        $http.get('http://localhost:9000/login/' + model.email + '/' + model.senha).success(function(result){
          if(result.length > 0)
            $state.go('home');
          else{
            alert('Usuario ou senha incorreta!');
          }
        });
      }

    }


})();
