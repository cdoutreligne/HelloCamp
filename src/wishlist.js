var React = require('react');
var HomeCard = require('./homecard.js').HomeCard;
var Link = require('react-router').Link;

var WishList = React.createClass({
  render: function(){
    var Results = this.props.estates;
    var filterList = function(){
      var tempArray = [];
      for (var i = Results.length - 1; i >= 0; i--) {
        if(Results[i].wish){
          tempArray.push(Results[i]);
        }
      };
      return tempArray;
    }
    var resultList = filterList().map(function(estate) {
      return (
        <li key={estate.id}>
          <HomeCard home = {estate} removeFavorite={this.props.removeFavorite} displayDetails={this.props.onDisplayDetails}/>
        </li>
      );
    }.bind(this));
    var results = resultList.length; 
    return(
      <div className="dark-container with-buttons-bottom">
        <h3 className="dark-container-title">{results>0 ? results : "Aucun"}&nbsp;{results>1 ? "biens" : "bien"} dans votre watchlist</h3>
        <ul className="row results">{resultList}</ul>
        <div className="btn-bottom-right">
        <Link to="/searchresults" className="btn btn-brand-flat"><i className="fa fa-reply"></i>&nbsp;Retour à la liste</Link>&nbsp;&nbsp;
        <Link to="/searchform" className="btn btn-brand-flat"><i className="fa fa-search"></i>&nbsp;Nouvelle recherche</Link>
        </div>
      </div>
    );
  }
});

module.exports.WishList = WishList;