var React = require('react');

var HomeDetails = React.createClass({
  getInitialState: function() {
    return {
      home: {
        "id": 1,
        "type": "house",
        "url": "https://www.realo.be/en/hendrik-vanhouchestraat-24-1600-sint-pieters-leeuw/2800146?l=745666888\n",
        "coordinates": [50.7747465, 4.244960499999999],
        "location": "Hendrik Vanhouchestraat 24, 1600 Sint-Pieters-Leeuw",
        "price": "335000",
        "description": "Maison très practique avec vue magnifique! Au rdc un hall d'entrée, living, salle à manger, cuisine equipée et garage. Au 1er étage un hall de nuit, 3 chambres spacieuses, une chambre de douche et un petit grenier. Aussi equipé avec un grenier, une terrasse avec débarras et un joli jardin!",
        "title": "Maison 3 façades",
        "properties": {
          "bathrooms": 1,
          "bedrooms": 3
        },
        "image": ["https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_110c76_110c760956862da5243ab0d4d4c37065.jpg/1024x680/1920x1080/2/ef74", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_b6eaf1_b6eaf15ea477b31ec93e5c224093042e.jpg/1024x680/1920x1080/2/4f2c", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_39fd5e_39fd5ed2f94650119e9599cab34b8846.jpg/1024x680/1920x1080/2/8d6a", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_f22348_f22348c372c10e8b4afbdcd2a1810688.jpg/1024x680/1920x1080/2/e00c", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_81ec6f_81ec6f906ff090776d0623de365cfb2a.jpg/680x1024/1920x1080/2/4ce3", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_951ec4_951ec402d61d3aabd2a37c8ff5ae7e9f.jpg/1024x680/1920x1080/2/c15e", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_eb859b_eb859b7383e47a2fbb4c6a6986f4064c.jpg/1024x680/1920x1080/2/16f0", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_e54b2b_e54b2b566e6320c35b145c3eeb3ab80f.jpg/1024x680/1920x1080/2/29f5", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_d490bd_d490bd0f299b15d602f9216ee0f067c5.jpg/1024x680/1920x1080/2/915f", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_0168dc_0168dc31d839322d0f42ece92b271791.jpg/1024x690/1920x1080/2/8a6a", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_769731_769731c94283cf46d7dceffafc0452a7.jpg/680x1024/1920x1080/2/a60f", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_d2f18e_d2f18e04b53f1c47647e594ec4cc94a2.jpg/680x1024/1920x1080/2/0bfa", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_989b76_989b76455ab283f6c63c5e0ef3992e85.jpg/1024x680/1920x1080/2/3df8", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_6abcd3_6abcd39cbf331df6912a27dd3cd1c32b.jpg/1024x680/1920x1080/2/a97c", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_d24fc0_d24fc0dff828a217cae26f07b5234d6b.jpg/1024x680/1920x1080/2/48c9", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_11e2b9_11e2b98b735cd7e8caed20ccdfcef0ac.jpg/1024x680/1920x1080/2/b9fa", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_1a2c0a_1a2c0a6ebe97c01a206a3f4197fae6ff.jpg/680x1024/1920x1080/2/4754", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_8dc4a8_8dc4a8fa7b7d2bd2c88dc5ca6fb67dbd.jpg/1626x1080/1920x1080/2/87f1", "https://d3k9mx2sflgxll.cloudfront.net/image/5/BE-master_listing_591c53_591c5333e7b699e139a95fbace69df22.jpg/680x1024/1920x1080/2/5133"]
      }
    };
  },

  render: function() {

    var home = this.props.home;
    var carouselId = "imgCarousel" + home.id;
    var carouselIdHref = "#imgCarousel" + home.id;
    var carouselItems = home.image.map(function(item) {
      var className = (item === home.image[0]) ? "item active" : "item";
      return (
        <div className={className}>
          <img className="card-image" src={item}/>
        </div>
      );
    }.bind(this)
  );

    return (
        <div >
        HELLO
            <div className="card-title">{ home.title }</div> 
            <div className="row">
              <div className="col-md-12">
                <div id={carouselId} className="carousel card-carousel" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner text-center" role="listbox">
                    {carouselItems}
                  </div>

                  <a className="left carousel-control" href={carouselIdHref} role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href={carouselIdHref} role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                  <span className="card-label">Type</span>
                  <span className="card-text">{ home.type }</span>          
                  <span className="card-label">Surface</span>
                  <span className="card-text">125m²</span>               
                  <span className="card-label">Nb.&nbsp;Ch.</span>
                  <span className="card-text">{ home.properties.bedrooms }</span>
              </div>
              <div className="row">
                  <div className="col-md-3 col-nopadding card-label">Address</div>
                  <div className="col-md-9 col-nopadding card-text">{ home.location }</div>
              </div>
            </div>

            <div className="container-fluid price-label">
              <div className="row text-right">
                  <span className="card-label">{ home.price }€</span>
              </div>
            </div>

            <div className="container-fluid bottom-align-block">
              <div className="row">
                <div className='btn-group btn-group-full'>
                  <a href="#" className="btn btn-less btn-full"><i className="fa fa-bars"></i>&nbsp;List</a>
                  <a href="#" className="btn btn-less btn-full"><i className="fa fa-star-o"></i>&nbsp;Favori</a>
                  <a href="#" className="btn btn-brand btn-full"><i className="fa fa-euro"></i>&nbsp;Simulation</a>
                </div>
              </div>
            </div>
        </div>
    );
  }
});

module.exports.HomeDetails = HomeDetails;