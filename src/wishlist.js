var React = require('react');
var Results = require('../data.json');
var HomeCard = require('./homecard.js').HomeCard;

var WishList = React.createClass({
  render: function(){


    var wishlistIds = this.props.wishlistIds;

    var filterList = function(){
      var tempArray = [];
      for (var i = Results.length - 1; i >= 0; i--) {
        for (var j = wishlistIds.length - 1; j >= 0; j--) {
          if(wishlistIds[j] === Results[i].id) {
            tempArray.push(Results[i]);
          }
        };
      };
      return tempArray;
    }

    var resultList = filterList().map(function(estate) {
      return (
        <li><HomeCard home = {estate} /></li>
      );
    });

    return(
      <div className="dark-container">
        <ul className="row results">{resultList}</ul>
      </div>
    );
  }
});

module.exports.WishList = WishList;