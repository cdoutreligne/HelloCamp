var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;

var SearchViaMapResults = React.createClass({

    componentDidMount: function() {
     },
 
    render: function() {
        function distance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        }

            // "coordinates": [50.7747465, 4.244960499999999],
    var latitudeA = 50.847700;
    var longitudeA = 4.360362;
    var latitudeB =  50.835926;
    var longitudeB = 4.414975;

    console.log(distance(latitudeA,longitudeA,latitudeB,longitudeB,"K"));
    // if (distance(latitudeA,longitudeA,latitudeB,longitudeB,"K")>0,5) {
    //   console.log(distance(latitudeA,longitudeA,latitudeB,longitudeB,"K"));
    // } else {
    //   console.log(distance(latitudeA,longitudeA,latitudeB,longitudeB,"K"));
    // }



    // var displayMap = false;
    // if( null!==home.coordinates){
    //     latitude = home.coordinates[0];
    //     longitude = home.coordinates[1];
    //     displayMap = true;
    // }

    // var marker = {lat: latitude, lng: longitude};
    var distanceAB = 6371 * Math.acos((Math.cos(latitudeA) * Math.cos(latitudeB) * Math.cos(longitudeB-longitudeA)) + (Math.sin(latitudeA) * Math.sin(latitudeB)));
    // console.log("distanceAB: "+distanceAB)
    var marker = {lat: latitudeA, lng: longitudeA}
    var mapMarkers = <Marker position={marker} />;
    var googleMap = "";
    googleMap=<section style={{height: "366px"}}><GoogleMapLoader containerElement={<div style={{ height: "100%" }} />} googleMapElement={<GoogleMap defaultZoom={11} defaultCenter={marker}>{ mapMarkers }</GoogleMap>}/></section>;

    

        return (


                    <div className="dark-container center-search">
                       {googleMap}
                     </div>


      );
    }
});

module.exports.SearchViaMapResults = SearchViaMapResults;
