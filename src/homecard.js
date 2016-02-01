var React = require('react');

var HomeCard = React.createClass({
  getInitialState: function() {
    return {
      home: {}
    };
  },

  componentDidMount: function() {
    var id = this.props.params.id;

    this.setState(this.props.home);
  },

  render: function() {
    return (
        <div className="card-container">
            <div className="card-title">Superbe maison spacieuse</div> 
            <div><img className="card-image" src={ this.props.home.image[0] }/></div>
            <div className="container-fluid">
              <div className="row">
                  <span className="card-label">Type</span>
                  <span className="card-text">{ this.props.home.type }</span>          
                  <span className="card-label">Surface</span>
                  <span className="card-text">125m²</span>               
                  <span className="card-label">Nb.&nbsp;Ch.</span>
                  <span className="card-text">{ this.props.home.properties.bedrooms }</span>
              </div>
              <div className="row">
                  <span className="card-label">Localisation </span>
                  <span className="card-text">{ this.props.home.properties.location }</span> 
              </div>
              <div className="row text-right">
                  <span className="card-label">Prix </span>
                  <span className="card-label">{ this.props.home.price }€</span>
              </div>
            </div>
        </div>
    );
  }
});

module.exports.HomeCard = HomeCard;