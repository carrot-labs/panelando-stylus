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

		$http({
	  url: "api/save.php", 
	  method: "POST",
	  data: $.param({
	  	'name': $scope.recipe.name,
			'preparation_time': $scope.recipe.preparationTime,
			'number_of_portions': $scope.recipe.numberOfPortions,
			'difficulty': $scope.recipe.difficulty.selected.value,
			'ingredients': $scope.recipe.ingredients,
			'steps': $scope.recipe.steps,
	  }),
	  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(data, status) {
			$log.info(data);
		});

 	};

	$scope.recipe = {
		name: '',
		image: [],
		preparationTime: '',
		numberOfPortions: '',
		difficulty: {
			selected: {},
			options: [
				{name: 'Fácil', value: 1},
				{name: 'Médio', value: 2},
				{name: 'Difícil', value: 3}
			]
		},
		ingredients: [],
		steps: []
	};


	$scope.superUpload = function() {
		var file = $scope.recipe.images[0];

		$scope.upload = $upload.upload({
			url: 'api/save.php',
			method: 'POST',
			data: $.param({
				'image': $scope.recipe.image,
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
			$scope.recipe.image.push($files[i]);
		}
	};

	$scope.newStep       = { name: '', editing: false }
	$scope.newIngredient = { name: '', editing: false }

	$scope.addIngredient = function(event) {
		if($scope.newIngredient.name === '' || event.keyCode !== 13) return;

		$scope.recipe.ingredients.push($scope.newIngredient);
		$scope.newIngredient = { name: '', editing: false };
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
		if($scope.newStep.name === '' || event.keyCode !== 13) return;

		$scope.recipe.steps.push($scope.newStep);
		$scope.newStep = { name: '', editing: false };
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