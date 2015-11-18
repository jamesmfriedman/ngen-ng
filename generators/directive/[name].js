angular.module('<%= module || name.camelCase %>').directive('<%= name.camelCase %>', function() {
	return {
		restrict: 'E',
		templateUrl: '<%= templatePath %><%= name.camelCase %>.html',
		scope: {},
		link: function(scope, el, attrs) {

		},
		controller: function($scope) {

		}
	}
});