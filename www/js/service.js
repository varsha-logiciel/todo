angular
  .module('starter')
  .service('hexafy', function(){
      this.myFunc = function(x) {
          return x.toString();
      }
  })
.service('count',function(){
    this.myFunc = function (x){
       return x.toString();
    }
})
  //Array Value
.service('apiService',function($http, $q){
	this.getDataFromApi = function (x){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "get",
			url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		})
		var promise = request.then(
		function (response) {
				return response.data;
		},
		function () {
			return $q.reject("Something went wrong");
		}
		);
		promise.abort = function () {
			deferredAbort.resolve();
		};
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		
		return promise;
	}
	this.postDataFromApi = function (body,title,id){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "post",
			data:{
				body:body,
				title:title,
				userId:id
			},

			
		    url: 'https://jsonplaceholder.typicode.com/posts',
			timeout: deferredAbort.promise,
		})
		      var promise = request.then(
		       function (response) {
				return response.data;
		},
		    function () {
			  return $q.reject("Something went wrong");
		}
		);
		     promise.abort = function () {
			   deferredAbort.resolve();
		};
		        promise.finally(function () {
			    promise.abort = angular.noop;
			    deferredAbort = request = promise = null;
		});
		
		return promise;
	}
	this.deleteDataFromApi = function (id){
		var deferredAbort = $q.defer();
		var request = $http({
			method: "delete",
			url: 'https://jsonplaceholder.typicode.com/posts/'+id,
			timeout: deferredAbort.promise,
		})
		var promise = request.then(
		function (response) {
				return response.data;
		},
		function () {
			return $q.reject("Something went wrong");
		}
		);
		promise.abort = function () {
			deferredAbort.resolve();
		};
		promise.finally(function () {
			promise.abort = angular.noop;
			deferredAbort = request = promise = null;
		});
		return promise;
	}	 
			 

})

