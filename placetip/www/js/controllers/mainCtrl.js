function mainCtrl($scope) {
    $scope.typeButtonsVisible = false;
    $scope.pins = [];

    $scope.showTypeButtons = function() {
        $scope.typeButtonsVisible = !($scope.typeButtonsVisible);
    }
    
    $scope.addPin = function() {
        navigator.geolocation.getCurrentPosition($scope.onSuccess, $scope.onError);
        $scope.typeButtonsVisible = false;
    }
    
    $scope.displayPin = function(latitude, longitude) {
        var marker = new google.maps.Marker({
                                            position: {lat: latitude, lng: longitude},
                                            map: map,
                                            title: 'Position'
                                            });
    }
    
    $scope.onSuccess = function(position){
        $scope.displayPin(position.coords.latitude, position.coords.longitude);
    };
    
    $scope.onError = function(error) {
        console.log('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
    };

    $scope.savePinInCache = function(url, lat, lng) {
	var pin = { url: url, lat: lat, lng: lng};
	var pin_json = JSON.stringify(pin);
	var name = "pin" + $scope.pins.length;
	$scope.pins.push(pin);
	sessionStorage.setItem(name, pin_json);
    }

    $scope.getPinInCache = function() {
	for (var i = 0; i < sessionStorage.length; i++) {
	    var pin_json = sessionStorage.getItem(sessionStorage.key(i));
	    var pin = JSON.parse(pin_json);
	    $scope.pins.push(pin); 
	}
    }
}
