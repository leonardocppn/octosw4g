define(['controllers/controllers'], function(controllers) {
	controllers.controller('octoDetailCtrl', ['$scope', '$routeParams', 'Octo', octoDetailCtrl]);
	function octoDetailCtrl($scope, $routeParams, Octo) {
    $scope.octo = Octo.get({octoId: $routeParams.octoId}, function(octo) {
      $scope.mainImageUrl = octo.image;
    });
	
	/*
	controllers.controller('octoDetailCtrl', ['$scope', '$http', octoDetailCtrl]);
	function ($scope, $http){
		$http.get('app/octos/octos.json').success(function(data) {
		$scope.octos = data;
	}
	*/
/*
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	*/
})