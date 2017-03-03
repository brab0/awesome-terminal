(function () {
  'use strinct'

  angular.module('AwesomeTerminal', [
    "ui.router",
    "ngMaterial",
    "ngAnimate"
  ])
  .constant("settings", {
    api: "http://localhost:3000"
  });
})();
