var React = require('react');
var Link = require('react-router').Link;

var MenuButton = React.createClass({
  render: function() {
    return (
        <div id="page-content-wrapper" className="main-container">
            <div className="container-fluid navbar-container">
            <nav className="navbar navbar-inverse full-transparent">
              <div className="navbar-header">
                <a className="iconHome-menu navbar-toggle menu-button" id="sidebar-toggle">&nbsp;MENU</a>
              </div>
              <div>
                <ul className="nav navbar-nav pull-right">
                  <li><Link className="navbar-link" to="/wishlist"><i className="fa fa-star"></i></Link></li>
                  <li><a href="#" className="navbar-link">FR</a></li>
                </ul>
              </div>
            </nav>
            </div>
        </div>
    );
  }
});

module.exports.MenuButton = MenuButton;