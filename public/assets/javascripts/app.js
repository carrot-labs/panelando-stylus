/**
 * Set the angular module
 */
angular.module('panelando', ['ngRoute', 'ngFileUpload'])

.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})

		.when('/receitas', {
			templateUrl: 'views/receitas.html',
			controller: 'AllRecipesController'
		})

		.when('/receitas/nova', {
			templateUrl: 'views/nova-receita.html',
			controller: 'NewRecipeController'
		})

		.when('/receitas/:id', {
			templateUrl: 'views/receita.html',
			controller: 'SingleRecipeController'
		})

		.when('/page/:id', {
			templateUrl: 'views/receitas.html',
			controller: 'TestController'
		})

		.otherwise({redirectTo: '/'});
}]);angular.module('panelando')

.controller('AllRecipesController', [
'$scope',
'$log',
'$receitas',
function($scope, $log, $receitas) {

	$scope.recipes = [];

	$receitas.getAll(function(data) {
		$scope.recipes = data;
		$log.info(data);
	});
}]);;angular.module('panelando')

.controller('NewRecipeController', [
'$scope', 
'$http',
'$log', 
'$upload',
'$receitas', 
function($scope, $http, $log, $upload, $receitas) {

 	$scope.saveRecipe = function() {

		var extension = $scope.recipe.image[0].name.split('.')[1];
 		var fileName = Date.now() + '.' + extension;

 		var steps = [];
 		var ingredients = [];

		angular.forEach($scope.recipe.steps, function(step) {
			steps.push(step.name);
		});

		angular.forEach($scope.recipe.ingredients, function(ingredient) {
			ingredients.push(ingredient.name);
		});

		steps = JSON.stringify(steps);
		ingredients = JSON.stringify(ingredients);

		$http({
		  url: "api/save.php", 
		  method: "POST",
		  data: $.param({
		  	'name': $scope.recipe.name,
		  	'image': fileName,
				'preparation_time': $scope.recipe.preparationTime,
				'number_of_portions': $scope.recipe.numberOfPortions,
				'difficulty': $scope.recipe.difficulty.selected.value,
				'ingredients': ingredients,
				'steps': steps,
		  }),
		  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(data, status) {
			$log.info(data);
		});

		$scope.upload = $upload.upload({
			url: 'api/saveImage.php',
			method: 'POST',
			data: { 
				'image': $scope.recipe.image, 
				'file_name': fileName
			},
			headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
			file: $scope.recipe.image[0]
		}).progress(function(evt) {
			$log.info('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
		}).success(function(data, status, headers, config) {
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


}]);;angular.module('panelando')

.controller('SingleRecipeController', [
'$scope',
'$log',
'$routeParams',
'$receitas',
function($scope, $log, $routeParams, $receitas) {

	var id = $routeParams.id;

	$scope.recipe = {};

	$receitas.get(id, function(data) {
		$scope.recipe.name = data.nome;
		$scope.recipe.image = data.imagem;
		$scope.recipe.preparationTime = data.tempo_preparo;
		$scope.recipe.numberOfPortions = data.num_porcoes;
		$scope.recipe.difficulty = data.dificuldade;
		$scope.recipe.ingredients = $.parseJSON(data.ingredientes);
		$scope.recipe.steps = $.parseJSON(data.modo_preparo);
	});

}]);;angular.module('panelando')

.controller('TestController', [
'$scope',
'$http',
'$log',
'$routeParams',
function($scope, $http, $log, $routeParams) {
	
	var limit = 1;
	var offset = ($routeParams.id - 1) * limit;

	$scope.prevPageLink = parseInt($routeParams.id) - 1;
	$scope.nextPageLink = parseInt($routeParams.id) + 1;

	$scope.prevPageOffset = (offset - 1) * limit;
	$scope.nextPageOffset = (offset + 1) * limit;

	if($routeParams.id == 1) {
		$scope.isFirstPage = true;
	}

	$scope.hasPrev = false;
	$scope.hasNext = false;



	$http({
	  url: "api/pagination.php", 
	  method: "POST",
	  data: $.param({
	  	'limit': limit,
	  	'offset': offset
	  }),
	  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(data, status) {
		// $log.info(data);
		$scope.receitas = data;
	});

	$http({
	  url: "api/pagination.php", 
	  method: "POST",
	  data: $.param({
	  	'limit': limit,
	  	'offset': $scope.nextPageOffset
	  }),
	  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(data, status) {
		$log.info(data);
		$scope.hasNext = data;
	});

	$http({
	  url: "api/pagination.php", 
	  method: "POST",
	  data: $.param({
	  	'limit': limit,
	  	'offset': $scope.prevPageOffset
	  }),
	  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(data, status) {
		$log.info(data);
		$scope.hasPrev = data;
	});
}]);;angular.module('panelando')

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
}]);;angular.module('panelando')

.directive('focus', [function() {
	return function(scope, element, attrs) {
		scope.$watch(attrs.focus, function(newValue) {
			newValue && element[0].focus()
		})
	}
}]);;angular.module('panelando')

.filter('recipeDifficulty', function() {
	return function(level) {
		switch(level){
			case "1":
				return "Fácil";	
				break;
			case "2":
				return "Médio";	
				break;
			case "3":
				return "Difícil";	
				break;
			default:
				break;
		}
	};
});;angular.module('panelando')

.factory('$receitas', ['$http', function($http) {
	var o = {}

	o.getAll = function(callback) {
		$http.get('api/getAll.php')
		.success(function(data, status) {
			callback(data);
		});
	};

	o.get = function(id, callback) {

		$http({
		  url: "api/get.php", 
		  method: "POST",
		  data: $.param({'id': id}),
		  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(data, status) {
			callback(data);
		});
	};

	o.save = function(receita, callback) {
		$http({
		  url: "api/insert.php", 
		  method: "POST",
		  data: $.param({
		  	'name': receita.name,
		  	'name': receita.name,
		  	'name': receita.name,
		  	'name': receita.name,
		  	'name': receita.name,
		  }),
		  headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
		})
		.success(function(data, status) {
			callback(data);
		});
	};

	return o;
}]);
