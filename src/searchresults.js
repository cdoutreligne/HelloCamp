var React = require('react');
var Link = require('react-router').Link;
var Results = require('../data.json');
var HomeCard = require('./homecard.js').HomeCard;
var $ = require('jquery');

var SearchResults = React.createClass({
 
  filterResults: function(searchCrit) {
    var filtered = Results.filter(function(estate) {
      if (searchCrit.estateType.length == 0 || 1 + $.inArray(estate.type, searchCrit.estateType) ) {
        return true;
      } else {
        return false;
      }
    }).filter(function(estate) {
        if (searchCrit.price.min === '' ||
            (estate.price !== undefined && estate.price !== '' && estate.price >= searchCrit.price.min)) {
          return true;
        } else {
          return false;
        }
      })
      .filter(function(estate) {
        if (searchCrit.price.max === '' ||
            (estate.price !== undefined && estate.price !== '' && estate.price <= searchCrit.price.max)) {
          return true;
        } else {
          return false;
        }
      })
      .filter(function(estate) {
        if (searchCrit.roomNbr.min === '' ||
            (estate.properties.bedrooms !== undefined && estate.properties.bedrooms !== '' && estate.properties.bedrooms >= searchCrit.roomNbr.min)) {
          return true;
        } else {
          return false;
        }
      })
      .filter(function(estate) {
        if (searchCrit.roomNbr.max === '' ||
            (estate.properties.bedrooms !== undefined && estate.properties.bedrooms !== '' && estate.properties.bedrooms <= searchCrit.roomNbr.max)) {
          return true;
        } else {
          return false;
        }
      })
      .filter(function(estate) {
        if (searchCrit.square.min === '' ||
            (estate.square !== undefined && estate.square !== '' && estate.square >= searchCrit.square.min)) {
          return true;
        } else {
          return false;
        }
      })
      .filter(function(estate) {
        if (searchCrit.square.max === '' ||
            (estate.square !== undefined && estate.square !== '' && estate.square <= searchCrit.square.max)) {
          return true;
        } else {
          return false;
        }
      })
      ;
    return filtered;
  },

  // componentDidMount: function() {
  //   var matches = this.filterResults(this.state.searchCriteria);
  // },

  render: function() {
    var resultList = this.filterResults(this.props.searchCriteria);
    var results = resultList.length; 
    resultList = resultList.map(function(estate) {
        return (
          <li key={estate.id}><HomeCard home={estate} removeFavorite={this.props.removeFavorite} addFavorite={this.props.addFavorite} displayDetails={this.props.onDisplayDetails}/></li>
        );
      }.bind(this));
    return(
      <div className="dark-container">
        <h3 className="dark-container-title">{results>0 ? results : "Aucun"}&nbsp;{results>1 ? "résultats" : "résultat"}</h3>
        <ul className="row results">{resultList}</ul>
        <Link to="/searchform" className="btn btn-primary col-xs-offset-1">Nouvelle recherche</Link>
      </div>
    );
  }
});

// var Estate = React.createClass({
//   render: function() {
//     return (
//       <li className="row">
//         <div className="col-xs-2">
//           <img src={this.props.estateInfo.image[0]}></img>
//         </div>
//         <div className="col-xs-10">
//           <p>Location: {this.props.estateInfo.location}</p>
//           <p>Price: {this.props.estateInfo.price}</p>
//           <a href={this.props.estateInfo.url}>More</a>
//         </div>
//       </li>
//     );
//   }
// });

module.exports.SearchResults = SearchResults;