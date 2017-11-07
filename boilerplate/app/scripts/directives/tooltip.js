 /*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name angular14InterviewApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('angular14InterviewApp')
  .directive('tooltip', function () {
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
  });
