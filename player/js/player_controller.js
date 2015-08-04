angular.module("angledPlayer")
.controller("playerController", function($scope) {
  $scope.duration = 0;
  $scope.musicUrl = "";
  $scope.currentTime = 0;
  $scope.musicList = ["trinklied.ogg", "bad_moon_rising.ogg"];

  $scope.setMusic = function(music) {
    $scope.musicUrl = music;
  };
});
