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
      estates: [],
      coordinates: {}
    }
  },
  componentDidMount: function() {
       var currentPosition = {
           "lat" : 50.847345,
           "lng" : 4.358552
       }
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function (position) {
             currentPosition.lat = position.coords.latitude;
             currentPosition.lng = position.coords.longitude;
           }
           );
       }
       console.log("****lat in app"+currentPosition.lat)
       console.log("****lng in app"+currentPosition.lng)

       this.setState({coordinates: currentPosition});
  },

  loadData: function(){
    $.get({
      url: "http://localhost:3333/db",
      success: function(data){
        this.setState({estates: data}); 
      }.bind(this)
    });
  },

  componentWillMount: function(){
    this.loadData();
  },
  
  setSearchCriteria: function(data) {
    this.setState({searchCriteria: data});
  },

  displayDetails: function(estate) {
    this.setState({home: estate});
  },

  removeFavorite: function(favoriteId){
    var array = this.state.estates;
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].id === favoriteId){
        array[i].wish = false;
      }
    };
    this.setState({estates: array});
  },

  addFavorite: function(favoriteId){
    var array = this.state.estates;
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].id === favoriteId){
        array[i].wish = true;
      }
    };
    this.setState({estates: array});
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
              home: this.state.home, estates: this.state.estates, localCoordinates: this.state.coordinates}
          )
        }
        

        </div>
    );
  }
});

module.exports.App = App;