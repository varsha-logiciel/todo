(function(){
	'use strict';	
		var DemoCtrl = function($scope, apiService) {
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
               //array value
               $scope.counts = [255, 251, 200];
                  $scope.data = []
               apiService.getDataFromApi().then(function(response){
	           if(response) {
		        $scope.data = response;
	       }
              }, function(err){
	             console.log(err)
           })
		  // post data
		  $scope.postData1FromApi=function(title,body,id){
					 apiService.postDataFromApi(title,body,id).then(function(response){
						$scope.data.push(response)
						
			 })
			 //Hitting $https  Delete request
			$scope.deletedata = function (item,$index){
				apiService.deleteDataFromApi(item).then(function(response){
					$scope.data.splice($index)
				})
			}		 
				 }
    }

		DemoCtrl.$inject = ['$scope','apiService'];
		angular
			.module('starter')
			.controller('MainCtrl',DemoCtrl);
})();