var mapboxAccessToken = 'pk.eyJ1Ijoiam9iZWRpYWgiLCJhIjoiY2psaTh0djE0MDkwNzNxazU4ajhiZjVkZyJ9.sZIPAm4Xd6KyRwllpD_QuQ';
var map = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.light',
}).addTo(map);

        var polygonArray = []
        for (i = 0; i < tx_counties.features.length; i++) {
            polygonArray.push(tx_counties.features[i]);
        }

        console.log(polygonArray) 
       
        // Compute a polygon "center", use your favorite algorithm (centroid, etc.)
        L.Polygon.addInitHook(function () {
            this._latlng = this._bounds.getCenter();
        });
        
        // Provide getLatLng and setLatLng methods for Leaflet.markercluster to be able to cluster polygons.
        L.Polygon.include({
            getLatLng: function () {
                return this._latlng;
            },
            setLatLng: function () {} // Dummy method.
        });

        var markers = L.markerClusterGroup().addTo(map);
        var geoJsonLayer = L.geoJson(polygonArray, {style:style, onEachFeature: onEachFeature});
        markers.addLayer(geoJsonLayer);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>TX county sqaure miles</h4>' +  (props ?
        '<b>' + props.COUNTY + '</b><br />' + props.SQUARE_MIL + ' mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(map);


function style(feature) {
    return {
        fillColor: getColor(feature.properties.SQUARE_MIL),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function getColor(d) {
    return d > 5000 ? '#800026' :
           d > 2500  ? '#BD0026' :
           d > 1000  ? '#E31A1C' :
           d > 750  ? '#FC4E2A' :
           d > 500  ? '#FD8D3C' :
           d > 250   ? '#FEB24C' :
           d > 100   ? '#FED976' :
                      '#FFEDA0';
}


function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geoJsonLayer.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
