var oCompteModel = (function () {

 "use strict";


    var oCompte = function (Id, CompteNumber) {
       // var exits = {};
      //  var challenges = {};     

        this.getData = function () {
            var data = {
               "Id":Id,
                "CompteNumber": CompteNumber
               
            };

            return data;
        };
    };
  
  return {
    oCompte: oCompte
  };

})();
oCompteModel.oCompte();