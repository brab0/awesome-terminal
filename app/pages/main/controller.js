(function () {
  'use strict'

  angular.module("AwesomeTerminal")
    .controller("MainCtrl", [
      "$scope",
      "settings",
      function($scope, settings){
          $scope.cmdOut = [];
          $scope.cmd = "";

          $scope.send = function(e){
            if (e.keyCode == 13) {
              $scope.cmdOut.push(angular.copy($scope.cmd));
              $scope.cmd = "";
              e.target.focus = true;
            }
          };
      }
    ]);
})();
