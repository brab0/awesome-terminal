(function () {
  'use strinct'

  angular.module("AwesomeTerminal")
    .controller("MainCtrl", [
      "$scope",
      "settings",
      function($scope, settings){
        $scope.greets = "Hello, Mr. brab0!";
      }]);
})();
