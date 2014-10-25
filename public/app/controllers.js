angular.module('panelando')

.controller('IngredientsCtrl', ['$scope', function($scope) {
	Ingredients = this;

	$scope.newIngredient = '';

	this.ingredientsList = ['20ml de leite', '400g de farinha de trigo', '1 xícara de açúcar'];

	this.addIngredient = function(event) {
		console.log(event.keyCode);
	};
}])