var React = require('react');
var Link = require('react-router').Link;

var Simulation = React.createClass({

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
    return this.prettifyValue(parseFloat(this.props.home.price) * 1.32);
  },

  pricePerMonth: function(){
    return this.prettifyValue((parseFloat(this.props.home.price) * 1.32)/240);
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3"> 
          <div className="simulationResult dark-container">
            <h2>Votre résultat</h2>
            <table>
              <tbody>
                <tr>
                  <td className="halfRow">
                    <h3>Montant du prêt</h3>
                    <p>{this.priceHome()}</p>
                  </td>
                  <td className="halfRow">
                    <h3>Durée</h3>
                    <p>20 ans</p>
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
                    <p>2,90 %</p>
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