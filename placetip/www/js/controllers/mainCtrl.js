function mainCtrl($scope) {
    $scope.typeButtonsVisible = false;
    
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
}
