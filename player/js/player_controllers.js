angular.module('controllers', [])
.controller('playerController', ['$scope', '$q',
  function($scope, $q) {
    $scope.duration = 0;
    $scope.musicUrl = '';
    $scope.currentTime = 0;
    $scope.musics = ['trinklied.ogg', 'bad_moon_rising.ogg'];

    var dbox = require('dbox');
    var app = dbox.app({ 'app_key': '', 'app_secret': '' });
  }
]);
