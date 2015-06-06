angular.module("angledPlayer")
  .controller("playerController", function($scope) {
    $scope.musicUrl = "trinklied.ogg";
    $scope.currentTime = 0;
  });
