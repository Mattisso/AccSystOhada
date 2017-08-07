     var fs = require("fs");
        var path =require("path");
        var buf= new Buffer(1024);

        const dirname =path.join(__dirname,'OdaImportFolder','Book07.xls');
         const dirname2 =path.join(__dirname,'OdaImportFolder','2007.txt');



fs.readFile(dirname, function (er, buf) {
console.log(Buffer.isBuffer(buf)); // true
});

fs.readFile(dirname, function (er, buf) {
console.log(buf);
console.log(dirname);
});

fs.readFile(dirname, function (er, buf) {
console.log(buf.toString());
});

fs.readFile(dirname, function (er, buf) {
console.log(buf.toString('ascii'));
});
