'use strict';

/**
 * @ngdoc service
 * @name angular14InterviewApp.filterbar
 * @description
 * # filterbar
 * Service in the angular14InterviewApp.
 */
angular.module('angular14InterviewApp')
  .service('filterbarService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.alphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    this.getMembers = function() {
      return $http.get('/data/names.json')
       .then(function(data) {
         console.log('success');
         console.log(data.data);
         return data.data;
       })
       .catch(function(err) {
         console.log(err.message);
       });
    };
  }]);
