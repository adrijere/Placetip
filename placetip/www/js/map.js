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
    var image = {
        url: 'res/drink_icon.png',
        size: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 15)
    };

    /*
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
     */
    
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
    var name = "pin" + pins.length;
    pins.push(pin);
    localStorage.setItem(name, pin_json);
}

function getPinInCache() {
    if (localStorage.length != 10) {
	savePinInCache(1, 50.5186119, 1.5926113);
	savePinInCache(3, 50.5195119, 1.5930113);
	savePinInCache(4, 50.5186119, 1.5935113);
	savePinInCache(2, 50.5170119, 1.5920113);
	savePinInCache(5, 50.5190119, 1.5920113);
	
    }
    for (var i = 0; i < localStorage.length; i++) {
        var pin_json = localStorage.getItem(localStorage.key(i));
        var pin = JSON.parse(pin_json);
        pins.push(pin);
    }
}
