function mainCtrl($scope) {
    $scope.typeButtonsVisible = false;
    
    $scope.showTypeButtons = function() {
        $scope.typeButtonsVisible = !($scope.typeButtonsVisible);
    }
    
    $scope.addPin = function() {
    }
}
