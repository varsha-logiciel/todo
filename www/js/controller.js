(function(){
	'use strict';	
		var DemoCtrl = function($scope, $ionicActionSheet, $ionicBackdrop, $timeout, $ionicPopup, $ionicPopover, $ionicModal) {
			$scope.dataToShow = {};
			
			$scope.list = [{
				firstname: 'varsha'
			},{
				firstname: 'riya'

			}]
			
			$scope.removedata = function() {
				$scope.dataToShow = {};
			}
				$scope.showData = function(item) {
					
					$scope.dataToShow = item;
					
				}


				
	   
		}

		DemoCtrl.$inject = ['$scope', '$ionicActionSheet', '$ionicBackdrop', '$timeout','$ionicPopup', '$ionicPopover', '$ionicModal'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
	})();