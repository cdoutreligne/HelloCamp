var React = require('react');

var HomeCard = React.createClass({
  componentDidMount: function() {
    var id = this.props.params.id;


    console.log(id);
  },

  render: function() {
    return (


        <div className="card-container">
            <div className="card-title">Superbe maison spacieuse</div> 
            <div><img className="card-image" src="https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_110c76_110c760956862da5243ab0d4d4c37065.jpg/1024x680/1920x1080/2/ef74"/></div>
            <div className="container-fluid">
              <div className="row">
                  <span className="card-label">Type</span>
                  <span className="card-text">Appart</span>          
                  <span className="card-label">Surface</span>
                  <span className="card-text">125m²</span>               
                  <span className="card-label">Nb.&nbsp;Ch.</span>
                  <span className="card-text">5</span>
              </div>
              <div className="row">
                  <span className="card-label">Localisation </span>
                  <span className="card-text">Bruxelles</span> 
              </div>
              <div className="row text-right">
                  <span className="card-label">Prix </span>
                  <span className="card-label">350.000€</span>
              </div>
            </div>
        </div>

    );
  }
});

module.exports.HomeCard = HomeCard;