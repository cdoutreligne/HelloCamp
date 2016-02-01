var React = require('react');
var Results = require('./data.json');

var SearchResults = React.createClass({
  render: function() {
    var resultList = Results.estates.map(function(estate) {
      return (
        <Estate estateInfo = {estate} />
      );
    });
    return(
      <div className="container">
        <ul className="results">{resultList}</ul>
      </div>
    );
  }
});

var Estate = React.createClass({
  render: function() {
    return (
      <li className="row">
        <div className="col-xs-2">
          <img src={this.props.estateInfo.image}></img>
        </div>
        <div className="col-xs-10">
          <p>Location: {this.props.estateInfo.location}</p>
          <p>Price: {this.props.estateInfo.price}</p>
          <a href={this.props.estateInfo.url}>More</a>
        </div>
      </li>
    );
  }
});

module.exports.SearchResults = SearchResults;