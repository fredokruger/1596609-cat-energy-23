function initMap() {
  let coordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
  let centerCoordinates;
  let icon;
  if (window.matchMedia('(min-width: 768px)').matches) {
    icon = {
      url: 'img/map-pin.svg',
      scaledSize: new google.maps.Size(89, 104)
    };
  } else {
    icon = {
      url: 'img/map-pin.svg',
      scaledSize: new google.maps.Size(60, 69),
    };
  }
  if (window.matchMedia('(min-width: 1280px)').matches) {
    centerCoordinates = { lat: 59.93883740459927, lng: 30.32066093815554 };
  } else {
    centerCoordinates = { lat: 59.938916705952764, lng: 30.322972921767455 };
  }

  map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 15,
    disableDefaultUI: true,
    center: centerCoordinates,
  });

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: icon,
  });

}
window.addEventListener('resize', () => {
  initMap()
})
