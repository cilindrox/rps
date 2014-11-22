'use strict';

/**
 * @ngdoc service
 * @name rockPaperScissorsApp.playService
 * @description
 * # playService
 * Service in the rockPaperScissorsApp.
 */
angular.module('rockPaperScissorsApp')
  .service('playService', function ($location) {

    this.changeView = function(view) {
      $location.path(view);
    };

    // FIXME(gfestari): This is horrible and duplicated and should be extracted
    // into a `Player` class.
    //
    // This should work as:
    //
    // this.players = [];
    // this.players.push(new Player(PlayerOneName));
    //
    this.playerOne = { name: '' };
    this.playerTwo = { name: '' };

    this.setNames = function(firstPlayer, secondPlayer) {
      console.log('creating', firstPlayer, 'vs.', secondPlayer);
      this.playerOne.name = firstPlayer;
      this.playerTwo.name = secondPlayer;
    };

    this.getPlayers = function() {
      return [ this.playerTwo, this.playerOne ];
    };

    var beats = {
      'rock': 'paper',
      'paper': 'scissors',
      'scissors': 'rock',
    };

    this.score = [ 0, 0, 0 ]; // [0]:P1 wins, [1]:P2 wins, [2]:draw

    /// RPS logic helpers
    this.compare = function(move1, move2) {
      if (move1 === move2 ) {
        console.log('draw');
        this.score[2] += 1;
      } else if (move1 === beats[move2]) {
        console.log('Player 1 wins');
        this.score[0] += 1;
      } else {
        console.log('Player 2 wins');
        this.score[1] += 1;
      }
    };

    // Just following John Resig's advice here...
    // @see: http://ejohn.org/blog/fast-javascript-maxmin/
    this.findMax = function(arr) {
      return arr.indexOf(Math.max.apply(Math, arr));
    };

    this.nextPlayer = function(playerName) {
      var players = this.getPlayers();
      var nextPlayer = players[0];
      var index = players.indexOf(playerName);

      if (index >= 0 && index < players.length - 1) {
        nextPlayer = players[index + 1];
      }

      console.log(nextPlayer.name + ' is next up');

      return nextPlayer;
    };

    this.round = 1;

    this.nextRound = function() {
      if (this.round < 3) {
        this.round += 1;
        console.log('Round', this.round, '\nFight!');
      } else { // reset and show the results page
        this.round = 1;
        this.changeView('/results');
      }
    };

    // this.results = {};

    // this.saveResults() {

    // }

  });
