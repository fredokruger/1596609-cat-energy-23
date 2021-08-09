function initMap() {
  let coordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
  let centerCoordinates;
  let markerImage;
  if (window.matchMedia("(min-width: 1280px)").matches) {
    centerCoordinates = { lat: 59.93883740459927, lng: 30.32066093815554 };
    markerImage = '../img/map-marker-desktop.png';
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = '../img/map-marker-tablet.png';
  } else {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = '../img/map-marker-mobile.png';
  }

  map = new google.maps.Map(document.querySelector(".contacts__map"), {
    zoom: 15,
    disableDefaultUI: true,
    center: centerCoordinates,
  });

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerImage
  });
}
