var ohanstBalanceInput= (function () {

    "use strict";
   var  path= require('path');
   var ohaconvert= require( path.resolve(__dirname,'../../public/utils/ohaconvert'));
console.log(ohaconvert)
    var nstBalanceInput= function (NumCompte, IntitulCompte, SoldeDebit,SoldeCredit) {
        var nstBalanceInputdata = require('./nstBalanceInputdata');
  //var _arrnstBalanceInputs=[];
  var DetailCount = 0;
        var TotalSoldeDebit = 0;
        var TotalSoldeCredit = 0;
         nstBalanceInputdata.slice().push({
           "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit
        });

       // var addbalanceinput;
        this.addbalanceinput=function(){
            nstBalanceInputdata.push(
                {
                    "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit
                }
            );


            //var i;
		for (var i=0; i<nstBalanceInputdata.length; i++){
			TotalSoldeDebit += ohaconvert.isNum(nstBalanceInputdata[i].SoldeDebit);

        }

        for ( var i=0; i< nstBalanceInputdata.length; i++){
			TotalSoldeCredit += ohaconvert.isNum(nstBalanceInputdata[i].SoldeCredit);
        }
           // TotalSoldeDebit += SoldeDebit;
          //  TotalSoldeCredit += SoldeCredit;
            DetailCount = nstBalanceInputdata.length;

            return {
               TotalSoldeDebit: TotalSoldeDebit,
              TotalSoldeCredit: TotalSoldeCredit,
                DetailCount: DetailCount,
            };
        }



        this.hasitem = function (nstBalanceInput) {
            return nstBalanceInputdata.indexOf(nstBalanceInput) !== -1;

        };
    this.removeItem = function (nstBalanceInput) {
            var itemIndex = nstBalanceInputdata.indexOf(nstBalanceInput);
            if (itemIndex !== -1) {
                nstBalanceInputdata.splice(itemIndex, 1);
            }
        };

//var getData;
        this.getData = function () {
            return {
                /*  "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit, */
           "TotalSoldeDebit": TotalSoldeDebit,
        "TotalSoldeCredit": TotalSoldeCredit,
        "DetailCount": DetailCount,
        "nstBalanceInputdata": nstBalanceInputdata.slice()
            };
        };

    };

     return {
         nstBalanceInput:nstBalanceInput
     }


})();

if (typeof module != "undefined" && module.exports)
  module.exports = ohanstBalanceInput;
/*
 var stBalanceInputtest = new ohanstBalanceInput.nstBalanceInput("58520", "Mensah", 90000, 0)
     var stBalanceInputtest1 = new ohanstBalanceInput.nstBalanceInput("78500", "akoli", 0, 589600)
 //    nstBalanceInputs=[stBalanceInputtest,stBalanceInputtest1]
    stBalanceInputtest.addbalanceinput("58520", "Mensah", 90000, 0)
 stBalanceInputtest1.addbalanceinput("58520", "Mensah", 90000, 0)
    // stBalanceInputtest.nstBalanceInputs.getData()

//nstBalanceInputs=[stBalanceInputtest,stBalanceInputtest1]
      //  stBalanceInputtest("58520", "Mensah", 90000, 0)

  console.log(stBalanceInputtest.getData());
 console.log(stBalanceInputtest.hasitem(stBalanceInputtest))
 console.log(stBalanceInputtest.removeItem(stBalanceInputtest))
       //console.log(stBalanceInputtest.nstBalanceInputs.getData());*/
