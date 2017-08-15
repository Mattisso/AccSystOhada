var ohanstBalanceInput= (function () {

    "use strict";
   
    var stBalanceInput= function (NumCompte, IntitulCompte, SoldeDebit,SoldeCredit) {   
  var nstBalanceInputs=[];
  var DetailCount = 0;
        var TotalSoldeDebit = 0;
        var TotalSoldeCredit = 0;
   nstBalanceInputs.slice().push({
           "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit
        });     
        
        this.addbalanceinput=function(){
            nstBalanceInputs.push(
                {
                    "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit
                }
            );
            TotalSoldeDebit += SoldeDebit;
            TotalSoldeCredit += SoldeCredit;
            DetailCount = nstBalanceInputs.length;

            return {
                TotalSoldeDebit: TotalSoldeDebit,
                TotalSoldeCredit: TotalSoldeCredit,
                DetailCount: DetailCount,
            };
        }

        this.getData = function () {
            return {
                /*  "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit, */
           "TotalSoldeDebit": TotalSoldeDebit,
                "TotalSoldeCredit": TotalSoldeCredit,
                "DetailCount": DetailCount,
        "nstBalanceInputs": nstBalanceInputs.slice()
            };
        };
      
    };
    
     return {
         stBalanceInput:stBalanceInput
     }

      
})();
   
    var stBalanceInputtest = new ohanstBalanceInput.stBalanceInput("58520", "Mensah", 90000, 0)
     var stBalanceInputtest1 = new ohanstBalanceInput.stBalanceInput("58520", "Mensah", 90000, 0)
     stBalanceInputtest.addbalanceinput("58520", "Mensah", 90000, 0)
   //    stBalanceInputtest1.addbalanceinput("58520", "Mensah", 90000, 0)
    // stBalanceInputtest.nstBalanceInputs.getData()

//nstBalanceInputs=[stBalanceInputtest,stBalanceInputtest1]
      //  stBalanceInputtest("58520", "Mensah", 90000, 0)
    
    console.log(stBalanceInputtest.getData());
   // console.log(stBalanceInputtest1.getData());
       //console.log(stBalanceInputtest.nstBalanceInputs.getData());
