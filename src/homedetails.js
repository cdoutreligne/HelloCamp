var React = require('react');
var Link = require('react-router').Link;

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
        console.log("Removed " + this.props.home.id + " from favorite");
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
        console.log("Added " + this.props.home.id + " from favorite");
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

    if (this.props.home.wish)
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
                                <span className="details-label">Type</span>
                                <span className="details-text">{home.type}</span>
                            </div>
                            <div className="row">
                                <span className="details-label">Surface</span>
                                <span className="details-text">125m²</span>
                            </div>
                            <div className="row">
                                <span className="details-label">Nb.&nbsp;Ch.</span>
                                <span className="details-text">{home.properties.bedrooms}</span>
                            </div>
                            <div className="row">
                                <span className="details-label">Address</span>
                                <span className="details-text">{home.location}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
             <div className="col-md-12">
             <span className="details-label">Description</span>
             <span className="details-text">{home.description}</span>
             
             </div>
            </div>
            <div className="container-fluid details-price-label">
                <div className="row text-right">
                    <span className="details-label">{formatPrice}€</span>
                </div>
            </div>
            <div className="pull-bottom">
                <div className="row margin-in-dark-container">
                    <div className="btn-group btn-group-justified">
                        <Link to="/searchResults" className="btn btn-less buttonBorder"><i className="fa fa-reply"></i>&nbsp;Retour aux résultats</Link>
                        {btnWish}
                        <a href="#" className="btn btn-brand buttonBorder"><i className="fa fa-euro"></i>&nbsp;Simulation</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

module.exports.HomeDetails = HomeDetails;