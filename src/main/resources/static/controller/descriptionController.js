microservice.controller('descriptionController', function($scope, $location, $route, descriptionService) {
   $scope.error = false;
   $scope.getAllDescription = function() {
        $scope.ola="loding ....";
		descriptionService.getAllDescription(function(d) {
			$scope.ola=d;	
		});
		
		//$location.path("/description");
	}
	 

    $scope.getAllDescription2 = function() {
         $scope.ola="loding ....";
		descriptionService.getAllDescription(function(d) {
			$scope.ola=d;	
		});
		
		//$location.path("/description");
	}
});
