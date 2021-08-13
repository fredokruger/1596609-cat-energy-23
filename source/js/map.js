function initMap() {
  let coordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
  let centerCoordinates;
  let markerImage;
  let retina = window.devicePixelRatio > 1;
  if (window.matchMedia("(min-width: 1280px)").matches && retina) {
    centerCoordinates = { lat: 59.93883740459927, lng: 30.32066093815554 };
    markerImage = 'img/map-marker-desktop@2x.png';
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
    centerCoordinates = { lat: 59.93883740459927, lng: 30.32066093815554 };
    markerImage = 'img/map-marker-tablet@1x.png';
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = 'img/map-marker-tablet@1x.png';
  } else if (window.matchMedia("(min-width: 768px)").matches && retina) {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = 'img/map-marker-tablet@2x.png';
  } else if (retina) {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = 'img/map-marker-mobile@2x.png';
  } else {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
    markerImage = 'img/map-marker-mobile@1x.png';
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
