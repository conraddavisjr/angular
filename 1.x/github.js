(function(){

	var github = function($http) {

		var getUser = function(username) {
			return $http.get(`https://api.github.com/users/${username}`)
									.then(function(response) {
										return response.data;
									});
		};

		var getRepos = function(user) {
			console.log('user: ', user);
			console.log('user.repos_url: ', user.repos_url);
			return $http.get(user.repos_url)
								  .then(function(response) {
								   	console.log('response.data: ', response.data)
								  	return response.data;
								  });
		}

		return {
			getUser,
			getRepos
		};

	};

	var module = angular.module("githubViewer");
	module.factory("github", github);

}());