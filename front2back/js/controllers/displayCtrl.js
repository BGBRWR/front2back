angular.module("chicken").controller("displayCtrl", function($scope, $state){
  $scope.go = function(){
    $state.go('me');
  };
});
