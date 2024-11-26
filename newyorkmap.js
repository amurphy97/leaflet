var mapOptions = {
 center: [40.74716389064308, -73.99127541504383], //set center Lat/Long of your area of interest
 zoom: 16, //set initial zoom level
 maxZoom : 24,  //set max zoom level
 tap : false //fix popup bug on Safari
 }

//Creates map object according to map options
var map = new L.map('map', mapOptions);

//Example of an externally called basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});

Esri_WorldImagery.addTo(map);

var chelseahotel= L.marker( [40.747131378087076, -73.99132905922393] ).addTo(map);
//adds marker at designated lat/long

chelseahotel.bindPopup("<b>Hotel</b>");

var bryantpark= L.marker( [40.75366461843432, -73.98361718991177] ).addTo(map);

bryantpark.bindPopup("Bryant Park Winter Village");

var library= L.marker( [40.75327980013247, -73.98207101319153] ).addTo(map);

library.bindPopup("NY Public Library");

var centralpark= L.marker( [40.782774013886744, -73.96550830155009] ).addTo(map);

centralpark.bindPopup("Central Park");

var chelseamarket= L.marker( [40.742569630692486, -74.00599369970013] ).addTo(map);

chelseamarket.bindPopup("Chelsea Market");

var timessquare= L.marker( [40.75812908070242, -73.98530656901116] ).addTo(map);

timessquare.bindPopup("Times Square");

var met= L.marker( [40.77960717917997, -73.96296505366601] ).addTo(map);

met.bindPopup("The Met");

var moma= L.marker( [40.76162763074822, -73.97754652113072] ).addTo(map);

moma.bindPopup("Museum of Modern Art");

var naturalhistory= L.marker( [40.787563008515605, -73.97948136525497] ).addTo(map);

naturalhistory.bindPopup("Museum of Natural History");

var highline= L.marker( [40.748130647852314, -74.00477563223998] ).addTo(map);

highline.bindPopup("The High Line");

var empire= L.marker( [40.74853793331494, -73.98572879600346] ).addTo(map);

empire.bindPopup("Empire State Building");

var broadway= L.marker( [40.7633946422991, -73.98312797456717] ).addTo(map);

broadway.bindPopup("Broadway Theatre");

var brooklynbridge= L.marker( [40.706272961578804, -73.99684258912316] ).addTo(map);

brooklynbridge.bindPopup("Brooklyn Bridge");

var bridgeview= L.marker( [40.70335989239534, -73.98935158250589] ).addTo(map);

bridgeview.bindPopup("Manhattan Bridge View");

var madisonsq= L.marker( [40.74227628501139, -73.98805286716953] ).addTo(map);

madisonsq.bindPopup("Madison Sq Garden");

var flatiron= L.marker( [40.74108947920513, -73.98974802325955] ).addTo(map);

flatiron.bindPopup("Flat Iron Building");

var onesummit= L.marker( [40.7529102653717, -73.9787246457317] ).addTo(map);

onesummit.bindPopup("SUMMIT One Vanderbilt");

var grandcentral= L.marker( [40.7533410180116, -73.97737281239407] ).addTo(map);

grandcentral.bindPopup("Grand Central Terminal");

var dumboPolygon = L.polygon([
    [40.704481, -73.993688],
    [40.702578, -73.991671],
    [40.705522, -73.984547],
    [40.701667, -73.985256]
]).addTo(map);

dumboPolygon.bindPopup("Dumbo neighbourhood");

var outlet= L.marker( [41.31712208041861, -74.12562327456924] ).addTo(map);

outlet.bindPopup("Woodbury Outlet");
