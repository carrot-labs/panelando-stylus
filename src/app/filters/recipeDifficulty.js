angular.module('panelando')

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
});