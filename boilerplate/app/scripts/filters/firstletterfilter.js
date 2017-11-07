'use strict';

/**
 * @ngdoc filter
 * @name angular14InterviewApp.filter:firstLetterFilter
 * @function
 * @description
 * # firstLetterFilter
 * Filter in the angular14InterviewApp.
 */
angular.module('angular14InterviewApp')
  .filter('firstLetterFilter', function () {
    return function (input, startWithLetter) {
      console.log(input);
      console.log(startWithLetter);
      if(!startWithLetter) {return input;}
      var filtered = [];
      angular.forEach(input, function(item) {
        if(startWithLetter.toLowerCase() === item.nm.charAt(0).toLowerCase()) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  });
