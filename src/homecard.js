var React = require('react');

var HomeCard = React.createClass({
  render: function() {
    return (
        <div className="light-container">
            <div>Superbe maison spacieuse</div> 
            <div><img src="https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_110c76_110c760956862da5243ab0d4d4c37065.jpg/1024x680/1920x1080/2/ef74"/></div>
            <div></div>
        </div>
    );
  }
});

module.exports.HomeCard = HomeCard;