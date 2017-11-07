'use strict';

/**
 * @ngdoc directive
 * @name angular14InterviewApp.directive:member
 * @description
 * # member
 */
angular.module('angular14InterviewApp')
  .directive('member', function () {
    return {
      templateUrl: 'views/member.html',
      restrict: 'E',
      controller: 'FilterbarCtrl'
    };
  });
