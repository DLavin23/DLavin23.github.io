angular.module('app', [function() {
	console.log('hello, world!');
}])

.controller('AppCtrl', ['$scope', function($scope){
  console.log('App controller');
}])

.controller('TabsCtrl', ['$scope', function ($scope) {
		console.log('tabs');
    // $scope.tabs = [{
    //         title: 'One',
    //         url: 'one.tpl.html'
    //     }, {
    //         title: 'Two',
    //         url: 'two.tpl.html'
    //     }, {
    //         title: 'Three',
    //         url: 'three.tpl.html'
    // }];

    // $scope.currentTab = 'one.tpl.html';

    // $scope.onClickTab = function (tab) {
    //     $scope.currentTab = tab.url;
    // }

    // $scope.isActiveTab = function(tabUrl) {
    //     return tabUrl == $scope.currentTab;
    // }
}]);
