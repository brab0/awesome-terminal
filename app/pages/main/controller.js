(function () {
  'use strict'

  let terminal = require('node-cmd');
  
  let exec = function(cmd){
    return new Promise(
      function(resolve, reject) {
        terminal.get(cmd,
          function(res){
            resolve(res);
          });
      });
  }

  angular.module("AwesomeTerminal")
    .controller("MainCtrl", [
      "$scope",
      "settings",
      function($scope, settings){
          $scope.cmdOut = [];
          $scope.cmd = "";

          $scope.send = function(e){
            if (e.keyCode == 13) {

              exec($scope.cmd).then(function(data){
                $scope.$apply(function () {
                  $scope.cmdOut.push(data);
                });
              });

              $scope.cmd = "";
              e.target.focus = true;
            }
          };
      }
    ]);
})();
