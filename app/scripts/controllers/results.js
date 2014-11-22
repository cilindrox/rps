'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
  .controller('ResultsCtrl', function ($scope, playService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    (function() {
      // [0]:P1 wins, [1]:P2 wins, [2]:draw
      var score = playService.findMax(playService.score);
      switch(score) {
      case 0:
        $scope.result = playService.playerOne.name + ' is the winner!';
        break;
      case 1:
        $scope.result = 'Congrats' + playService.playerTwo.name + ', you are the winrar!';
        break;
      default:
        $scope.result = 'It\'s a draw :(';
        break;
      }
    })();

  });
