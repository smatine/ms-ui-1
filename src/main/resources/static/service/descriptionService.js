microservice.service('descriptionService', function($http, $location, $cookieStore) {
				  
				    
					this.getAllDescription = function(callback) {
					    
						var responsePromise = $http.get("http://ola-helloworld-msa.apps.oc.smatine.com/api/ola");
						responsePromise.success(function(data, status, headers, config) {
							callback(data);
						});
						responsePromise.error(function(data, status, headers, config) {
									alert("AJAX failed! because no webservice is attached yet");
						});
					};
					
						this.getAllDescription2 = function(callback) {
					    
						var responsePromise = $http.get("http://aloha-helloworld-msa.apps.oc.smatine.com/api/aloha");
						responsePromise.success(function(data, status, headers, config) {
							callback(data);
						});
						responsePromise.error(function(data, status, headers, config) {
									alert("AJAX failed! because no webservice is attached yet");
						});
					};
					
					

				});
				

function load_data(){
    //Clear all responses
    
        
    $('#' + "ola-service" + '-secured').text("Loading...");
    
    
   
}



				
				
