angular.module('app', [function() {
	console.log('hello, world!');
}])

.controller('AppCtrl', ['$scope', function($scope){
  console.log('App controller');
}]);
