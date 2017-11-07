 /*jshint unused:false*/
'use strict';


/**
 * @ngdoc function
 * @name angular14InterviewApp.controller:FilterbarCtrl
 * @description
 * # FilterbarCtrl
 * Controller of the angular14InterviewApp
 */
angular.module('angular14InterviewApp')
  .controller('FilterbarCtrl', ['$scope', 'filterbarService', '$http', function ($scope, filterbarService, $http) {
    $scope.alphabeth = filterbarService.alphabeth;
    $scope.selectedLetterIndex = null;
    $scope.selectLetter = function(index) {
      $scope.selectedLetterIndex = index;
    };

    $scope.quantity = 18;
    var onLoadQuantity = 3;

    $scope.loadMoreMembers = function() {
      $scope.quantity += onLoadQuantity;
    };



   filterbarService.getMembers()
     .then(function(data) {
       $scope.members = data;
     });

    $scope.selectedMembers = [];
    $scope.toggleSelectedMember = function(index) {
		console.log('index = ' + index);
      var isSelected = $scope.selectedMembers.indexOf(index);
      if(isSelected === -1) {return $scope.selectedMembers.push(index);}

      $scope.selectedMembers.splice(isSelected, 1);
      console.log($scope.selectedMembers);
    };
	
	

	 
	 $scope.selectAll = function($event) {
		var oArr1 = $('div[class*="member-avatar"]');
		var oArr2 = $('div[class*="member-avatar-overlay"]');
		var oArr3 = $('div[class*="member-avatar-overlay"] > div');
		var oLabel = $($event.delegateTarget);		
		var action = (oLabel.hasClass('active') === false ? 'add' : 'remove');

		for ( var i = 0; i < oArr1.length; i++) {
			if (action === 'add') {
				$(oArr1[i]).addClass('active-member');
				$(oArr2[i]).addClass('active-member');
				$(oArr3[i]).addClass('active-member-checkbox');
			} else {
				$(oArr1[i]).removeClass('active-member');
				$(oArr2[i]).removeClass('active-member');
				$(oArr3[i]).removeClass('active-member-checkbox');
			}			
		}
	 };
	 


	


  }]);
  
  
 