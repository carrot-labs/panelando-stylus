angular.module('panelando')

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
}]);