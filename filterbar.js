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
  
/* angular.module('angular14InterviewApp')
  .directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
}); */
