angular.module('app', [])

// Sets up controller to consumer rdio API
.controller('playerCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://rdio-service.herokuapp.com/tracks/t9616400')
		.success(function(data) {
			$scope.greeting = data.data;
		})
		.error(function(data) {
			console.log('errors!')
		});
}]);
