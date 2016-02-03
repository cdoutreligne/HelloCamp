var React = require('react');
var HomeCard = require('./homecard.js').HomeCard;

var WishList = React.createClass({
  render: function(){
    var Results = this.props.estates;
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
          <HomeCard home = {estate} wish={true} removeFavorite={this.props.removeFavorite}/>
        </li>
      );
    }.bind(this));
    return(
      <div className="dark-container">
        <h3 className="dark-container-title">{resultList.length} Résults</h3>
        <ul className="row results">{resultList}</ul>
      </div>
    );
  }
});

module.exports.WishList = WishList;