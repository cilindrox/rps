'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
  .controller('PlayCtrl', function ($scope, playService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.players = playService.getPlayers();
    $scope.currentPlayer = $scope.players[0];

    $scope.ddSelectSelected = {
      text: 'Choose your weapon'
    };

    $scope.ddSelectOptions = [];

    // Loads the choice-selection dropdown menu for player moves.
    (function loadChoices() {
      // TODO(gfestari): Load this variable from a JSON object,
      // either from the DB or a RESTful API.
      var choices = [
        'Scissors',
        'Paper',
        'Rock'
      ];

      for (var i = choices.length - 1; i >= 0; i--) {
        $scope.ddSelectOptions.push({
            text: choices[i]
        });
      }
    })();

    $scope.nextRound = function() {
      playService.nextRound();
    };

    $scope.addChoice = function(selected) {
      console.log($scope.currentPlayer.name, 'chose', selected.text);
      $scope.currentPlayer = playService.nextPlayer($scope.currentPlayer);
      playService.compare(selected.text.toLowerCase(), 'rock');
      $scope.nextRound();
    };

  });
