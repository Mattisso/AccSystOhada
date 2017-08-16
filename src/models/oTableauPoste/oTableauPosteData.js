(function () {
    if (window.fitnessApp === undefined) {
        window.fitnessApp = {};
    }

    fitnessApp.oTableauPosteData = {
       "Id": 13000,
        "TableauName": "tblActif",
        "tbleauLongName": "Bilan Actif",
        "oStableauPostes": [
    { "oStableauName": "tblBilanActif", "StbleauLongName": "Bilan Actif" },
    { "oStableauName": "tblAmortImmo", "StbleauLongName": "Amortissements" },
    { "oStableauName": "tblProvision", "StbleauLongName": "Provisions" }
        ]
    },
{
   "Id": 12000,
    "TableauName": "tblPassif",
    "tbleauLongName": "Bilan Passif",
    "oStableauPoste": [
    {
        "oStableauName": "tblBilanPassif",
        "StbleauLongName": "Bilan Passif"
    }]
},
{
    "Id": 14000,
    "TableauName": "tblCharges",
    "tbleauLongName": "Résultat Charges",
    "oStableauPoste": [
	{
	    "oStableauName": "tblResultChrges",
	    "StbleauLongName": "Résultat Charges"
	}]
},
{
    "Id": 15000,
    "TableauName": "tblProduidts",
    "tbleauLongName": "Résultat Produits",
    "oStableauPoste": [
    {
        "oStableauName": "tblResultPrdts",
        "StbleauLongName": "Résultat Produits"
    }]
},
{
   "Id": 50000,
    "TableauName": "tblResultat",
    "tbleauLongName": "Résultat",
    "oStableauPoste": [
	{
	    "oStableauName": "tblResultat",
	    "StbleauLongName": "Résultat"
	}]
},
{
   "Id": 52000,
    "TableauName": "tblChifAffair",
    "tbleauLongName": "Chiffre d'Affair",
    "oStableauPoste": [
    {
        "oStableauName": "tblChifAffair",
        "StbleauLongName": "Chiffre d'Affair"
    }]
};
})();
