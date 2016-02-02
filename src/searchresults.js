var React = require('react');
var Results = require('../data.json');
var HomeCard = require('./homecard.js').HomeCard;
var $ = require('jquery');

var SearchResults = React.createClass({
 
  filterResults: function(searchCrit) {
    console.log(searchCrit);  
    var filtered = Results.filter(function(estate) {
      if (1 + $.inArray(estate.type, searchCrit.estateType) ) {
        return true;
      } else {
        return false;
      }
    }).filter(function(estate) {
        if (searchCrit.price.min === undefined ||
            (estate.price.min !== undefined && estate.price >= searchCrit.price.min)) {
          return true;
        } else {
          return false;
        }
      })
      ;
      console.log(filtered);
    return filtered;
  },

  // componentDidMount: function() {
  //   var matches = this.filterResults(this.state.searchCriteria);
  // },

  render: function() {
    var resultList = this.filterResults(this.props.searchCriteria)
      .map(function(estate) {
        return (
          <li key={estate.id}><HomeCard home = {estate} /></li>
        );
      });
    return(
      <div className="dark-container">
        <ul className="row results">{resultList}</ul>
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