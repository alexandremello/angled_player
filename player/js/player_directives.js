angular.module('directives', [])
.directive('playlist', function() {
  return {
    restrict: 'E',
    scope: {
      musicList: '=',
      selectedMusic: '='
    },
    templateUrl: 'player/templates/playlist.tpl.html',
    link: function(scope, element, attrs) {
      scope.setMusic = function(music) {
        scope.selectedMusic = music;
      };
      scope.selected = function(music) {
        return music === scope.selectedMusic;
      };
    }
  }
})

.directive('audioPlayer', function() {
  return {
    restrict: 'E',
    scope: {
      musicUrl: '=',
      currentTime: '=',
      duration: '=',
      playList: '='
    },
    templateUrl: 'player/templates/player.tpl.html',
    link: function(scope, element, attrs) {
      scope.audioPlayer = element.children();
      scope.playing = false;
      scope.paused = true;
      scope.canPlay = false;
      scope.audioPlayer.on("timeupdate", function() {
        scope.currentTime = scope.audioPlayer[0].currentTime;
        scope.$apply();
      });
      scope.audioPlayer.on("durationchange", function() {
        scope.duration = scope.audioPlayer[0].duration;
        scope.$apply();
      });
      scope.audioPlayer.on("canplay", function() {
        scope.canPlay = true;
        scope.$apply();
      });
      scope.audioPlayer.on("playing", function() {
        scope.playing = true;
        scope.paused = false;
        scope.$apply();
      });
      scope.audioPlayer.on("pause", function() {
        scope.playing = false;
        scope.paused = true;
        scope.$apply();
      });
      scope.playPause = function() {
        if (scope.audioPlayer[0].paused) {
          scope.audioPlayer[0].play();
        } else {
          scope.audioPlayer[0].pause();
        }
      };

      scope.$watch(
        function() { return scope.musicUrl; },
        function() {
          scope.canPlay = false;
        }
      );
    }
  }
});
