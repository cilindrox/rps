'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
  .controller('MainCtrl', function ($scope, playService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // TODO(gfestari): hack, setter should be extracted and called elsewhere.
    // Also, ugly hard-coded route
    $scope.register = function() {
      playService.setNames($scope.playerOne, $scope.playerTwo);
      playService.changeView('/play');
    };
  });
