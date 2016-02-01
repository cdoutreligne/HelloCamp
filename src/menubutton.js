var React = require('react');

var MenuButton = React.createClass({
  render: function() {
    return (
        <div id="page-content-wrapper" className="main-container">
            <div className="container-fluid navbar-container">
            <nav className="navbar navbar-inverse full-transparent">
              <div className="navbar-header">
                <a className="icon-menu navbar-toggle menu-button" id="sidebar-toggle">&nbsp;MENU</a>
              </div>
              <div>
                <ul className="nav navbar-nav pull-right">
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