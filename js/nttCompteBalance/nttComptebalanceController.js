(function () {
    "use strict";

    var ObjectState = {
        Unchanged: 0,
        Added: 1,
        Modified: 2,
        Deleted: 3
    };
    function getById(id) {
        return document.getElementById(id);
    }
    var btnsubmit = getById("submit");
    var $GetTableauList = $('#oTableauPosteId');
    var $GetYearList = $('#oExercComptaId');
    var $GetoReferenceList = $('#oReferenceId');
    var CompteDetails = [];

    var yearList = getById("oExercComptaId");
    var tableauList = getById("oTableauPosteId");
    var referenceList = getById("oReferenceId");
    var txtNumCompte = getById("txtNumCompte");
    var txtIntitulCompte = getById("txtIntitulCompte");
    var txtSoldeDebit = getById("txtSoldeDebit");
    var txtSoldeCredit = getById("txtSoldeCredit");

    var nttcomptbalance = null;

    var nttcomptebalanceData = {

        "Id": 1,
        "oExercComptaId": 2006,
        "oTableauPosteId": 1,
        "oReferenceId": 87,
        "TotalSoldeDebit": 121200,
        "TotalSoldeCredit": 12200,
        "nttCompteBalanceDetails": [
               {
                   "Id": 0,
                   "nttCompteBalanceId": 1,
                   "NumCompte": "4520",
                   "IntitulCompte": "my testAgain",
                   "SoldeDebit": 1520000,
                   "SoldeCredit": 0
               }]
    };


    var BuildnttCompteBalance = function (nttcomptebalanceData) {
        var nttcomptbalance = new fitnessApp.nttCompteBalanceViewModel(nttcomptebalanceData.Id, nttcomptebalanceData.oExercComptaId, nttcomptebalanceData.oTableauPosteId, nttcomptebalanceData.oReferenceId, nttcomptebalanceData.ObjectState);
        nttcomptebalanceData.nttCompteBalanceDetails.forEach(function (nttCompteBalanceDetail) {
            nttcomptbalance.addBalanceDetail(nttCompteBalanceDetail.Id, nttCompteBalanceDetail.nttCompteBalanceId, nttCompteBalanceDetail.NumCompte,
          nttCompteBalanceDetail.IntitulCompte, nttCompteBalanceDetail.SoldeDebit, nttCompteBalanceDetail.SoldeCredit, nttCompteBalanceDetail.ObjectState);         
        });
               
        return nttcomptbalance;
    };

    function loadnttCompteBalanceFromData(nttcomptebalanceData) {
        nttcomptbalance = BuildnttCompteBalance(nttcomptebalanceData);
        fitnessApp.nttcomptebalanceView.render(nttcomptbalance);
    }

    function PostnttCompteBalance() {
      

        comptebalanceManagement.prototype.sendCompteBalance();
      //  OhadaApp.data.Insert(obj,loadnttCompteBalanceFromData);
      //      return "Loading user details...";
        }
    btnsubmit.addEventListener("click", PostnttCompteBalance);



    function log(Id, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit) {
        if (nttcomptbalance !== null)
        {
            nttcomptbalance.addBalanceDetail(Id, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit);
            fitnessApp.nttcomptebalanceView.render(nttcomptbalance);
            return "Thanks for logging your Detail.";
        }
        else
        {
            return "Please wait for user details to load.";
        }
            
    }
    function init()
    {
        PostnttCompteBalance();
        return {
            log: log,
            PostnttCompteBalance: PostnttCompteBalance
        };

    }

    //var init = function (obj) {
    //    var nttcomptbalance = BuildnttCompteBalance(obj);

    //    fitnessApp.nttcomptebalanceView.render(nttcomptbalance);

    //    return {
    //        log: function (Id, nttCompteBalanceId,NumCompte, IntitulCompte, SoldeDebit, SoldeCredit) {
    //            nttcomptbalance.addBalanceDetail(Id, nttCompteBalanceId, NumCompte, IntitulCompte, SoldeDebit, SoldeCredit);
    //            fitnessApp.nttcomptebalanceView.render(nttcomptbalance);
    //            return "Thanks for logging your Detail.";
    //        }
    //    };
    //};

    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.init = init;

})();


/* Further Adventures
 
  The nttComptBalance constructor and nttcomptbalance view
  code have been imported on the
 HTML panel.
  The nttcomptbalance data needs a name and
 a sessions array.

 1) Run the program.
 
  2) At the console, create some
     nttcomptbalance data:
 
    var Data = {
  Id: 1,
   oReferenceId: 87,
   oExercComptaId: 2006,
   oTableauPosteId: 1, nttCompteBalanceDetails: []}
 
  3) Initialize the fitness app
     with the data:
 
     var nttcomptbalance = fitnessApp.init(Data)
 
  4) Log a session:
 
     nttcomptbalance.log(0, 1, "707000", "IamTired", 660000, 0, ObjectState.Added)
 
 */