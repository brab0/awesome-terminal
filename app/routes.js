(function () {
  'use strict'

  angular.module("AwesomeTerminal")
    .config(["$stateProvider", "$urlRouterProvider",
      function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise('main');

          $stateProvider
            .state('app', {
              url : "/",
              views : {
                'app' : {
                  templateUrl : "template/app.html",
                  controller : "MainCtrl"
                }
              }
            })
            .state('app.main', {
              url : "main",
              views : {
                'main@app' : {
                  templateUrl : "pages/main/view.html",
                  controller : "MainCtrl"
                }
              }
            });
      }]);
})();
