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
	// using filter for currency
		$scope.price = 556;
		
		
	//using user defined filter (show value divided by 2)
		$scope.student1list =[
			{name:'Raman',value:1},
			{name:'Gourav',value:2},
			{name:'Rohit',value:3},
			{name:'Nitin',value:4},
			{name:'Dilpreet',value:5},
			{name:'Garry',value:6},
			{name:'Varsha',value:7},
			{name:'Sourav',value:8},
		]
	//using filter for search letter
		$scope.names1 = [
			'Ram',
			'Rohit',
			'Rahul',
			'Garry',
			'Gourav',
			'Pooja',
			'Riya',
			'Moni',
			'Priyanka',
		]
			
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