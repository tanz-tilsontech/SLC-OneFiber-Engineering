verifyUser();

function verifyUser() {
  var owner = "tilson"
  if (sessionStorage.getItem("fulcrum_useremail") === null || sessionStorage.getItem("fulcrum_useremail").indexOf(owner) === -1) {
    $("#table-container").hide();
    $("#map-container").hide();
    $("#legend-btn").hide();
    $("#refresh-btn").hide();
    $(".navbar-collapse").css("opacity", "0");
    alert("This login does not have access to this page.");
  };
};


var map = L.map('map').setView([45.526, -122.667], 13);

L.esri.basemapLayer('Streets').addTo(map);
L.esri.featureLayer({
  url: 'https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/109'
}).addTo(map);