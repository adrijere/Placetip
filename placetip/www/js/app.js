function onLoad() {
    navigator.splashscreen.hide();
    navigator.geolocation.getCurrentPosition(onMapSuccess, onError);
    getPinInCache();
    pins.forEach(function(pin) {
        displayPin(pin.lat, pin.lng);
    });
}

var onMapSuccess = function(position){
  initMap(position.coords.latitude, position.coords.longitude);
};

var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);
