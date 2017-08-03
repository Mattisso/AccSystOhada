// Get Programming with JavaScript
// Chapter 16
// User data
//var nttCompteBalanceData =



(function () {
    "use strict";


    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.nttcomptebalanceData = {

        "Id": 1,
        "oExercComptaId": 2006,
        "oTableauPosteId": 1,
         "oReferenceId": 87,
         "TotalSoldeDebit" : 121200,
         "TotalSoldeCredit": 12200,
         "nttCompteBalanceDetails": [
                {
                    "Id": 0,
                    "nttCompteBalanceId": 1,
                    "NumCompte": "4520",
                    "IntitulCompte": "my testAgain",
                    "SoldeDebit": 1520000,
                    "SoldeCredit": 0
                },

                    {
                        "Id": 0,
                        "nttCompteBalanceId": 1,
                        "NumCompte": "4850",
                        "IntitulCompte": "my Akoli",
                        "SoldeDebit": 1500000,
                        "SoldeCredit": 0                 
                    }
            ]
    };

   
})();


//var nttCompteBalanceData = {
//    "Id": 1,
//    "oReferenceId": 87,
//    "oExercComptaId": 2006,
//    "oTableauPosteId": 1,
//    "ObjectState": "ObjectSate",
//    "nttCompteBalanceDetails": [
//        {
//            "Id": 0,
//            "nttCompteBalanceId": 1,
//            "NumCompte": "4520",
//            "IntitulCompte": "my testAgain",
//            "SoldeDebit": 1520000,
//            "SoldeCredit": 0,
//            "ObjectState": "ObjectSate"
//        },

//            {
//                "Id": 0,
//                "nttCompteBalanceId": 1,
//                "NumCompte": "4520",
//                "IntitulCompte": "my Akoli",
//                "SoldeDebit": 1500000,
//                "SoldeCredit": 0,
//                "ObjectState": "ObjectSate"
//            }
//    ]
//};
//var nttcomptebalance = BuildnttCompteBalance(nttCompteBalanceData);



//console.log(nttcomptebalance.addBalanceDetail(0, 1, "707000", "IamTired", 660000, 0, "ObjectState"));