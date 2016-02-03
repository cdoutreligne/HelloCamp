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
                },
      wishlistIds: [7, 5, 3]
    }
  },
  
  setSearchCriteria: function(data) {
    this.setState({searchCriteria: data});
  },

  displayDetails: function(estate) {
    this.setState({home: estate});
  },

  removeFavorite: function(favoriteId){
    var array = this.state.wishlistIds;
    var index = array.indexOf(favoriteId);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({wishlistIds: array});
  },

  addFavorite: function(favoriteId){
    var array = this.state.wishlistIds;
    array.push(favoriteId);
    this.setState({wishlistIds: array});
  },

  render: function() {
    return (
        <div id="wrapper" className="toggled">

        < SideBar />
        < MenuButton/>
        { React.cloneElement(
            this.props.children, 
            {onClickSearch: this.setSearchCriteria, onDisplayDetails: this.displayDetails, searchCriteria: this.state.searchCriteria, 
              wishlistIds: this.state.wishlistIds, removeFavorite: this.removeFavorite, addFavorite: this.addFavorite,
              home: this.state.home}
          )
        }
        

        </div>
    );
  }
});

module.exports.App = App;