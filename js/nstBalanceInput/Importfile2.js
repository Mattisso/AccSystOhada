     var fs = require("fs");
        var path =require("path");
        var buf= new Buffer(1024);

        const dirname =path.join(__dirname,'OdaImportFolder','Book07.xls');
         const dirname2 =path.join(__dirname,'OdaImportFolder','2007.txt');



fs.readFile(dirname2, function (er, buf) {
console.log(Buffer.isBuffer(buf)); // true
});

fs.readFile(dirname2, function (er, buf) {
console.log(buf);
console.log(dirname2);
});

fs.readFile(dirname2, function (er, buf) {
console.log(buf.toString());
});

fs.readFile(dirname2, function (er, buf) {
console.log(buf.toString('ascii'));
});
        /*  console.log("Going to open an existing file");

        fs.open(dirname, 'r+', function(err, fd){
        if (!err) {
          fs.close(fd);
  }
        });
console.log("File opened successfully!");


 console.log("Going to open an existing file sync");
var fd=fs.openSync(dirname,'r+');
fs.closeSync(fd);

console.log("File opened successfully sync!" + fd.toString()); */

/*
var config={
  maxFiles:20,
  maxConnections:15,
  rootPath:__dirname
};
var configText=JSON.stringify(config);
var options= {encoding:'utf8', flag:'r'};
fs.writeFile(dirname, configText, options, function(err){
  if (err){
    console.log("config write failed.:");
  } else {
console.log("config saved");
  }
});

*/
