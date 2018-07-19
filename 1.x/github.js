(function(){

	var github = function($http) {

		var getUser = function(username) {
			console.log('getUser called')
			return $http.get(`https://api.github.com/users/${username}`)
									.then(function(response) {
										return response.data;
									});
		};

		var getRepos = function(user) {
			return $http.get(user.repos_url)
								  .then(function(response) {
								  	return response.data;
								  });
		}

		var getRepoDetails = function(user, repo) {
			return $http.get(`https://api.github.com/repos/${user}/${repo}`)
									.then(function(response) {
										return response.data;
									})
		}

		var getContributors = function(user, repo) {
			return $http.get(`https://api.github.com/repos/${user}/${repo}/contributors`)
									.then(function(response) {
										return response.data;
									})
		}

		return {
			getUser,
			getRepos,
			getRepoDetails,
			getContributors
		};

	};

	var module = angular.module("githubViewer");
	module.factory("github", github);

}());