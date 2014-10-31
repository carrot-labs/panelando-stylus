angular.module('panelando')

.factory('$receitas', function($http) {
	var o = {}

	o.getAll = function(callback) {
		$http.get('api/getAll.php')
			.success(function(data, status) {
				callback(data);
			});
	}

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


	}

	return o;
})

.factory('$ingredientes', function() {
	var o = {};

	o.ingredients = [{name: 'Leite', editing: false}, {name: 'Açucar', editing: false}];

	o.get = function() {
		return this.ingredients;
	};

	o.save = function(item) {
		this.ingredients.push(item);
	};
	return o;
}) 
