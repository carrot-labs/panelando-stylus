angular.module('panelando')

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
