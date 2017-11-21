microservice.controller('descriptionController', function($scope, $location, $route, descriptionService) {
   $scope.error = false;
   $scope.getAllDescription = function() {
       
        $scope.hola="loding ....";
		descriptionService.getAllDescription(function(d) {
			$scope.hola=d;	
		});
		$scope.bonjour="loding ....";
		descriptionService.getAllDescription2(function(d) {
			$scope.bonjour=d;	
		});
		
		$scope.aloha="loding ....";
		descriptionService.getAllDescription3(function(d) {
			$scope.aloha=d;	
		});
		//$location.path("/description");
	}
	 

   
});
