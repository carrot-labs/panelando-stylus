/**
 * Set the angular module
 */
angular.module('panelando', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/receitas',{
			templateUrl: 'views/nova-receita.html',
			controller: 'ReceitasController'
		})

		.when('/receitas/nova',{
			templateUrl: 'views/nova-receita.html',
			controller: 'ReceitasController'
		});
}])