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
			$scope.showPopup = function() {
				$scope.dataToShow = {};
			
				// An elaborate, custom popup
				var myPopup = $ionicPopup.show({
					template: '<input type="password" ng-model="data.wifi">',
					title: 'Enter Wi-Fi Password',
					subTitle: 'Please use normal things',
					scope: $scope,
					buttons: [
						{ text: 'Cancel' },
						{
							text: '<b>Save</b>',
							type: 'button-positive',
							onTap: function(e) {
								if (!$scope.data.wifi) {
								//don't allow the user to close unless he enters wifi password
									e.preventDefault();
								} else {
									return $scope.data.wifi;
								}
							}
						}
					]
				});
				$scope.dataToShow='showDataInPopup'
				$scope.showDataInPopup = function(){
				console.log('Tapped!', res);
				};
			
				$timeout(function() {
					myPopup.close(); //close the popup after 3 seconds for some reason
				}, 3000);
		   };
	}

			DemoCtrl.$inject = ['$scope', '$ionicPopup']
			angular
				.module('starter')
				.controller('MainCtrl',DemoCtrl);
})(); 