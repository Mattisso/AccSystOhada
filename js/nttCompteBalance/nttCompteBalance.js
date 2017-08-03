// fitnessApp.nttCompteBalance


(function () {

    "use strict";
    var ObjectState = {
        Unchanged: 0,
        Added: 1,
        Modified: 2,
        Deleted: 3
    };

    var nttCompteBalance = function (Id, oExercComptaId, oTableauPosteId, oReferenceId, ObjectState) {    

        var nttCompteBalanceDetails = [];
        var nttCompteBalanceDetail = {};
        var DetailCount = 0;
        var TotalSoldeDebit = 0;
        var TotalSoldeCredit = 0;
        nttCompteBalanceDetail = {

            Id: 0,
            NumCompte: "",
            IntitulCompte: "",
            SoldeDebit: "",
            SoldeCredit: "",
            ObjectState: ObjectState.Added
        };


        this.addBalanceDetail = function (Id, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit, ObjectState) {
            nttCompteBalanceDetails.push({
                "Id": Id,
                "nttCompteBalanceId": nttCompteBalanceId,
                "NumCompte": NumCompte,
                "IntitulCompte": IntitulCompte,
                "SoldeDebit": SoldeDebit,
                "SoldeCredit": SoldeCredit,
                "ObjectState": ObjectState
            });

            TotalSoldeDebit += SoldeDebit;
            TotalSoldeCredit += SoldeCredit;
            DetailCount = nttCompteBalanceDetails.length;

            return {
                TotalSoldeDebit: TotalSoldeDebit,
                TotalSoldeCredit: TotalSoldeCredit,
                DetailCount: DetailCount,
            };
        };


        this.flagcomptebalanceAsEdited = function () {
            if (this.ObjectState() !== ObjectState.Added) {
                this.ObjectState(ObjectState.Modified);
            }
            return true;
        };

        this.addcomptebalancedetail = function () {
            var nttcomptebalancedetail = new nttCompteBalanceDetail({
                Id: 0,
                NumCompte: "",
                IntitulCompte: "",
                SoldeDebit: "",
                SoldeCredit: "",
                ObjectState: ObjectState.Added

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

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.nttCompteBalance = nttCompteBalance;

})();


/*
Test the constructor at the console prompt:
var nttcomptebalance = new nttCompteBalance(2, 87, 2006, 1, "ObjectSate")

nttcomptebalance.addBalanceDetail(0, 2, "58520", "Mensah", 90000, 0, ObjectState.Added)
nttcomptebalance.addBalanceDetail(0, 2, "456200", "Mensah1", 1500000, 0, ObjectState.Added)
nttcomptebalance.getData()
nttcomptebalance.getData().TotalSoldeDebit
nttcomptebalance.getData().TotalSoldeCredit
*/