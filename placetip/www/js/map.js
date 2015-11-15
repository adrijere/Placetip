var map;
var pins = [];
var tiptype;

function savePinInCache(type, lat, lng) {
    var pin = { type: type, lat: lat, lng: lng};
    var pin_json = JSON.stringify(pin);
    var name = "pin" + pins.length;
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

function initMap(latitude, longitude) {
    map = new google.maps.Map(document.getElementById('map-section'), {
                                  center: {lat: latitude, lng: longitude},
                                  scrollwheel: false,
                                  zoom: 17,
                                  disableDefaultUI: true
                                  });
    var marker = new google.maps.Marker({
                                        position: {lat: latitude, lng: longitude},
                                        map: map,
                                        title: 'Position'
                                        });
    if (localStorage.length < 10) {
        savePinInCache(1, latitude + 0.0005, longitude + 0.0003);
        savePinInCache(2, latitude + 0.0007, longitude - 0.0003);
        savePinInCache(3, latitude - 0.0004, longitude - 0.0006);
        savePinInCache(4, latitude + 0.0002, longitude + 0.0008);
        savePinInCache(5, latitude - 0.0008, longitude - 0.0004);
    }
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
