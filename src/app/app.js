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

		.otherwise({redirectTo: '/'});
}])