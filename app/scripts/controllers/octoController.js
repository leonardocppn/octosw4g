define(['controllers/controllers'], function(controllers) {

	controllers.controller('octoController', ['$scope', '$http', octoController]); 
	function octoController($scope, $http) {

	$scope.query = "Simple";
	$scope.modificaQ = function(er){
		$scope.query = $scope.octos[er];
	}
	$scope.modificaI = function(){
		$scope.query = $scope.octos[0];
	}
	  $http.get('app/octos/octos.json').success(function(data) {
		$scope.octos = data;
	  });
	}	
});
