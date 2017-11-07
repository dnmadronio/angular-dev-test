'use strict';

/**
 * @ngdoc directive
 * @name angular14InterviewApp.directive:searchNavbar
 * @description
 * # searchNavbar
 */
angular.module('angular14InterviewApp')
  .directive('searchNavbar', function () {
    return {
      templateUrl: 'views/search-navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
