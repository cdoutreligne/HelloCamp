var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var HomeCard = require('./homecard.js').HomeCard;

var SearchViaMapResults = React.createClass({


    filterResults: function(coordinates) {
        var Results = this.props.estates;
console.log("Results: "+Results);
console.log("coordinates: "+coordinates);

      function distance(lat1, lon1, lat2, lon2) {
        console.log("lat1 :"+lat1);
        console.log("lon1 :"+lon1);
        console.log("lat2 :"+lat2);
        console.log("lon2 :"+lon2);

            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;

            return dist;
        }
 
        var filtered = Results.filter(function(estate) {
            // hardcodé temporairement
            var radius = 20.0; //x km
            //coordonnée du client
            var latitudeA;
            var longitudeA;
            //coordonnée du bien
            var latitudeB;
            var longitudeB;

            if (null !== coordinates) {
                latitudeA = coordinates.lat;
                console.log("coordinates.lat: "+coordinates.lat);
                longitudeA = coordinates.lng;
                 console.log("coordinates.lng: "+coordinates.lng);
            } else {
                console.log("*** pas de coordonnée de client ***");

                return false;
            };

            if (null !== estate.coordinates) {
                latitudeB = estate.coordinates[0];
                longitudeB = estate.coordinates[1];
                var dist = distance(latitudeA, longitudeA, latitudeB, longitudeB, radius);
console.log(dist);
                return (dist<=radius);
                
            } else {
                console.log("*** pas de coordonées du bien ***");

                return false;
            };
        });
        return filtered;
    },

    render: function() {
        function cloneObject(obj) {
            if (obj === null || typeof obj !== 'object') {
                return obj;
            }
            var temp = obj.constructor();
            for (var key in obj) {
                temp[key] = cloneObject(obj[key]);
            }
            return temp;
        }
        var marker = this.props.localCoordinates;

        var resultList = this.filterResults(marker);
console.log("result list: "+resultList)
        var results = resultList.length;
        var resultListForMap = cloneObject(resultList);

        var markers = resultListForMap.map(function(estate) {
            return ({
                lat: estate.coordinates[0],
                lng: estate.coordinates[1]
            });
        }.bind(this));
        var mapMarkers = markers.map(function(marker) {
            var mymarker = {
                lat: marker.lat,
                lng: marker.lng
            };
            return (<Marker position={mymarker} />);
        });

        var googleMap = "";
        googleMap = <section style={{height: "366px"}}><GoogleMapLoader containerElement={<div style={{ height: "100%" }} />} googleMapElement={<GoogleMap defaultZoom={11} defaultCenter={marker}>{ mapMarkers }</GoogleMap>}/></section>;



        resultList = resultList.map(function(estate) {
            return (
                <li key={estate.id}><HomeCard home={estate} removeFavorite={this.props.removeFavorite} addFavorite={this.props.addFavorite} displayDetails={this.props.onDisplayDetails}/></li>
            );
        }.bind(this));

        return (

            <div className="dark-container with-buttons-bottom">
       <div className="dark-container center-search">
                       {googleMap}
                     </div>
        <h3 className="dark-container-title">{results>0 ? results : "Aucun"}&nbsp;{results>1 ? "résultats" : "résultat"}</h3>
        <ul className="row results row-normal">{resultList}</ul>
        <Link to="/searchform" className="btn btn-brand-flat btn-bottom-right"><i className="fa fa-search"></i>&nbsp;Nouvelle recherche</Link>
      </div>

        );

    }
});

module.exports.SearchViaMapResults = SearchViaMapResults;
