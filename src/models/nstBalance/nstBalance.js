
// fitnessApp.nttCompteBalance
var ohanstBalance = (function () {

    "use strict";
   
    var nstBalance = function (Id, oExercComptaId, oTableauPosteId, oReferenceId,IntitulCompte,NumCompte,SoldeDebit,SoldeCredit) {    
      var nttCompteBalanceDetails = [];
        var DetailCount = 0;
        var TotalSoldeDebit = 0;
        var TotalSoldeCredit = 0;
        


        this.addBalanceDetail = function (Id, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit) {
            nttCompteBalanceDetails.push({
                "Id": Id,
                "nttCompteBalanceId": nttCompteBalanceId,
                "NumCompte": NumCompte,
                "IntitulCompte": IntitulCompte,
                "SoldeDebit": SoldeDebit,
                "SoldeCredit": SoldeCredit
                           });

            TotalSoldeDebit += SoldeDebit;
            TotalSoldeCredit += SoldeCredit;
            DetailCount =nstBalance.length;

            return {
                TotalSoldeDebit: TotalSoldeDebit,
                TotalSoldeCredit: TotalSoldeCredit,
                DetailCount: DetailCount,
            };
        };


     /*   this.flagcomptebalanceAsEdited = function () {
            if (this.ObjectState() !== ObjectState.Added) {
                this.ObjectState(ObjectState.Modified);
            }
            return true;
        };
*/
        this.addcomptebalancedetail = function () {
            var nttcomptebalancedetail = new nttCompteBalanceDetail({
                Id: 0,
                NumCompte: "",
                IntitulCompte: "",
                SoldeDebit: "",
                SoldeCredit: ""
               // ObjectState: ObjectState.Added

            });
            this.nttCompteBalanceDetails.slice().push(nttcomptebalancedetail);

        };

        this.hasitem = function (nttcomptebalancedetail) {
            return nttCompteBalanceDetails.indexOf(nttcomptebalancedetail) !== -1;

        };

        this.removeItem = function (nttcomptebalancedetail) {
            var itemIndex = nttCompteBalanceDetails.indexOf(nttcomptebalancedetail);
            if (itemIndex !== -1) {
                nttCompteBalanceDetails.splice(itemIndex, 1);
            }
        };

        this.getData = function () {
            return {
                "Id": Id,
                "oExercComptaId": oExercComptaId,
                "oTableauPosteId": oTableauPosteId,
                "oReferenceId": oReferenceId,              
                "TotalSoldeDebit": TotalSoldeDebit,
                "TotalSoldeCredit": TotalSoldeCredit,
                "DetailCount": DetailCount,
                "nttCompteBalanceDetails": nttCompteBalanceDetails.slice()
            };
        };
    };

    return{
        nttCompteBalance : nttCompteBalance

    };
})();



//Test the constructor at the console prompt:
var nttcomptebalance = new ohaCompteBalance.nttCompteBalance(2, 87, 2007, 1)
nttcomptebalance.addBalanceDetail(0, 2, "58520", "Mensah", 90000, 0)
nttcomptebalance.addBalanceDetail(0, 2, "456200", "Mensah1", 1500000, 0)
console.log(nttcomptebalance.getData())
console.log(nttcomptebalance.getData().TotalSoldeDebit)
console.log(nttcomptebalance.getData().TotalSoldeCredit)