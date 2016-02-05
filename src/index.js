var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./App.js').App;
var HomePage = require('./homepage.js').HomePage;
var SearchForm = require('./searchform.js').SearchForm;
var SearchResults = require('./searchresults.js').SearchResults;
var SearchViaMapResults = require('./searchViaMapResults.js').SearchViaMapResults;
var HomeDetails = require('./homedetails.js').HomeDetails;
var HomeCard = require('./homecard.js').HomeCard;
var WishList = require('./wishlist.js').WishList;
var Simulation = require('./simulation.js').Simulation;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="homepage" component={HomePage} />
      <Route path="searchform" component={SearchForm} />
      <Route path="searchresults" component={SearchResults} />
      <Route path="SearchViaMapResults" component={SearchViaMapResults} />
      <Route path="homedetails" component={HomeDetails} />
      <Route path="homecard/:id" component={HomeCard} />
      <Route path="wishlist" component={WishList} />
      <Route path="simulation" component={Simulation} />
    </Route>
  </Router>, 
  document.getElementById('root')
);
