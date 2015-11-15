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

function displayPin(type, latitude, longitude) {
    var image;
    
    if (type == 1)
        image = "res/drink_icon_small.png";
    else if (type == 2)
        image = "res/pizza_icon_small.png";
    else if (type == 3)
        image = "res/telescope_icon_small.png";
    else if (type == 4)
        image = "res/walk_icon_small.png";
    else if (type == 5)
        image = "res/heart_icon_small.png";
    else
        return
        
    var marker = new google.maps.Marker({
                                        position: {lat: latitude, lng: longitude},
                                        map: map,
                                        icon: image,
                                        title: 'Position'
                                        });
}

function onTipSuccess(position) {
    var type = tiptype;
    displayPin(type, position.coords.latitude, position.coords.longitude);
    savePinInCache(type, position.coords.latitude, position.coords.longitude);
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
