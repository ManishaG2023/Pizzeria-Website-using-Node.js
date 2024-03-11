let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.712, lng: -74.00 },
    zoom: 12,
  });
 // var marker = new google.maps.Marker({ position: {lat: 40.712, lng: -74.00 },
 // map: map, label: {text: "Mario's Pizza", fontSize: '20px'}})
}

window.initMap = initMap;
