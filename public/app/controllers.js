/**
 * Get the angular module
 */
angular.module('panelando')

.controller('HomeController', ['$scope', function($scope) {

}])

.controller('NovaReceitaController', [
'$scope', 
'$http', 
'$receitas', 
function($scope, $http, $receitas) {


}])

.controller('ReceitasController', [
'$scope', 
'$http', 
'$receitas', 
function($scope, $http, $receitas) {


}])

.controller('ReceitaController', [
'$scope',
'$routeParams',
'$receitas',
function($scope, $routeParams, $receitas) {

	var id = $routeParams.id;

	var string = "[\"leite\", \"acucar\"]";

	$receitas.get(id, function(data) {
		$scope.Receita = data;
		$scope.Receita.ingredientes = jQuery.parseJSON(data.ingredientes);
	});

}])

/**
 * Ingredients Controller
 */
.controller('IngredientsCtrl', ['$scope', function($scope) {

	/**
	 * The controller reference
	 */
	Ingredients = this;


	/**
	 * Init the main variables
	 */
	this.ingredientsList = [];
	this.newIngredient = {name: '', editing: false};

	
	/**
	 * Add Ingredient
	 *
	 * Add an ingredient to the ingredients list
	 * 
	 * @param  object  event The object that carries the code from the keyboard
	 * @return void
	 */
	this.addIngredient = function(event) {
		/** Prevent an ingredient to be created empty */
		if(this.newIngredient.name==='') return;

		if(event.keyCode === 13) {
			this.ingredientsList.push(this.newIngredient);
			this.newIngredient = {name: '', editing: false};
		}
	};


	/**
	 * Edit Ingredient
	 *
	 * Turn on editing for a specified ingredient
	 *
	 * @param  int 	index The index of the ingredient to be edited
	 * @return void
	 */
	this.editIngredient = function(index) {
		this.ingredientsList[index].editing = true;
	};


	/**
	 * Save Ingredient
	 *
	 * Update an ingredient that have been being edited
	 *
	 * @param  object  event           The object that carries the code from the keyboard
	 * @param  int 		 index 					 The index of the ingredient to be edited
	 * @param  boolean inputByKeyboard The way the method is called
	 * @return void
	 */
	this.saveIngredient = function(event, index, inputByKeyboard) {
		if(inputByKeyboard) {
			if(event.keyCode === 13) {
				this.ingredientsList[index].editing = false;
			}

			return;
		}

		this.ingredientsList[index].editing = false;
	};

}])
