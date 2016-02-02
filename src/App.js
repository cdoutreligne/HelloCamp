var React = require('react');
var SideBar = require('./sidebar.js').SideBar;
var MenuButton = require('./menubutton.js').MenuButton;
var HomePage = require('./homepage.js').HomePage;

var App = React.createClass({
  getInitialState: function() {
    return {
      searchCriteria: {
                  estateType: [],
                  localisation: [],
                  price: {min: '', max: ''},
                  roomNbr: {min: '', max: ''},
                  square: {min: '', max: ''},
                  estateState: [],
                  garage:'',
                  terrace:''
                }
    }
  },
  setSearchCriteria: function(data) {
    this.setState({searchCriteria: data});
  },

  render: function() {
    return (
        <div id="wrapper" className="toggled">

        < SideBar />
        < MenuButton />
        { React.cloneElement(
            this.props.children, 
            {onClickSearch: this.setSearchCriteria , searchCriteria: this.state.searchCriteria }
          )
        }
        

        </div>
    );
  }
});

module.exports.App = App;