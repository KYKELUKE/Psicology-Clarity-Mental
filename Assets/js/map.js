document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Forzar el ajuste del mapa después de un ligero retraso
  setTimeout(function () {
    map.invalidateSize();
  }, 100);
});
