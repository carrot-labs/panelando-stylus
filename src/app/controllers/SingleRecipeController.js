angular.module('panelando')

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

}]);