var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var HomeCard = require('./homecard.js').HomeCard;
var browserHistory = require('react-router').browserHistory;


var SearchViaMapResults = React.createClass({

    getInitialState: function() {
        return {
          radiusState: 10,
          homeMap :{}
        }
    },
    componentDidMount: function() {
        this.refs.radius.value = this.state.radiusState;
    },
    handleChange: function(event){

        if (isNaN(event.target.value)) {
            $("#" + event.target.name).addClass("has-error");
            return;
        } else {
            $("#" + event.target.name).removeClass("has-error");
        }

        var radius = this.refs.radius.value;
        if (radius>0){
            this.setState({radiusState:radius});
        }
    },

    filterResults: function(coordinates) {
        var Results = this.props.estates;
      function distance(lat1, lon1, lat2, lon2) {
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
        var radius = this.state.radiusState;
        var filtered = Results.filter(function(estate) {
           //coordonnée du client
            var latitudeA;
            var longitudeA;
            //coordonnée du bien
            var latitudeB;
            var longitudeB;

            if (null !== coordinates) {
                latitudeA = coordinates.lat;
                longitudeA = coordinates.lng;
            } else {
                return false;
            };

            if (null !== estate.coordinates) {
                latitudeB = estate.coordinates[0];
                longitudeB = estate.coordinates[1];
                var dist = distance(latitudeA, longitudeA, latitudeB, longitudeB, radius);
                return (dist<=radius);
                
            } else {
                return false;
            };
        });
        return filtered;
    },
    handleMapClick: function(estate, event) {
        console.log("click***********");
        // this.props.onDisplayDetails(estate);
        this.setState({homeMap:estate});
        // browserHistory.push('/homedetails');

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
        var results = resultList.length;

        var resultListForMap = cloneObject(resultList);
        var i = -1;
        var markers = resultListForMap.map(function(estate) {
        // console.log(estate);

             i++;
            return ({
                lat: estate.coordinates[0],
                lng: estate.coordinates[1],
                icon: "img/home_marker_small.png",
                estate: estate
            });
        }.bind(this));

        
        var mapMarkers = markers.map(function(marker) {
            var mymarker = {
                lat: marker.lat,
                lng: marker.lng
            };//onMouseover={this.handleMapClick.bind(this, marker.estate)} 
            return (<Marker position={mymarker} onClick={this.handleMapClick.bind(this, marker.estate)} icon={marker.icon} />);
        }.bind(this));


        var googleMap = "";
        googleMap = <section style={{height: "400px"}}><GoogleMapLoader containerElement={<div style={{ height: "100%" }} />} googleMapElement={<GoogleMap  defaultZoom={11} defaultCenter={marker}>{ mapMarkers }</GoogleMap>}/></section>;

        resultList = resultList.map(function(estate) {
            return (
                <li key={estate.id}><HomeCard home={estate} removeFavorite={this.props.removeFavorite} addFavorite={this.props.addFavorite} displayDetails={this.props.onDisplayDetails}/></li>
            );
        }.bind(this));
        var individualMap ="";
        if(this.state.homeMap.id){
            individualMap = <HomeCard home={this.state.homeMap} removeFavorite={this.props.removeFavorite} addFavorite={this.props.addFavorite} displayDetails={this.props.onDisplayDetails}/>;
        }
        return (
        <div className="dark-container with-buttons-bottom">
            <div className="form-group"><h3 className="dark-container-title">{results>0 ? results : "Aucun"}&nbsp;{results>1 ? "résultats" : "résultat"} autour de moi dans un rayon de <input type="text" name="radius" className="form-control input-inline-small" id="radius" ref="radius" onChange={this.handleChange} /> km</h3></div>
            <div className="row">
                <div className="col-md-12 padding-zero">

                        <div className="col-md-8 dark-container-map center-search-map">
                          {googleMap}
                        </div>
                        <div className="col-md-1">
                        <ul className="row results row-normal">
                        <li >
                          {individualMap}
                          </li>
                          </ul>
                        </div>

                </div>
            </div>
            <ul className="row results row-normal">{resultList}</ul>
            <Link to="/searchform" className="btn btn-brand-flat btn-bottom-right"><i className="fa fa-search"></i>&nbsp;Nouvelle recherche</Link>
        </div>
);}
});

module.exports.SearchViaMapResults = SearchViaMapResults;