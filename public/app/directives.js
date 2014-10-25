angular.module('panelando')

.directive('focus', function() {
	return function(scope, element, attrs) {
		scope.$watch(attrs.focus, function(newValue) {
			newValue && element[0].focus()
		})
	}
});