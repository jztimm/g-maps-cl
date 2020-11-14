mapboxgl.accessToken = 'pk.eyJ1Ijoianp0aW1tIiwiYSI6ImNraGk4aGlxZDBxdGUycm5xZjV6YzZrOTAifQ.yr0wTuZjEm_NiXjVjgzoIA';

navigator.geolocation.getCurrentPosition( successLocation,
  errorLocation, { 
    enableHighAccuracy: true
  });

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude]);
};

function errorLocation() {
  setupMap([-2.24, 53.48])
};

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 14
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  map.addControl(directions, 'top-left');
}
