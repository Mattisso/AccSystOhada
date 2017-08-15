var ohanstBalanceInput = (function () {

    "use strict";
   
   
  var nstbalanceInputs=[];
  
  
    var buildnstBalanceInput= function (NumCompte, IntitulCompte, SoldeDebit,SoldeCredit) {  
	var nstBalanceInput= {};
nstBalanceInput.Numcompte=NumCompte;	   	
nstBalanceInput.IntitulCompte= IntitulCompte;
nstBalanceInput.SoldeDebit=SoldeDebit;
nstBalanceInput.SoldeCredit=SoldeCredit;

 return nstBalanceInput;

	};


	return
	{
		
nstBalanceInput: nstBalanceInput
	}
	
	
	    
})();

var p1= new ohanstBalanceInput.buildnstBalanceInput("58520", "Mensah", 90000, 0)
  var p2=  new ohanstBalanceInput.buildnstBalanceInput("58520", "Mensah", 90000, 0)
console.log(p1.Numcompte);
console.log(p2.IntitulCompte);
