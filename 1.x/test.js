angular.module('MyApp', [])
	.controller('listGenerator', function() {
		var list = this;
		list.contents = [{one: 'one'}, {one: 'one'}];
	})