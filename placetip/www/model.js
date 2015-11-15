var Model = { 
    url: "",
    lat: "",
    lng: ""};
var cpt = 0;

// Stockage
var Model_json = JSON.stringify(Model);
var pin = "pin" + cpt;
sessionStorage.setItem(pin, Model_json);
cpt += 1;

// lecture
var Model_json = sessionStorage.getItem("pin");
var Model = JSON.parse(Model_json);
// Affichage dans la console
console.log(Model);