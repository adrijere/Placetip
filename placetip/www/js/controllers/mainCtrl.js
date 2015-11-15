function mainCtrl($scope) {

    $scope.showTypeButtons = function() {
        $scope.typeButtonsVisible = !($scope.typeButtonsVisible);
    }
    
    $scope.addPin = function(type) {
        tiptype = type;
        alert(type);
        navigator.geolocation.getCurrentPosition(onTipSuccess, onError);
        $scope.typeButtonsVisible = false;
    }

    $scope.typeButtonsVisible = false;
}
