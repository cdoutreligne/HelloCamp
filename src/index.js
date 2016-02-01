var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./app.js').App;
var HomePage = require('./homepage.js').HomePage;
var SearchForm = require('./searchform.js').SearchForm;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="homepage" component={HomePage} />
      <Route path="searchform" component={SearchForm} />
    </Route>
  </Router>, 
  document.getElementById('root')
);
