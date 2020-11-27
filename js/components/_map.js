const initMap = () => {
  let map;

  map = new google.maps.Map(document.querySelector(".js-map"), {
    center: { lat: 24.7202603, lng: -101.3731918 },
    zoom: 5,
    disableDefaultUI: true,
  });
}

window.addEventListener('load', initMap)