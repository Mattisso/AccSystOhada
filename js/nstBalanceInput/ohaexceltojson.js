
var ohaconvertbalancetojson= (function(){
		//var fs = require('fs');
			var XLSX = require('xlsx');
var path = require('path');
var _getworkbook  = function  (getFile) {
//	console.log(getFile)
const filename=getFile;
//const getFile =path.join(__dirname,'./Book06.xlsx');
//fs.readFile(getFile, function (er, buf) {
//console.log(Buffer.isBuffer(buf)); // true
 var workbook = XLSX.readFile(filename)
 //console.log(filename);
// console.log(workbook)
  var first_sheet_name = workbook.SheetNames[0];   // workbook.SheetNames[0];
var oworksheet = workbook.Sheets[first_sheet_name];
//console.log(oworksheet)
var options = {
  raw : true,
header: ['NumCompte','IntitulCompte','SoldeDebit','SoldeCredit']
}
var worksheettojson= JSON.stringify(XLSX.utils.sheet_to_json(oworksheet,options));
//console.log(worksheettojson)
return {
	workbook:workbook,
	oworksheet:oworksheet,
worksheettojson: worksheettojson
} 

	};

var getworksheetData = function (filename){
_getworkbook(filename);
//	return;
};

return {
		 getworksheetData:getworksheetData
	};

})();


if (typeof module != "undefined" && module.exports)
  module.exports = ohaconvertbalancetojson;
var path = require('path');
const dirname = path.join(__dirname,'./Book06.xlsx');
//console.log(dirname)
var getworksheetData=  new  ohaconvertbalancetojson.getworksheetData(dirname)
console.log(getworksheetData);
