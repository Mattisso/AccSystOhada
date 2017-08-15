
var ohanstbalanceInputCOntroller = (function(){
  var  path= require('path');
var ohanstBalanceInput = require('./nstBalanceInput');

console.log(ohanstBalanceInput)
var nstbalanceinput=null;
//var oo= ohanstBalanceInp
var nstBalanceInputs=[];
 var BuildnstbalanceInput = function (objdata) {
    var nstbalanceinput =  new  ohanstBalanceInput.nstBalanceInput(objdata.NumCompte,objdata.IntitulCompte,objdata.SoldeDebit,objdata.SoldeCredit);
    objdata.nstBalanceInputs.forEach( function (nstBalanceInput){
nstbalanceinput.addbalanceinput(nstBalanceInput.NumCompte, nstBalanceInput.IntitulCompte, nstBalanceInput.SoldeDebit, nstBalanceInput.SoldeCredit)
    });


    return nstbalanceinput;
  };

  var init = function (nstbalanceinputData) {
    var nstbalanceinput = BuildnstbalanceInput(nstbalanceinputData);

    fitnessApp.userView.render(nstbalanceinput);

    return {
      log: function (sessionDate, duration) {
        user.addSession(sessionDate, duration);
        fitnessApp.userView.render(user);
        return "Thanks for logging your nstbalanceinput.";
      }
    };
  };

})();
if (typeof module != "undefined" && module.exports)
  module.exports = ohanstbalanceInputCOntroller;