angular.module('panelando')

.controller('IngredientsCtrl', ['$scope', function($scope) {
	Ingredients = this;

	this.newIngredient = '';

	this.ingredientsList = [];

	this.addIngredient = function(event) {
		if(event.keyCode === 13) {
			Ingredients.ingredientsList.push(Ingredients.newIngredient);
			Ingredients.newIngredient = '';
		}
	};
}])