(function () {
  'use strict'

  let terminal = require('node-cmd');
  let exec = function(cmd){
    return new Promise(
      function(resolve, reject) {
        return terminal.get(cmd,
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
              exec("ls").then(function(res){
                console.log(res);
                e.target.value = res;
                $scope.cmdOut.push(res);
              });
              // $scope.cmd = "";
              e.target.focus = true;
            }
          };
      }
    ]);
})();
