var mapboxAccessToken = 'pk.eyJ1Ijoiam9iZWRpYWgiLCJhIjoiY2psaTh0djE0MDkwNzNxazU4ajhiZjVkZyJ9.sZIPAm4Xd6KyRwllpD_QuQ';
//var map = L.map('mapid').setView([37.8, -96], 4);
var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.light',
}).addTo(map);

var conditionalLayer1 = L.conditionalMarkers([], {maxMarkers: 2}).addTo(map);

L.circle([51.508, -0.11], 500, {
            color: 'green',
            fillColor: '#0f3',
            fillOpacity: 0.5
        }).addTo(conditionalLayer1);
        L.circle([51.49207, -0.08034], 300, {
            color: 'green',
            fillColor: '#0f3',
            fillOpacity: 0.5
        }).addTo(conditionalLayer1);
        L.circle([51.51013, -0.0642], 100, {
            color: 'green',
            fillColor: '#0f3',
            fillOpacity: 0.5
        }).addTo(conditionalLayer1);
        var conditionalLayer2 = L.conditionalMarkers([
        L.circle([51.52466, -0.08463], 800, {
            color: 'black',
            fillColor: '#333',
            fillOpacity: 0.5
        }), L.circle([51.50832, -0.08446], 100, {
            color: 'black',
            fillColor: '#333',
            fillOpacity: 0.5
        }), L.circle([51.49667, -0.10111], 80, {
            color: 'black',
            fillColor: '#333',
            fillOpacity: 0.5
        }), L.circle([51.5174, -0.10283], 50, {
            color: 'black',
            fillColor: '#333',
            fillOpacity: 0.5
        })], {maxMarkers: 3}).addTo(map);

//L.geoJson(statesData).addTo(map);

var layerControl = L.control.layers([], {"Green" :conditionalLayer1, "Black":conditionalLayer2});
layerControl.addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Coordinates: " + e.latlng.toString())
        .openOn(map);
}




var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

map.on('click', onMapClick);


function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

console.log("leaflet test");
