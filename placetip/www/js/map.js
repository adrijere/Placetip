var map;
var pins = [];
var tiptype;

function initMap(latitude, longitude) {
    map = new google.maps.Map(document.getElementById('map-section'), {
                                  center: {lat: latitude, lng: longitude},
                                  scrollwheel: false,
                                  zoom: 17,
                                  disableDefaultUI: true
                                  });
}

function displayPin(latitude, longitude) {
    var marker = new google.maps.Marker({
                                        position: {lat: latitude, lng: longitude},
                                        map: map,
                                        title: 'Position'
                                        });
}

function onTipSuccess(position) {
    displayPin(position.coords.latitude, position.coords.longitude);
    savePinInCache(0, position.coords.latitude, position.coords.longitude);
};

function onError(error) {
    console.log('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
};

function savePinInCache(type, lat, lng) {
    var pin = { type: type, lat: lat, lng: lng};
    var pin_json = JSON.stringify(pin);
    var name = "pin" + $scope.pins.length;
    pins.push(pin);
    localStorage.setItem(name, pin_json);
}

function getPinInCache() {
    for (var i = 0; i < localStorage.length; i++) {
        var pin_json = localStorage.getItem(localStorage.key(i));
        var pin = JSON.parse(pin_json);
        pins.push(pin);
    }
}
