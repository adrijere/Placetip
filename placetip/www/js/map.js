/*
function initialize() {
    var mapCanvas = document.getElementById('map-section');
    var myLatLng = {lat: 50.519506, lng: 1.5930193}; // POSITION HHD TOUQUET
    var mapOptions = {
        center: myLatLng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
    }
    var centerControlDiv = document.createElement('div');
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    var marker = new google.maps.Marker({
                                        position: {lat: 50.518706, lng: 1.5930193},
                                        map: map,
                                        title: 'Position'
                                        });
    
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
}
*/

function initMap(latitude, longitude) {
    var map = new google.maps.Map(document.getElementById('map-section'), {
                                  center: {lat: latitude, lng: longitude},
                                  scrollwheel: false,
                                  zoom: 17,
                                  disableDefaultUI: true
                                  });
}

//google.maps.event.addDomListener(window, 'load', initMap);
