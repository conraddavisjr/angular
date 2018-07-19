(function() {

	var app = angular.module('githubViewer');

	var RepoController = function($scope, github, $routeParams) {
		var {username, repository} = $routeParams;

		$scope.username = username;
		$scope.repository = repository;

		var onRepoDetails = function(data) {
			console.log('onRepoDetails called: ', data);
	  	$scope.repoDetails = data;
	  	console.log('$scope.repoDetails: ', $scope.repoDetails);
	  }

	  var getRepoContributors = function(data) {
			github.getContributors(username, repository).then(onRepoContributors, onError);
	  }

	  var onRepoContributors = function(data) {
	  	$scope.contributors = data;
	  	console.log('$scope.contributors: ', $scope.contributors);
	  }

	  github.getRepoDetails(username, repository).then(onRepoDetails, onError);

	  var onError = function(reason) {
	  	$scope.error = 'could not fetch the repository details';
	  }

		github.getRepoDetails(username, repository)
					.then(onRepoDetails, onError)
					.then(getRepoContributors(username, repository));

  };

	app.controller('RepoController', RepoController);

}());
