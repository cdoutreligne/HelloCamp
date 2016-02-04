var React = require('react');
var Link = require('react-router').Link;
var $ = require('jquery');

var SearchForm = React.createClass({

    componentDidMount: function() {
        var estateType;
        for (var i = this.props.searchCriteria.estateType.length - 1; i >= 0; i--) {
          estateType = this.props.searchCriteria.estateType[i];
          this.refs[estateType].checked = true;
        };
        this.refs.localisation.value = this.props.searchCriteria.localisation;
        this.refs.priceMin.value = this.props.searchCriteria.price.min;
        this.refs.priceMax.value = this.props.searchCriteria.price.max;
        this.refs.roomNbrMin.value = this.props.searchCriteria.roomNbr.min;
        this.refs.roomNbrMax.value = this.props.searchCriteria.roomNbr.max;
        this.refs.squareMin.value = this.props.searchCriteria.square.min;
        this.refs.squareMax.value = this.props.searchCriteria.square.max;
        var estateState;
        for (var i = this.props.searchCriteria.estateState.length - 1; i >= 0; i--) {
          estateState = this.props.searchCriteria.estateState[i];
          this.refs[estateState].checked = true;
        };
        if (this.props.searchCriteria.garage){
          this.refs.garage.checked = this.props.searchCriteria.garage;
        }

        if (this.props.searchCriteria.terrace){
          this.refs.terrace.checked = this.props.searchCriteria.terrace;
        }
    },
    validateAmount: function(event) {
        if (isNaN(event.target.value)) {
            $("#" + event.target.name).addClass("has-error");
        } else {
            $("#" + event.target.name).removeClass("has-error");
        }
    },
    changeButton: function(event){
      event.preventDefault();
      //remonte de parent en parent en commencant par l'element lui-meme pour trouver le premier "a"
      var elem = $(event.target).closest( "a" );
        if ($("#more").hasClass("collapse")) {
            elem.html('Moins de critères <i class="fa fa-angle-double-up"></i>');
            $("#more").removeClass("collapse");
        } else {
          elem.html('Plus de critères <i class="fa fa-angle-double-down"></i>');
            $("#more").addClass("collapse");
        };
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
        var estateType = [this.refs.house.checked ? "house" : undefined, this.refs.appart.checked ? "appart" : undefined, this.refs.ground.checked ? "ground" : undefined, this.refs.investment.checked ? "investment" : undefined, this.refs.commercial.checked ? "commercial" : undefined];
        estateType = cleanArray(estateType);
        var localisation = this.refs.localisation.value;
        var priceMin = this.refs.priceMin.value;
        var priceMax = this.refs.priceMax.value;
        var roomNbrMin = this.refs.roomNbrMin.value;
        var roomNbrMax = this.refs.roomNbrMax.value;
        var squareMin = this.refs.squareMin.value;
        var squareMax = this.refs.squareMax.value;
        var estateState = [this.refs.prefect.checked ? "prefect" : undefined, this.refs.reNew.checked ? "reNew" : undefined, this.refs.good.checked ? "good" : undefined, this.refs.toBeRefresh.checked ? "toBeRefresh" : undefined];
        estateState = cleanArray(estateState);
        var garage = this.refs.garage.checked;
        var terrace = this.refs.terrace.checked;

        var searchCriteria = {
            estateType: estateType,
            localisation: localisation,
            price: {
                min: priceMin,
                max: priceMax
            },
            roomNbr: {
                min: roomNbrMin,
                max: roomNbrMax
            },
            square: {
                min: '',
                max: ''
            },
            estateState: estateState,
            garage: garage,
            terrace: terrace
        };

        this.props.onClickSearch(searchCriteria);
    },

    render: function() {
        return (


                    <div className="dark-container center-search">
                        <form className="form-horizontal" role="form">
                            <div className="row margin-in-dark-container">
                            <div className="col-search col-md-12">
                                <label className="control-label dark-container-text">Type de bien:</label>
                                <div className="checkbox">
                                    <label className="dark-container-text">
                                        <input type="checkbox" name="house" ref="house" value="house" />Maison</label>
                                </div>
                                <div className="checkbox">
                                    <label className="dark-container-text">
                                        <input type="checkbox" name="appart" ref="appart" value="appart" />Appartemment</label>
                                </div>
                                <div className="checkbox">
                                    <label className="dark-container-text">
                                        <input type="checkbox" name="ground" ref="ground" value="ground" />Terrain à batir</label>
                                </div>
                                <div className="checkbox">
                                    <label className="dark-container-text">
                                        <input type="checkbox" name="investment" ref="investment" value="investment" />Immeuble de rapport</label>
                                </div>
                                <div className="checkbox">
                                    <label className="dark-container-text">
                                        <input type="checkbox" name="commercial" ref="commercial" value="commercial" />Surface commerciale</label>
                                </div>
                            </div>
                            </div>
                            <div className="row margin-in-dark-container">
                            <div className="col-search col-md-12">
                                <label className="dark-container-text">Localisation:</label>
                            </div>
                            </div>     
                            <div className="row margin-in-dark-container">
                            <div className="form-group">
                            <div className="col-search col-md-1">
                                &nbsp;
                            </div>
                            <div className="col-search col-md-9">

                                <input type="text" name="localisation" className="form-control" ref="localisation" />
                                </div>
                            </div>
                            </div>
                            <div className="row margin-in-dark-container">
                            <div className="col-search col-md-12">
                                <label className="dark-container-text">Prix:</label>
                            </div>
                            </div>
                            <div className="row margin-in-dark-container">
                                <div className="form-group">
                                    <label className="col-search col-md-3 control-label dark-container-text">Entre</label>
                                    <div className="col-search col-md-3" id="priceMin">
                                        <input type="text" name="priceMin" className="form-control" ref="priceMin" onBlur={this.validateAmount} />
                                    </div>
                                    <label className="col-search col-md-1 control-label dark-container-text">et</label>
                                    <div className="col-search col-md-3" id="priceMax">
                                        <input type="text" name="priceMax" className="form-control" ref="priceMax" onBlur={this.validateAmount}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row margin-in-dark-container">
                            <div className="col-search col-md-12">
                                <label className="dark-container-text">Nombre de chambres:</label>
                            </div>
                            </div>
                            <div className="row margin-in-dark-container">
                                <div className="form-group">
                                    <label className="col-search col-md-3 control-label dark-container-text">De</label>
                                    <div className="col-search col-md-3" id="roomNbrMin">
                                        <input type="text" name="roomNbrMin" className="form-control" ref="roomNbrMin" onBlur={this.validateAmount}/>
                                    </div>
                                    <label className="col-search col-md-1 control-label dark-container-text">à</label>
                                    <div className="col-search col-md-3" id="roomNbrMax">
                                        <input type="text" name="roomNbrMax" className="form-control" ref="roomNbrMax" onBlur={this.validateAmount}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row margin-in-dark-container">
                              <a href="#" className="btn-link my-link" onClick={this.changeButton} id="criteria">Plus de critères <i className='fa fa-angle-double-down'></i></a>
                            </div>
                            {/* ************************** collapse ***************************** */}
                            <div className="collapse " id="more">
                                <div className="row margin-in-dark-container">
                                <div className="col-search col-md-12">
                                    <label className="control-label dark-container-text">Surface:</label>
                                </div>
                                </div>
                                <div className="row margin-in-dark-container">
                                    <div className="form-group">
                                        <label className="col-search col-md-3 control-label dark-container-text">Entre</label>
                                        <div className="col-search col-md-3" id="squareMin">
                                            <input type="text" name="squareMin" className="form-control" ref="squareMin" onBlur={this.validateAmount} />
                                        </div>
                                        <label className="col-search col-md-1 control-label dark-container-text">et</label>
                                        <div className="col-search col-md-3" id="squareMax">
                                            <input type="text" name="squareMax" className="form-control" ref="squareMax" onBlur={this.validateAmount}/>
                                        </div>
                                        <label className="col-search col-md-1 control-label dark-container-text">m²</label>
                                    </div>
                                </div>
                                <div className="row margin-in-dark-container">
                                <div className="col-search col-md-12">
                                    <label className="control-label dark-container-text">Etat du bâtiment:</label>
                                    </div>
                                </div>
                                <div className="row margin-in-dark-container">
                                    <div className="col-search col-md-12">
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="prefect" ref="prefect" value="prefect" />Excellent état</label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="reNew" ref="reNew" value="reNew" />Remis à neuf</label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="good" ref="good" value="good" />Bon état</label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="toBeRefresh" ref="toBeRefresh" value="toBeRefresh" />A rafraîchir</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row margin-in-dark-container">
                                <div className="col-search col-md-12">
                                    <label className="control-label dark-container-text">Plus:</label>
                                </div>
                                </div>
                                <div className="row margin-in-dark-container">
                                <div className="col-search col-md-12">
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="garage" ref="garage" value="garage" />Garage</label>
                                        </div>
                                        <div className="checkbox">
                                            <label className="dark-container-text">
                                                <input type="checkbox" name="terrace" ref="terrace" value="terrace" />Terrasse</label>
                                        </div>
                                </div>
                                </div>
                            </div>
                            {/* ************************** end collapse ***************************** */}
                            <div className="row margin-in-dark-container">
                              <Link to="/searchresults" onClick={this.handleSaveSearch} className="btn btn-primary btn-md pull-right"><i className="fa fa-search"></i>&nbsp;Rechercher</Link>
                            </div>
                        </form>
                    </div>


      );
    }
});

module.exports.SearchForm = SearchForm;
