(function() {

	var app = angular.module('githubViewer');

	var MainController = function($scope, $interval, $location) {

	  var decrementTimer = function() {
	  	$scope.timerCount -=1;
	  	if($scope.timerCount === 0) $scope.requestUser($scope.username);
	  }

	  // run the countdown timer on init
	  var countdownInterval;
	  var startCountdown = function() {
		  countdownInterval = $interval(decrementTimer, 1000, $scope.timerCount);
	  }

	  $scope.requestUser = function() {
			if(countdownInterval) {
	  		$interval.cancel(countdownInterval);
	  		$scope.timerCount = null;
	  	}
	  	$location.path(`/user/${$scope.username}`);
	  }

	  // $scope.username = 'angular';
	  $scope.timerCount = 5;
	  // startCountdown();
	}

	app.controller('MainController', MainController);

}());
