var mapboxAccessToken = 'pk.eyJ1Ijoiam9iZWRpYWgiLCJhIjoiY2psaTh0djE0MDkwNzNxazU4ajhiZjVkZyJ9.sZIPAm4Xd6KyRwllpD_QuQ';
var map = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.light',
}).addTo(map);


var features = L.deflate({minSize: 10})
features.addTo(map);
var geoLayer = L.geoJson(tx_counties, {style:style}).addTo(features);

var markers = L.markerClusterGroup();
markers.addLayer(features);
map.addLayer(markers);


function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

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
