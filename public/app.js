(function() {
  'use strict';

  angular.module('curso', [
    'ui.router',
    'main',
    'cadastro',
    'login',
    'home'
  ])
  .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })

      .state('cadastro', {
        url: '/cadastro',
        templateUrl: 'cadastro/cadastro.html',
        controller: 'CadastroController',
        controllerAs: 'cadastro'
      });

    $urlRouterProvider.otherwise('/');
  }


})();
