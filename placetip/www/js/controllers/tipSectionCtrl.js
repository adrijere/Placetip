function tipSectionCtrl($scope) {
    $scope.typeButtonsVisible = false;
    
    $scope.showTypeButtons = function() {
        $scope.typeButtonsVisible = !($scope.typeButtonsVisible);
    }
}
