function onLoad() {
    //navigator.splashscreen.hide();
    navigator.geolocation.getCurrentPosition(onMapSuccess, onError);
}

var onMapSuccess = function(position){
    initMap(position.coords.latitude, position.coords.longitude);
    getPinInCache();
    pins.forEach(function(pin) {
                 displayPin(pin.type, pin.lat, pin.lng);
                 });
};

var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);
