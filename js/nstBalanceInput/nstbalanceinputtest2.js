var ohanstBalanceInput = (function () {

    "use strict";
   
   
  var nstbalanceInputs=[]; 
  
    var nstBalanceInput= function (NumCompte, IntitulCompte, SoldeDebit,SoldeCredit) {  
	this.Numcompte=NumCompte;	   	
this.IntitulCompte= IntitulCompte;
this.SoldeDebit=SoldeDebit;
this.SoldeCredit=SoldeCredit;
	}
	var nstbalanceInputs=[];
	var DetailCount = 0;
        var TotalSoldeDebit = 0;
        var TotalSoldeCredit = 0;
	
	var addbalanceInput = function(NumCompte, IntitulCompte, SoldeDebit,SoldeCredit){
			var p = new nstBalanceInput(NumCompte, IntitulCompte, SoldeDebit,SoldeCredit);
		nstbalanceInputs.push(p);
			TotalSoldeDebit += SoldeDebit;
            TotalSoldeCredit += SoldeCredit;
            DetailCount = nstbalanceInputs.length;

            return {
                TotalSoldeDebit: TotalSoldeDebit,
                TotalSoldeCredit: TotalSoldeCredit,
                DetailCount: DetailCount,
            };
	
	}
		var logEach= function(array){
			
		}
	
	var p1= addbalanceInput("58520", "Mensah", 90000, 0);
   var p2=  addbalanceInput("58520", "Mensah", 90000, 0);
	
	//var nstBalanceInputstable=[new nstBalanceInput(NumCompte, IntitulCompte, SoldeDebit,SoldeCredit)];
	//nstBalanceInputstable.forEach(function(nstBalanceInput)


	 var getData = function () {
            return {
                "NumCompte":NumCompte,
           "IntitulCompte":IntitulCompte,
           "SoldeDebit":SoldeDebit,
           "SoldeCredit":SoldeCredit,           
                "TotalSoldeDebit": TotalSoldeDebit,
                "TotalSoldeCredit": TotalSoldeCredit,
                "DetailCount": DetailCount,
                "nstbalanceInputs": nstbalanceInputs.slice()
            };
		};


		return 
		{
			nstBalanceInput:nstBalanceInput
		}
		
	    
})();

var n1=   new ohanstBalanceInput.nstBalanceInput("58520", "Mensah", 90000, 0)
var na =   //new ohanstBalanceInput.nstBalanceInput("58520", "Mensah", 90000, 0)
//var n2= new ohanstBalanceInput.nstBalanceInput("58520", "akoli", 86500, 0)


console.log(n1);
//console.log(n2);