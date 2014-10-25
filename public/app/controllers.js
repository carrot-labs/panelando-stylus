angular.module('panelando')

.controller('IngredientsCtrl', ['$scope', function($scope) {
	Ingredients = this;

	this.newIngredient = '';
	this.editingIngredient = '';

	this.ingredientsList = ['Leite', 'Açúcar'];

	this.addIngredient = function(event) {
		if(event.keyCode === 13) {
			Ingredients.ingredientsList.push(Ingredients.newIngredient);
			Ingredients.newIngredient = '';
		}
	};

	this.editIngredient = function(index) {
		Ingredients.editing = index;
	};

	this.saveIngredient = function(event, index) {
		if(event.keyCode === 13) {
			Ingredients.ingredientsList[index] = Ingredients.editingIngredient[index];
			console.log(Ingredients.editingIngredient);
			console.log(Ingredients.ingredientsList)
		}
	};
}])