angular.module('panelando')

.controller('IngredientsCtrl', ['$scope', function($scope) {
	Ingredients = this;

	this.ingredientsList = [{name: 'Leite', editing: false}, {name: 'Açúcar', editing: false}];
	this.newIngredient = {name: '', editing: false};

		this.addIngredient = function(event) {
		if(event.keyCode === 13) {
			this.ingredientsList.push(Ingredients.newIngredient);
			this.newIngredient = {name: '', editing: false};
		}
	};

	this.editIngredient = function(index) {
		this.ingredientsList[index].editing = true;
	};

	this.saveIngredient = function(event, index) {
		if(event.keyCode === 13) {
			this.ingredientsList[index].editing = false;
		}
	};

	this.verify = function() {
		console.log(Ingredients.ingredientsList);
	};

}])
