(function() {

	var app = angular.module('todoApp', []);
	var gitapp = angular.module('githubViewer', []);


	function todoCtrl() {
		var todoList = this;

	  todoList.todos = [
			{text: 'Learn Angular', done: false},
			{text: 'something else', done: false},
		];

		todoList.getTotalTodos = function () {
			return todoList.todos.length;
		}

		todoList.addTodo = function () {
			todoList.todos.push({text: todoList.formTodoText, done: false});
			todoList.formTodoText = '';
		}

		todoList.add = function () {
			return todoList.val1 + todoList.val2;
		}

		todoList.clearCompleted = function () {
			todoList.todos = todoList.todos.filter((todo) => {
				return !todo.done;
			})
		}
	}

	var MainController = function($scope, $http, $interval, /*github*/) {
	  $scope.message = 'Github viewer';
	  $scope.userName = 'sampla';
	  $scope.repoSortOrder = '-stargazers_count';
	  $scope.timerCount = 5;

	  var onUserComplete = function(response) {
	    // $scope.user = response.data;
	  }

	  var decrementTimer = function() {
	  	$scope.timerCount -=1;
	  	if($scope.timerCount == 0) $scope.requestUser();
	  }

	  var onError = function(reason) {
	  	$scope.error = 'could not fetch the user';
	  }

	  // run the countdown timer on init
	  var countdownInterval = $interval(decrementTimer, 1000, $scope.timerCount);

	  var findUser = function(response) {
	  	var userList = response.data.users;
	  	var filteredUser = userList.filter((user) => user.name === $scope.userName);
	  	if (filteredUser.length === 0) onError();
	  	$scope.user = filteredUser[0];

	  	if(countdownInterval) {
	  		$interval.cancel(countdownInterval);
	  		$scope.timerCount = null;
	  	}
	  }

	  $scope.requestUser = function() {
			// $http.get(`https://api.github.com/users/${$scope.userName}`)
			// .then(onUserComplete, onError);

			// offline version
			$http.get(`/json/mock.json`)
	      .then(findUser, onError);
	  }
	}

	app.controller('TodoCtrl', todoCtrl);
	app.controller('MainController', MainController);

}());


// function TodoCtrl($scope) {

// 	$scope.todos = [
// 		{text: 'Learn Angular', done: false},
// 		{text: 'something else', done: false},
// 	];

// 	$scope.getTotalTodos = function () {
// 		return $scope.todos.length;
// 	}

// 	$scope.addTodo = function () {
// 		$scope.todos.push({text: $scope.formTodoText, done: false});
// 		$scope.formTodoText = '';
// 	}

// 	$scope.add = function () {
// 		return $scope.val1 + $scope.val2;
// 	}

// 	$scope.clearCompleted = function () {
// 		$scope.todos = $scope.todos.filter((todo) => {
// 			return !todo.done;
// 		})
// 	}
// }