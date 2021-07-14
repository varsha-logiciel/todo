(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicPopup, $ionicPopover, $ionicModal) {
			$scope.show = function() {

				// Show the action sheet
				var hideSheet = $ionicActionSheet.show({
					buttons: [
						{ text: '<b>Share</b> This' },
						{ text: 'Move' }
					],
					destructiveText: 'Delete',
					titleText: 'Modify your album',
					cancelText: 'Cancel',
					cancel: function() {
							 // add cancel code..
						 },
					buttonClicked: function(index) {
						return true;
					}
				});
		 
			};

			//Show a backdrop for one second
			$scope.action = function() {
				$ionicBackdrop.retain();
				$timeout(function() {
					$ionicBackdrop.release();
				}, 1000);
			};

			// Execute action on backdrop disappearing
			$scope.$on('backdrop.hidden', function() {
				// Execute action
			});

			// Execute action on backdrop appearing
			$scope.$on('backdrop.shown', function() {
				// Execute action
			});

			$scope.showPopup = function() {
				$scope.data = {};
			
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
			
				myPopup.then(function(res) {
					console.log('Tapped!', res);
				});
			
				$timeout(function() {
					myPopup.close(); //close the popup after 3 seconds for some reason
				}, 3000);
		   }

			$ionicPopover.fromTemplateUrl('templates/my-popover.html', {
				scope: $scope
			}).then(function(popover) {
				$scope.popover = popover;
			});


			$scope.openPopover = function($event) {
				$scope.popover.show($event);
			};
			$scope.closePopover = function() {
				$scope.popover.hide();
			};
			//Cleanup the popover when we're done with it!
			$scope.$on('$destroy', function() {
				$scope.popover.remove();
			});
			// Execute action on hidden popover
			$scope.$on('popover.hidden', function() {
				// Execute action
			});
			// Execute action on remove popover
			$scope.$on('popover.removed', function() {
				// Execute action
			});
			$ionicModal.fromTemplateUrl('templates/my-modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
			  }).then(function(modal) {
				$scope.modal = modal;
			  });
			  $scope.openModal = function() {
				$scope.modal.show();
			  };
			  $scope.closeModal = function() {
				$scope.modal.hide();
			  };
			  // Cleanup the modal when we're done with it!
			  $scope.$on('$destroy', function() {
				$scope.modal.remove();
			  });
			  // Execute action on hide modal
			  $scope.$on('modal.hidden', function() {
				// Execute action
			  });
			  // Execute action on remove modal
			  $scope.$on('modal.removed', function() {
				// Execute action
			  });
			  
			   
		}

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicPopover', '$ionicModal'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})();