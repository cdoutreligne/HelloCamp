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
      <ul className="results">{resultList}</ul>
    );
  }
});

var Estate = React.createClass({
  render: function() {
    return (
      <li>
        <img src={this.props.estateInfo.image}></img>
        <p>Location: {this.props.estateInfo.location}</p>
        <p>Price: {this.props.estateInfo.price}</p>
        <a href={this.props.estateInfo.url}>More</a>
      </li>
    );
  }
});

module.exports.SearchResults = SearchResults;