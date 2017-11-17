microservice.service("registerService", function($http, $location) {
	
	this.userregistration = function(username, firstname, lastname, password,
			email, phnumber, address, callback) {
		var registeruser = {
			"username" : username,
			"firstname" : firstname,
			"lastname" : lastname,
			"password" : password,
			"email" : email,
			"phnumber" : phnumber,
			"address" : address
		};

		var responsePromise = $http({
			url : "https://ms-api-gateway-toto.apps.oc.smatine.com/isadco/tempAppApiGateway/api/customer/customerService/registerCustomer",
			method : "POST",
			data : registeruser,
			headers : {
				'Content-Type' : 'application/json'
			}
		});

		responsePromise.success(function(data, status, headers, config) {
			alert("User Registration Sucessful");
			callback(data);;
		});
		responsePromise.error(function(data, status, headers, config) {
			alert("AJAX failed! because no webservice is attached yet");
		});
	}

});
