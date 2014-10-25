angular.module('panelando')

// .directive('ingredients', function() {
// 	return {
// 		controller: function($scope) {
// 			var ingredients = $scope.ingredients = [];

// 			this.add
// 		}
// 	}
// })

// .directive('ingredientItem', function($compile) {
// 	return {
// 		restrict: 'E',
// 		template: '<h1>Working</h1>',

// 		link: function(scope, elem, attrs) {
// 			elem.on('click', function() {
// 				var newElement = $compile( "<div my-diretive='n'></div>" )( $scope );
// 				$element.parent().append( newElement );
// 			})
// 		}
// 	}
// })

.directive('ingredientItem', function($compile) {
	return {
		restrict: 'E',
		template: '<input type="text" ng-keyup="add($event)" autofocus>',

		controller: function($scope, $element) {
			$scope.add = function(event) {
				if(event.keyCode === 13) {

				var el = $compile("<ingredient-item></ingredient-item>")($scope);
				$element.parent().append(el);
				}
			};
		}
	};
})
