angular.module('todoApp', [])
  .controller('TodoCtrl', todoCtrl);


function todoCtrl() {
	console.log('called', todoCtrl)
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