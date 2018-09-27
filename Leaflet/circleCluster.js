var mapboxAccessToken = 'pk.eyJ1Ijoiam9iZWRpYWgiLCJhIjoiY2psaTh0djE0MDkwNzNxazU4ajhiZjVkZyJ9.sZIPAm4Xd6KyRwllpD_QuQ';
var map = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.light',
}).addTo(map);

 markerClusterLayer = L.markerClusterGroup({
    disableClusteringAtZoom: 13,
    chunkedLoading: true,
  });

L.CircleClusterable = L.Circle.extend({

  getLatLng: function() {
    return this._latlng;
  },

  // dummy method.
  setLatLng: function() {}
});

// Add vectors of the new type directly to MCG.
// CAUTION: creating 500k circles!!!
for (var i = 0; i < 500000; i += 1) {
  var circle = new L.CircleClusterable(randomCoords(), 1000).addTo(markerClusterLayer);
  console.log(circle)
}

// Add MCG after, so that it uses addLayers (with an "s"), which is much more performant than using many times addLayer (without "s").
markerClusterLayer.addTo(map);

function randomCoords() {
  return [
    160 * Math.random() - 80, 360 * Math.random() - 180
  ];
}


