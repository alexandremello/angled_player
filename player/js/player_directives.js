angular.module('directives', [])
  .directive('audioPlayer', function() {
    return {
      restrict: 'E',
      scope: {
        musicUrl: '=',
        currentTime: '='
      },
      template: '<audio controls preload="metadata" ng-src={{musicUrl}}></audio>',
      link: function(scope, element, attrs) {
        audioPlayer = element.children();
        audioPlayer.on("timeupdate", function() {
          scope.currentTime = audioPlayer[0].currentTime;
          scope.$apply();
        });

        scope.$watch(
          function() { return scope.musicUrl; },
          function() { console.log(scope.musicUrl); }
        );
      }
    }
  });
