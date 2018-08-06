(function() {

	var app = angular.module('githubViewer');

	var UserController = function($scope, github, $routeParams, $location) {

	  var onUserComplete = function(data) {
	  	$scope.user = data;
	    github.getRepos($scope.user).then(onRepos, onError);
	  }

	  var onRepos = function(data) {
	  	$scope.repos = data;
	  	console.log('$scope.repos: ', $scope.repos);
	  }

	  var onError = function(reason) {
	  	$scope.error = 'could not fetch the user';
	  }

	  $scope.repoSortOrder = '-stargazers_count';
	  $scope.username = $routeParams.username;
	  github.getUser($scope.username).then(onUserComplete, onError);

	};

	app.controller('UserController', UserController);

}());
