var React = require('react');

var Simulation = React.createClass({
  render: function(){
  var home = this.props.home;
  console.log(home);
    return(
      <div className="dark-container">
        <div className="simulationResult">
          <h2>Votre résultat</h2>
          <table>
            <tbody>
              <tr>
                <td className="halfRow">
                  <h3>Montant du prêt</h3>
                  <p>home.price</p>
                </td>
                <td className="halfRow">
                  <h3>Durée</h3>
                  <p>20 ans</p>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <h3>Mensualité</h3>
                  <p>1.642,25 €</p>
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
                  <h3 id="inlineCol">Coût du crédit après 20 ans :</h3><p id="inlineCol2">394.140,00 €</p>
                </td>
              </tr>
            </tbody>
          </table>

          <a className="btn btnTransparant">Continuer</a>
        </div>
      </div>
    );
  }
});

module.exports.Simulation = Simulation;