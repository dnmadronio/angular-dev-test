'use strict';

angular.module('angular14InterviewApp').directive('topNavbar', function() {
  return {
    restrict: 'E',
    controller: 'NavbarCtrl',
    templateUrl: 'views/top-navbar.html'
  };
});
