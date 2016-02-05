var React = require('react');
var Link = require('react-router').Link;

var Simulation = React.createClass({
  getInitialState: function() {
    return {
      selectedYears: 20,
      percentage: 2.83
    }
  },

  prettifyValue: function(number){
    number = number.toFixed(2) + '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2 + " €";
  },

  priceHome: function(){
    return this.prettifyValue(parseFloat(this.props.home.price));
  },

  totalCostPrice: function(){
    var calcTotalperc = 1.206 + (0.219 * (((this.state.selectedYears - 15) / 10)));
    return this.prettifyValue(parseFloat(this.props.home.price) * calcTotalperc);
  },

  pricePerMonth: function(){
    var calcTotalperc = 1.206 + (0.219 * (((this.state.selectedYears - 15) / 10)));
    return this.prettifyValue((parseFloat(this.props.home.price) * calcTotalperc)/(12*this.state.selectedYears));
  },

  percentagePerMonth: function(){
    var number = this.state.percentage;
    number = number.toFixed(2) + '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2 + " %";
  },

  handleChange: function(){
    var selectedYear = $('#yearSlider').val();
    this.setState({selectedYears:selectedYear});
    var calculatedPercentage = 2.6 + (0.45 * (((selectedYear - 15) / 10)));
    this.setState({percentage:calculatedPercentage});
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3"> 
          <div className="simulationResult dark-container">
            <h2>Votre simulation</h2>

            <table>
              <tbody>
                <tr>
                  <td className="halfRow">
                    <h3>Montant du prêt</h3>
                    <p>{this.priceHome()}</p>
                  </td>
                  <td className="halfRow">
                    <h3>Durée</h3>
                    <p>{this.state.selectedYears} ans</p>
                    <form>
                      <input id='yearSlider' type='range' name="years" min="15" max="25" value={this.state.selectedYears} step="1" onChange={this.handleChange}/>
                    </form>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <h3>Mensualité</h3>
                    <p>{this.pricePerMonth()}</p>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <h3>Taux annuel fixe</h3>
                    <p>{this.percentagePerMonth()}</p>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <h3 id="inlineCol">Coût du crédit après 20 ans :</h3><p id="inlineCol2">{this.totalCostPrice()}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <Link to="/searchresults" className="btn btnTransparant">Continuer</Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports.Simulation = Simulation;