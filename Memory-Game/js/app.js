'use strict';

var memoryGameApp = angular.module('memoryGameApp', []);


memoryGameApp.factory('game', function() {
  var tileNames = ['BOLA-8', 'YUSLLEY', 'GUILHERME', 'DINI', 'PARTIU', 'QUERO-AGUA',
    'SE-LIGA', 'PADRE-DO-BALAO'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});

memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
   
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile().flipped}">' +
                  '<img class="front" ng-src="img/back.png">' +
                  '<img class="back" ng-src="img/{{tile().title}}.png">' +
                '</div>' +
              '</div>',
    scope: {
      tile: 'accessor'
    }
  }
});
