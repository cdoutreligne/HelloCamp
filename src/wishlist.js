var React = require('react');
var Results = require('../data.json');
var HomeCard = require('./homecard.js').HomeCard;

var WishList = React.createClass({
  handleRemoveFav: function(id){
    this.props.removeFavorite(id);
  },

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
        <li key={estate.id}>
          <HomeCard home = {estate} wish={true}/>
          <a className="btn btn-default" onClick={this.handleRemoveFav.bind(this, estate.id)}>Remove Fav</a>
        </li>
      );
    }.bind(this));
    return(
      <div className="dark-container">
        <ul className="row results">{resultList}</ul>
      </div>
    );
  }
});

module.exports.WishList = WishList;