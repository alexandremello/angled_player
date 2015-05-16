angular.module("angledPlayer")
  .controller("playerController", function($scope) {
    $scope.currentTime = 0;
    $scope.audioPlayer = $("#player");
    $scope.progressBar = $(".progress-bar");
    $scope.musicUrl = "trinklied.ogg";
    $scope.currentTime = 0;

    $scope.audioPlayer.on("timeupdate", function() {
      $scope.currentTime = $scope.audioPlayer[0].currentTime;
      var percentage = $scope.currentTime / $scope.audioPlayer[0].duration * 100;
      $scope.progressBar.css("width", percentage + "%");
      $scope.$apply();
    });

    $scope.playOrPause = function() {

    };
  });
