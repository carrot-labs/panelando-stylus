angular.module('panelando')

.directive('focus', function() {
	return function(scope, element, attrs) {
		scope.$watch(attrs.focus, function(newValue) {
			newValue && element[0].focus()
		})
	}
})

.directive('fileInput', [
'$parse', 
function($parse) {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			elem.bind('change', function() {
				$parse(attrs.fileInput)
					.assign(scope, elem[0].files)
				scope.$apply();
			})
		}
	}
}])

;