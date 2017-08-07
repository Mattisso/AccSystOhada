/*if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
/* DO SOMETHING WITH workbook HERE */



/* output format determined by filename */
//XLSX.writeFile(workbook, 'out.xlsx');
/* at this point, out.xlsx is a file that you can distribute */


var fs = require('fs');
var XLSX = require('xlsx');
var path = require('path');
 const direname =path.join(__dirname,'./Book06.xls');
var workbook = XLSX.readFile(direname);

fs.readFile(direname, function (er, buf) {
console.log(Buffer.isBuffer(buf)); // true

});



var balance_sheet_of_cell = {
	NumCompte: 'A1',
	IntitulCompte: 'B1',
	SoldeDebit: 'C1',
	SoldeCredit: 'D1'	
};
       
 
/* Get worksheet */

 var first_sheet_name = workbook.SheetNames[0]   // workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var options = {
//range : XLSX.utils.decode_range(worksheet['!ref']),
//ncols :range.e.c - range.r.c + 1, nrows = range.e.r - range.s.r + 1,
header: ['NumCompte','IntitulCompte','SoldeDebit','SoldeCredit']
}
var exceltojson= XLSX.utils.sheet_to_json(worksheet,options);

console.log(exceltojson);
 


/* Find desired cell */
//var desired_cell = worksheet[balance_sheet_of_cell];

//console.log(desired_cell);

 
/* Get the value */
//var desired_value = (desired_cell ? desired_cell.v : undefined);

//console.log(desired_value);
 