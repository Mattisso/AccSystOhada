//var fs = require('fs');
var XLSX = require('xlsx');
var path = require('path');

 //function exceltojson (){
 const dirname =path.join(__dirname,'./Book06.xlsx');
// console.log(dirname)

 var workbook = XLSX.readFile(dirname);

 /* Get worksheet */

 var first_sheet_name = workbook.SheetNames[0]   // workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var options = {
  raw : true,
header: ['NumCompte','IntitulCompte','SoldeDebit','SoldeCredit']
}
var exceltojson=  JSON.stringify(XLSX.utils.sheet_to_json(worksheet,options));

console.log(exceltojson);
