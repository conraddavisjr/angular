// (function(){

// 	var github = function($http) {

// 		this.getUser = function(username) {
// 			return $http.get(`/json/mock.json`)
// 									.then(function(response) {
// 										return response.data;
// 									});
// 		};

// 		this.getRepos = function(response) {
// 			var userList = response.data.users;
// 	  	var filteredUser = userList.filter((user) => user.name === $scope.userName);
// 	  	return filteredUser.length === 0 ? false : filteredUser  //onError();
// 		}

// 		return {
// 			getUser,
// 			getRepo
// 		};

// 	};

// 	var module = angular.module("githubViewer");
// 	module.factory("github", github);

// }());