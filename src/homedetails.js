var React = require('react');
var Link = require('react-router').Link;
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;

var HomeDetails = React.createClass({

  handleRemoveWish: function()
  {
    this.props.removeFavorite(this.props.home.id);
    this.props.home.wish = false;

    $.ajax({
      url: "http://localhost:3333/" + this.props.home.id,
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(this.props.home),
      type: 'POST',
      complete : function(){
        // console.log("Removed " + this.props.home.id + " from favorite");
      }.bind(this)
    });
  },

  handleAddWish: function() {
    this.props.addFavorite(this.props.home.id);
    this.props.home.wish = true;

    $.ajax({
      url: "http://localhost:3333/" + this.props.home.id,
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(this.props.home),
      type: 'POST',
      complete : function(){
        // console.log("Added " + this.props.home.id + " from favorite");
      }.bind(this)
    });
  },

  render: function() {

    var home = this.props.home;
    var carouselId = "imgCarousel" + home.id;
    var carouselIdHref = "#imgCarousel" + home.id;
    var formatPrice = Intl.NumberFormat().format(home.price)
    var carouselItems = home.image.map(function(item) {
      var className = (item === home.image[0]) ? "item active" : "item";
      return (
        <div className={className}>
          <img src={item}/>
        </div>
      );
    }.bind(this)
  );

    var btnWish;

    if (home.wish)
    {
      btnWish = <a className="btn btn-less buttonBorder" onClick={ this.handleRemoveWish }><i className="fa fa-star wish-star"></i>&nbsp;Enlever</a>;
    } else {
      btnWish = <a className="btn btn-less buttonBorder" onClick={ this.handleAddWish }><i className="fa fa-star-o"></i>&nbsp;Ajouter</a>;
    }
    var homeType = "";
    switch (home.type)
    {
      case "house" :
        homeType = "- Maison";
        break;
      case "appart" :
        homeType = "- Appartement";
        break;
      default :
        homeType = "";
        break;
    }
    // "coordinates": [50.7747465, 4.244960499999999],
    var latitude;
    var longitude;
    var displayMap = false;
    if( null!==home.coordinates){
        latitude = home.coordinates[0];
        longitude = home.coordinates[1];
        displayMap = true;
    }
    var marker = {lat: latitude, lng: longitude};
    var mapMarkers = <Marker position={marker} />;
    var googleMap = "";
    if (displayMap){
      googleMap=<section style={{height: "366px"}}><GoogleMapLoader containerElement={<div style={{ height: "100%" }} />} googleMapElement={<GoogleMap defaultZoom={11} defaultCenter={marker}>{ mapMarkers }</GoogleMap>}/></section>;
    };
    return (
         <div className="white-container center">
            <div className="details-title">{ home.address.city } { homeType }</div>
            <div className="row">
                <div className="col-md-8">
                    <div id={carouselId} className="carousel " data-ride="carousel" data-interval="false">
                        <div id="carouselDetails" className="carousel-inner text-center" role="listbox">
                            {carouselItems}
                        </div>
                        <a className="left carousel-control" href={carouselIdHref} role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href={carouselIdHref} role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 padding-zero">
                                    <span className="details-title">{home.title}</span>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-5 padding-zero">
                                    <span className="details-label">Superficie</span>
                                </div>
                                <div className="col-md-7 padding-zero">
                                    <span className="details-text">{home.surface} m²</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 padding-zero">
                                    <span className="details-label">Chambres</span>
                                </div>
                                <div className="col-md-7 padding-zero">
                                    <span className="details-text">{home.properties.bedrooms}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 padding-zero">
                                    <span className="details-label">Addresse</span>
                                </div>
                                <div className="col-md-7 padding-zero">
                                    <span className="details-text">{ (home.address.street !== "") ? home.address.street : ""}{ (home.address.street !== "" && home.address.number !== "") ? ", " : "" }{ (home.address.number !== "") ? home.address.number : "" }</span>
                                </div>
                            </div>
                            <div className="row">
                             <div className="col-md-12 padding-zero">
                             {googleMap}
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 addSpace">
                        <span className="details-desc details-desc-align">Description</span><br/>
                        <div className="details-text details-desc-align justify">{home.description}</div>
                    </div>
                </div>
                <div className="container-fluid details-price-label">
                    <div className="row text-right">
                        <span className="details-label">{formatPrice}€</span>
                    </div>
                </div>
                <div className="pull-bottom">
                    <div className="row margin-in-white-container">
                        <div className="btn-group btn-group-justified">
                            <Link to="/searchResults" className="btn btn-less buttonBorder"><i className="fa fa-reply"></i>&nbsp;Retour aux résultats</Link>
                            {btnWish}
                            <Link to="/simulation" href="#" className="btn btn-brand buttonBorder"><i className="fa fa-euro"></i>&nbsp;Simulation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

module.exports.HomeDetails = HomeDetails;