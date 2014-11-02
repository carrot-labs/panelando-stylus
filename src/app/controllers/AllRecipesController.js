angular.module('panelando')

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
}]);