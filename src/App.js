var React = require('react');
var SideBar = require('./sidebar.js').SideBar;
var MenuButton = require('./menubutton.js').MenuButton;
var HomePage = require('./homepage.js').HomePage;

var App = React.createClass({
  render: function() {
    return (
        <div id="wrapper" className="toggled">

        < SideBar />
        < MenuButton />
        
        { React.cloneElement(this.props.children) }

        </div>
    );
  }
});

module.exports.App = App;