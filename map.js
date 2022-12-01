let mymap = L.map('mapid');
let osmUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
let osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
let osm = new L.TileLayer(osmUrl, {
    attribution: osmAttrib
});
mymap.addLayer(osm);
mymap.setView([38.246242, 21.7350847], 16);


//sample data values for populate map
let data = {
    "type": "FeatureCollection",
    "name": "supermarket && convenience",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
            "type": "Feature",
            "properties": {
                "Name": "ΑΒ Βασιλόπουλος",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.725032, 38.2321307]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "ΑΒ Βασιλόπουλος",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7492675, 38.2612991]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Lidl",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7607333, 38.2100585]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Andrikópoulos",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7303537, 38.2429315]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Lidl",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.74391, 38.263287]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SUPERMARKET \"3A ARAPIS\"",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7398956, 38.2506085]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "ΣΚΛΑΒΕΝΙΤΗΣ",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7372091, 38.2464889]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "SUPERMARKET \"3A ARAPIS\"",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.738641, 38.241149]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Arapis Market \"3A Arapis\" Ltd",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7338816, 38.2373888]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Σκλαβενιτης",
                "description": "supermarket"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7485919, 38.2414963]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "LAGIOU MARIA",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7339537, 38.222]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Μίνι Μαρκετ",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7313905, 38.245127]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "COFFEE DAY MINI MARKET",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.749195, 38.2248512]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Kioskys Convenience Store",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7338458, 38.23683]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "AVIN",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7597707, 38.2740328]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "bp",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7644031, 38.277433]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "Παραδοσιακο παντοπωλειο",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.733827, 38.245317]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "CONVENIENCE STORE",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.749591, 38.261448]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "Name": "DELLINIKON",
                "description": "convenience"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [21.7383458, 38.250432]
            }
        }
    ]
}

mymap.addLayer(
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
); //base layer

////////////populate map with GeoJSON feature layer
var featuresLayer = new L.GeoJSON(data, {
    onEachFeature: function (feature, marker) {
        marker.bindPopup("<h4>" + feature.properties.Name + "</h4>");

    }
});
featuresLayer.addTo(mymap);