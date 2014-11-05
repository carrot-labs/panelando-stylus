/**
 * Set the angular module
 */
var app = angular.module('panelando', ['ngRoute', 'ngAnimate', 'ngFileUpload'])

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
}])