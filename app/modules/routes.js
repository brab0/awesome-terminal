(function () {
  'use strict'

  angular.module("AwesomeTerminal")
    .config(["$stateProvider",
      function($stateProvider){
          $stateProvider
            .state('app', {
              url : "",
              views : {
                'app' : {
                  templateUrl : "template/app.html",
                  controller : "MainCtrl"
                }
              }
            });
      }]);
})();
