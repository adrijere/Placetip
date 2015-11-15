function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    navigator.splashscreen.hide();
    navigator.geolocation.getCurrentPosition(function(position){
        initMap(position.coords.latitude, position.coords.longitude);
    });
}

var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);
