
<!-- Modified from https://developers.google.com/maps/documentation/javascript/examples/map-simple  -->
let map;

function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.9072, lng: -77.0369 },
    mapId: "8e0a97af9386fef",
    zoom: 13,
    
  });
  //map tilt from: https://developers.google.com/maps/documentation/javascript/examples/aerial-simple#maps_aerial_simple-javascript

//}
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;

  directionsService
    .route({
      origin: { lat: 38.878313757054144, lng: -77.07088442971796 }, //Arlington National Cemetery
      destination: {lat: 38.886125337227796, lng: -76.99898967239639}, //Capitol hill
      
      waypoints: [
          {location: {lat: 38.89075030497426, lng: -77.06973194517522}}, //US Marine Corps War Memorial
          {location: {lat: 38.88974674595028, lng: -77.05038632519333}}, //Lincoln Memorial
          {location: {lat: 38.886153918140266, lng: -77.04407546695914}}, //Martin Luther King Jr. Memorial
          {location: {lat: 38.89770789679733, lng: -77.03665143059655}}, //The White house
          {location: {lat: 38.891644515409354, lng: -77.01993528642554}}, //National Gallery of Art
          {location: {lat: 38.890141386930964, lng: -77.00935665431186}}, //United states Capitol
         
                    ],
      
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}
  
  
