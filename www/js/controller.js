(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicPopup, $ionicPopover, $ionicModal) {
			$scope.dataToShow = {};
			
			$scope.dataToAdd = {
				
				firstname: ''
			};
			
	
			    $scope.list = [{
			
				    firstname: 'Riya'
			},{
					firstname: 'varsha'
			},{
			
						firstname: 'Garry'
			}]
			
			$scope.removedata = function() {
				$scope.dataToShow = {};
			}
				$scope.showData = function(item) {
					
					$scope.dataToShow = item;
					
				}
				$scope.addToList = function() {
					$scope.list.push({
						firstname: $scope.dataToAdd.firstname
					})
					$scope.dataToAdd.firstname = '';
					console.log($scope.dataToAdd)
				}	
				// delete function this remove the selected table row
   $scope.deleteRow= function (i) {
	$scope.list.splice(i, 1);
	firstname: $scope.dataToAdd.firstname
}
		}

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicPopover', '$ionicModal'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})();