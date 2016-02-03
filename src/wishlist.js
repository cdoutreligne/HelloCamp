var React = require('react');
var HomeCard = require('./homecard.js').HomeCard;
var Link = require('react-router').Link;

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
          <HomeCard home = {estate} removeFavorite={this.props.removeFavorite}/>
        </li>
      );
    }.bind(this));
    var results = resultList.length; 
    return(
      <div className="dark-container with-buttons-bottom">
        <h3 className="dark-container-title">{results>0 ? results : "Aucun"}&nbsp;{results>1 ? "résultats" : "résultat"}</h3>
        <ul className="row results">{resultList}</ul>
        <Link to="/searchform" className="btn btn-primary btn-bottom-left">Nouvelle recherche</Link>
      </div>
    );
  }
});

module.exports.WishList = WishList;