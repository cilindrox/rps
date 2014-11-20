'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rockPaperScissorsApp
 */
angular.module('rockPaperScissorsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
