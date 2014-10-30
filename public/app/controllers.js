/**
 * Get the angular module
 */
 angular.module('panelando')

 .controller('HomeController', ['$scope', function($scope) {

 }])

 .controller('NovaReceitaController', [
 	'$scope', 
 	'$http',
 	'$log', 
 	'$receitas', 
 	function($scope, $http, $log, $receitas) {

 		$scope.steps       = [];
 		$scope.ingredients = [];

 		$scope.newStep       = { description: '', editing: false }
 		$scope.newIngredient = { description: '', editing: false }

 		$scope.addIngredient = function(event) {
 			if($scope.newIngredient.description === '' || event.keyCode !== 13) return;

 			$scope.ingredients.push($scope.newIngredient);
 			$scope.newIngredient = { description: '', editing: false };
 		};

 		$scope.editIngredient = function(index) {
 			$scope.ingredients[index].editing = true;
 		};

 		$scope.saveIngredient = function(event, index, inputByKeyboard) {
 			if(inputByKeyboard) {
 				if(event.keyCode === 13) {
 					$scope.ingredients[index].editing = false;
 				}
 				return;
 			}

 			$scope.ingredients[index].editing = false;
 		};

 		$scope.addStep = function(event) {
 			if($scope.newStep.description === '' || event.keyCode !== 13) return;

 			$scope.steps.push($scope.newStep);
 			$scope.newStep = { description: '', editing: false };
 		};

 		$scope.editStep = function(index) {
 			$scope.steps[index].editing = true;
 		};

 		$scope.saveStep = function(event, index, inputByKeyboard) {
 			if(inputByKeyboard) {
 				if(event.keyCode === 13) {
 					$scope.steps[index].editing = false;
 				}
 				return;
 			}

 			$scope.steps[index].editing = false;
 		};


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

.controller('IngredientsCtrl', [
	'$scope', 
	'$log', 
	'$ingredientes',
	function($scope, $log, $ingredientes) {

	/**
	 * The controller reference
	 */

	/**
	 * Init the main variables
	 */
	// this.ingredientsList = [{name: 'Leite', editing: false}, {name: 'Açucar', editing: false}];
	this.ingredientsList = $ingredientes.get();
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
