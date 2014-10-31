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
 	'$upload',
 	'$receitas', 
 	function($scope, $http, $log, $upload, $receitas) {

 		$scope.saveRecipe = function() {

 		};

 		/** ========== Angular Upload Area ========== **/


			$scope.recipe = {
				name: '',
				images: [],
				preparationTime: '',
				numberOfPortions: '',
				difficulty: '',
				ingredients: [],
				steps: []
			};


			$scope.superUpload = function() {
				// $log.info($scope.receita.images[0]);

				var file = $scope.receita.images[0];

				$receitas.save({name: 'yes', age: 18}, function(data) {
					$log.info(data);
				})

				$scope.upload = $upload.upload({
		      url: 'api/save.php',
	      method: 'POST',
	      data: $.param({
	      	'image': $scope.receita.image,
	      	'name': $scope.receita.name
	      }),
	  		headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
	      file: file
	    }).progress(function(evt) {
	      console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
	    }).success(function(data, status, headers, config) {
	      console.log(data);
	    });
		};


	  $scope.onFileSelect = function($files) {
	    for (var i = 0; i < $files.length; i++) {
	      $scope.receita.images.push($files[i]);
	    }
	  };


 		$scope.newStep       = { description: '', editing: false }
 		$scope.newIngredient = { description: '', editing: false }

 		$scope.addIngredient = function(event) {
 			if($scope.newIngredient.description === '' || event.keyCode !== 13) return;

 			$scope.recipe.ingredients.push($scope.newIngredient);
 			$scope.newIngredient = { description: '', editing: false };
 		};

 		$scope.editIngredient = function(index) {
 			$scope.recipe.ingredients[index].editing = true;
 		};

 		$scope.saveIngredient = function(event, index, inputByKeyboard) {
 			if(inputByKeyboard) {
 				if(event.keyCode === 13) {
 					$scope.recipe.ingredients[index].editing = false;
 				}
 				return;
 			}

 			$scope.recipe.ingredients[index].editing = false;
 		};

 		$scope.addStep = function(event) {
 			if($scope.newStep.description === '' || event.keyCode !== 13) return;

 			$scope.recipe.steps.push($scope.newStep);
 			$scope.newStep = { description: '', editing: false };
 		};

 		$scope.editStep = function(index) {
 			$scope.recipe.steps[index].editing = true;
 		};

 		$scope.saveStep = function(event, index, inputByKeyboard) {
 			if(inputByKeyboard) {
 				if(event.keyCode === 13) {
 					$scope.recipe.steps[index].editing = false;
 				}
 				return;
 			}

 			$scope.recipe.steps[index].editing = false;
 		};


 	}])

// .controller('ReceitaController', [
// 	'$scope',
// 	'$routeParams',
// 	'$receitas',
// 	function($scope, $routeParams, $receitas) {

// 		var id = $routeParams.id;

// 		var string = "[\"leite\", \"acucar\"]";

// 		$receitas.get(id, function(data) {
// 			$scope.Receita = data;
// 			$scope.Receita.ingredientes = jQuery.parseJSON(data.ingredientes);
// 		});

// 	}])