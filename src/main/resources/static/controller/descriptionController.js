microservice.controller('descriptionController', function($scope, $location, $route, descriptionService) {
   $scope.error = false;
   $scope.getAllDescription = function() {
        $scope.ola="loding ....";
		descriptionService.getAllDescription(function(d) {
			$scope.ola=d;	
		});
		$scope.aloha="loding ....";
		descriptionService.getAllDescription2(function(d) {
			$scope.aloha=d;	
		});
		//$location.path("/description");
	}
	 

   
});
