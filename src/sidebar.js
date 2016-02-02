var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');

var SideBar = React.createClass({

  componentDidMount: function() {
      $("#sidebar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      });
  },

  render: function() {
    return (
        <div id="sidebar-wrapper">
          <div className="sidebar-content">
            <p className="small-sidebar-block sidebar-item-main"><Link className="small-sidebar-block sidebar-item-main" to="/homepage">Home</Link></p>
            <p className="small-sidebar-block sidebar-item-main">Laissez-vous guider</p>
            <p className="small-sidebar-block sidebar-item-main"><Link className="small-sidebar-block sidebar-item-main" to="/searchform">Trouver un bien</Link></p>
            <p className="small-sidebar-block sidebar-item-main">Simulation rapide</p>
            <div className="sidebar-block-container">
              <p className="small-sidebar-block sidebar-item-main">Crédit habitation hello</p>
              <p className="small-sidebar-block sidebar-item-main">Assurance incendie top habitation</p>
              <p className="small-sidebar-block sidebar-item-main">Crédit habitation hello</p>
            </div>
            <div className="sidebar-block-container">
              <p className="small-sidebar-block sidebar-item-main">The blue room</p>
            </div>
            <div className="sidebar-block-container">
              <p className="small-sidebar-block">Faq</p>
              <p className="small-sidebar-block">Disclaimer</p>
              <p className="small-sidebar-block">Vie privée</p>
              <p className="small-sidebar-block">Politique des cookies</p>
            </div>
            <div className="sidebar-block-container">
              <a className="iconHome-twitter-disc menu-icon"></a>
              <a className="iconHome-facebook-disc menu-icon"></a>
              <a className="iconHome-mail-disc menu-icon"></a>
            </div> 
          </div>
        </div>
    );
  }
});

module.exports.SideBar = SideBar;