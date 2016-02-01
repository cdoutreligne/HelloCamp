var React = require('react');
var Link = require('react-router').Link;

var SearchForm = React.createClass({

    componentDidMount: function() {
      // var estateType;
      // for (var i = this.props.searchCriteria.estateType.length - 1; i >= 0; i--) {
      //   estateType = this.props.searchCriteria.estateType[i];
      //   this.refs.[estateType].checked = true;
      // };
      this.refs.localisation.value = this.props.searchCriteria.localisation;
      this.refs.priceMin.value = this.props.searchCriteria.price.min;
      this.refs.priceMax.value = this.props.searchCriteria.price.max;
      this.refs.roomNbr.value = this.props.searchCriteria.roomNbr;
      this.refs.squareMin.value = this.props.searchCriteria.square.min;
      this.refs.squareMax.value = this.props.searchCriteria.square.max;
      this.refs.garage.value = this.props.searchCriteria.garage;
      this.refs.terrace.value = this.props.searchCriteria.terrace;
    },
    handleMoreCriteria: function() {
    },
    handleSaveSearch: function() {
      function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
          if (actual[i]) {
            newArray.push(actual[i]);
          }
        }
        return newArray;
      }
      var estateType = [this.refs.house.checked?"house":undefined, this.refs.appart.checked?"appart":undefined,this.refs.ground.checked?"ground":undefined,this.refs.investment.checked?"investment":undefined,this.refs.commercial.checked?"commercial":undefined];
      estateType = cleanArray(estateType);
      var localisation = this.refs.localisation.value;
      var priceMin = this.refs.priceMin.value;
      var priceMax = this.refs.priceMax.value;
      var roomNbrMin = this.refs.roomNbrMin.value;
      var roomNbrMax = this.refs.roomNbrMax.value;
      // var squareMin = this.refs.squareMin.value;
      // var squareMax = this.refs.squareMax.value;
      // var garage = this.refs.garage.value;
      // var terrace = this.refs.terrace.value;

      var searchCriteria = {
          estateType: estateType,
          localisation: localisation,
          price: {
              min: priceMin,
              max: priceMax
          },
          roomNbr:  {
              min: roomNbrMin,
              max: roomNbrMax
          }
          // square: {
          //     min: '',
          //     max: ''
          // },
          // garage: squareMax,
          // terrace: terrace
      };

      this.props.onClickSearch(searchCriteria);
    },

    render: function() {
        return (
      <div id="searchForm">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="dark-container">
                <form className="form-horizontal" role="form">
                  <label className="control-label dark-container-text">Type de bien:</label>
                  <div className="checkbox">
                    <label className="dark-container-text"><input type="checkbox" name="house" ref="house" value="house"/>Maison</label>
                  </div>
                  <div className="checkbox">
                    <label className="dark-container-text"><input type="checkbox" name="appart" ref="appart" value="appart"/>Appartemment</label>
                  </div>
                  <div className="checkbox">
                    <label className="dark-container-text"><input type="checkbox" name="ground" ref="ground" value="ground"/>Terrain à batir</label>
                  </div>
                  <div className="checkbox">
                    <label className="dark-container-text"><input type="checkbox" name="investment" ref="investment" value="investment"/>Immeuble de rapport</label>
                  </div>
                  <div className="checkbox">
                    <label className="dark-container-text"><input type="checkbox" name="commercial" ref="commercial" value="commercial"/>Surface commerciale</label>
                  </div>
                  <label className="dark-container-text">Localisation:</label>
                  <input type="text" name="localisation" className="form-control" ref="localisation" />
                  <div className="row">
                    <div className="col-sm-5">
                  <label className="dark-container-text">Prix: entre</label> 
                  <input type="text" name="priceMin" className="form-control" ref="priceMin" />
                  <label className="dark-container-text">et</label><input type="text" name="priceMax" className="form-control" ref="priceMax" />
                  </div>
                  </div>
                  <label className="dark-container-text">Nombre de chambres: </label> 
                  <div className="row">
                    <div className="col-sm-3">
                      <input type="text" name="roomNbrMin" className="form-control" ref="roomNbrMin" />
                        <label className="dark-container-text">à</label>
                      <input type="text" name="roomNbrMax" className="form-control" ref="roomNbrMax" />
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-12">
                    <input type="button" id="btnMore" className="btn btn-primary btn-sm" value="more" onClick={this.handleMoreCriteria}/>
                    <Link to="/searchresults" onClick={this.handleSaveSearch} className="btn btn-primary btn-sm pull-right">Search</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
});

module.exports.SearchForm = SearchForm;
