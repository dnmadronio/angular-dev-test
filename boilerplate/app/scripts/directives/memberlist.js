'use strict';

/**
 * @ngdoc directive
 * @name angular14InterviewApp.directive:memberList
 * @description
 * # memberList
 */
angular.module('angular14InterviewApp')
  .directive('memberList', function () {
    return {
      templateUrl: 'views/member-list.html',
      restrict: 'E',
      controller: 'FilterbarCtrl'
    };
  });
