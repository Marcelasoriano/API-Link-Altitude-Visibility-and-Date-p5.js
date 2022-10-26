let backgroundMap;
let iss;
let mapGeoLeft = 180;
let mapGeoRight = -180;
let mapGeoTop = -90;
let mapGeoBottom = 90;
let lat, lon, xgeo, ygeo;

function setup() {
  createCanvas(800, 400);
  background(backgroundMap);
  noStroke();
  setInterval(getISS, 5000);
iss = loadJSON("https://api.wheretheiss.at/v1/satellites/25544", showISS);
}

function preload() {
  backgroundMap = loadImage("earth.jpg");
}

function getISS() {
  iss = loadJSON("https://api.wheretheiss.at/v1/satellites/25544", showISS);
}

function showISS() {
  lat = iss.latitude;
  lon = iss.longitude;

  let alt = iss.altitude;
  let vis = iss.visibility;
  let tim = iss.timestamp;

  xgeo = (width * (lon - mapGeoLeft)) / (mapGeoRight - mapGeoLeft);
  ygeo = height - (height * (lat - mapGeoBottom)) / (mapGeoTop - mapGeoBottom);

  fill(255, 0, 0);
  circle(xgeo, ygeo, 5);

  fill(255);
  rect(0, height-25, width, height);
  fill(255, 0, 0);
  text("Altitude: "+alt+" - Visibility: "+vis+" - Date: "+Date(tim), 10, height-10);

  noLoop();
}