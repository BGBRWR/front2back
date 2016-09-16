angular.module("chicken", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/home.html",
      controller: "mainCtrl"
    })
    .state("display", {
      url: "/display",
      templateUrl: "../views/display.html",
      controller: "displayCtrl"
    })
    .state("me", {
      url: "/me",
      templateUrl: "../views/me.html",
      controller: "meCtrl"
    })


  $urlRouterProvider.otherwise("/");
});
