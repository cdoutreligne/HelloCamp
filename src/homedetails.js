var React = require('react');
var Link = require('react-router').Link;

var HomeDetails = React.createClass({
  getInitialState: function() {
    return {
      home: {}
    };
  },

  render: function() {

    var home = this.props.home;
    var carouselId = "imgCarousel" + home.id;
    var carouselIdHref = "#imgCarousel" + home.id;
    var carouselItems = home.image.map(function(item) {
      var className = (item === home.image[0]) ? "item active" : "item";
      return (
        <div className={className}>
          <img className="card-image" src={item}/>
        </div>
      );
    }.bind(this)
  );

    return (
        <div className="dark-container">
            <div className="card-title">{ home.title }</div> 
            <div className="row">
              <div className="col-md-12">
                <div id={carouselId} className="carousel card-carousel" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner text-center" role="listbox">
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
            </div>
            <div className="container-fluid">
              <div className="row">
                  <span className="card-label">Type</span>
                  <span className="card-text">{ home.type }</span>          
                  <span className="card-label">Surface</span>
                  <span className="card-text">125m²</span>               
                  <span className="card-label">Nb.&nbsp;Ch.</span>
                  <span className="card-text">{ home.properties.bedrooms }</span>
              </div>
              <div className="row">
                  <div className="col-md-3 col-nopadding card-label">Address</div>
                  <div className="col-md-9 col-nopadding card-text">{ home.location }</div>
              </div>
            </div>

            <div className="container-fluid price-label">
              <div className="row text-right">
                  <span className="card-label">{ home.price }€</span>
              </div>
            </div>

            <div className="container-fluid bottom-align-block">
              <div className="row">
                <div className='btn-group btn-group-full'>
                  <Link to="/searchResults" className="btn btn-less btn-full"><i className="fa fa-bars"></i>&nbsp;List</Link>
                  <a href="#" className="btn btn-less btn-full"><i className="fa fa-star-o"></i>&nbsp;Favori</a>
                  <a href="#" className="btn btn-brand btn-full"><i className="fa fa-euro"></i>&nbsp;Simulation</a>
                </div>
              </div>
            </div>
        </div>
    );
  }
});

module.exports.HomeDetails = HomeDetails;