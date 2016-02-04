var React = require('react');
var Link = require('react-router').Link;

var HomePage = React.createClass({
  render: function() {
    return (
        <div className="container-fluid vertical-center">
          <div className="row">
            <img className="home-image" src="img/girl_table_top.jpg"/>
            <div className="col-md-6 col-md-offset-3 text-center">
              <img className="md-logo" src="img/logo-hellobank-white-baseline.svg"/>
                <h1>Hello home!</h1>
                <h2>Acheter un bien, c’est simple et accessible</h2>
                <br/>
                <Link to="/searchresults" className="btn btn-danger">Laissez-vous guider</Link>
                <p className="small-text">Passer directement à la simulation</p>
            </div>
          </div>
        </div>
    );
  }
});

module.exports.HomePage = HomePage;