'use strict';

/**
 * @ngdoc directive
 * @name angular14InterviewApp.directive:fiterBar
 * @description
 * # fiterBar
 */
angular.module('angular14InterviewApp')
  .directive('filterBar', function () {
    return {
      templateUrl: 'views/filterbar.html',
      restrict: 'E',
      controller: 'FilterbarCtrl'
    };
  });
 
