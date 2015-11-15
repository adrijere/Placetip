function onLoad() {
//    navigator.splashscreen.hide();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

var onSuccess = function(position){
  initMap(position.coords.latitude, position.coords.longitude);
};

function onError(error) {
    console.log('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);
