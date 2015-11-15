function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    navigator.splashscreen.hide();
}

var app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);
