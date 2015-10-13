(function() {
  'use strict';

  angular.module('cadastro', [])
    .controller('CadastroController', CadastroController);

    function CadastroController($http, $state){

      var vm = this;
      vm.professorModel = {};
      vm.alunoModel = {};
      vm.professorShow = false;
      vm.alunoShow = false;

      vm.escolhaTipo = function(tipo){
        if(tipo === 'professor'){
          vm.professorShow = true;
          vm.alunoShow = false;
        }
        else{
          vm.professorShow = false;
          vm.alunoShow = true;
        }
      }

      vm.salvarProfessor = function(model){
        $http.post('http://localhost:9000/professor', model).success(function(){
          $state.go('login');
        });
      }

      vm.salvarAluno = function(model){
        $http.post('http://localhost:9000/aluno', model).success(function(){
          $state.go('login');
        });
      }


    }


})();
