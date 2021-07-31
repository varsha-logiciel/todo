(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicPopup) {
				$scope.dataList = [
				{
					Id:'1',
					firstName: 'Mayank',
					dob: '12-12-1990',
					lastName: 'Kumar',
					salary: '250000',
					age: '31',
				},
				{
					Id:'2',
					firstName: 'Tajinder',
					dob: '12-12-1993',
					lastName: 'Singh',
					salary: '2500000',
					age: '28',
				},
				{
					Id:'3',
					firstName: 'Varsha',
					dob: '12-12-1995',
					lastName: 'Panday',
					salary: '2500',
					age: '20',
				},
				{
					Id:'4',
					firstName: 'Pawan',
					dob: '07-01-1995',
					lastName: 'Arora',
					salary: '550000',
					age: '25',
				},
				{
					Id:'5',
					firstName: 'Anuj',
					dob: '12-11-1997',
					lastName: 'Singh',
					salary: '2500000',
					age: '29',
				},
                
			]
			 
			$scope.myFunction = function() {
				var popup = document.ShowDataInPopup("myPopup");
				popup.dataList.toggle("show");
			  }
			  $scope.showPopup = function() {
				$scope.dataToShow = {$ionicPopup};
			  
				// An elaborate, custom popup
				$ionicPopup .showPopup = $ionicPopup.show({
					title:"userDetail",
					template:"userId",
				  scope: $scope,
				  buttons: [
					{ text: 'Cancel' },
					{
					  text: '<b>Save</b>',
					  type: 'button-positive',
					  onTap: function(dataList) {
						if (!$scope) {
						//don't allow the user to close unless he enters wifi password
						dataList.preventDefault();
						} else {
						  return $scope.userId;
						}
					  }
					}
				  ]
				});
				$scope.dataToShow=''
				$scope.showDataInPopup = function(){
				console.log('Tapped!', res);
				}
			   }
        }

			DemoCtrl.$inject = ['$scope', '$ionicPopup']
			angular
				.module('starter')
				.controller('MainCtrl',DemoCtrl);
})(); 