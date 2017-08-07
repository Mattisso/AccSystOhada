var express = require('express'); 
var fs= require('fs');
var path = require('path');
var open = require('open');
 var port =3000;
    var app = express(); 
    var bodyParser = require('body-parser');
    var multer = require('multer');
     const destinationfolder =path.join(__dirname,'./ohadaimport/');

     console.log(destinationfolder);
    app.use(bodyParser.json());

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, destinationfolder)
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ //multer settings
                    storage: storage,
                    fileFilter : function(req, file, callback) { //file filter
                        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                            return callback(new Error('Wrong extension type'));
                        }
                        callback(null, true);
                    }
                }).single('file');

   /** API path that will upload the files */
       app.post('/upload', function(req, res) {
        var exceltojson; //Initialization
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            //start convert process
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
       /*     if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            try {
                exceltojson({
                    input: req.file.path, //the same path where we uploaded our file
                    output: null, //since we don't need output.json
                   lowerCaseHeaders:true
                }, function(err,result){
                    if(err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    } 
                    res.json({error_code:0,err_desc:null, data: result});
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }*/
        });
    });

  var filedestination= path.resolve(__dirname + "/index.html");


    app.get('/',function(req,res){
    res.sendFile(filedestination);
    });
/*
    app.listen('3000', function(){
        console.log('running on 3000...');
    });*/

    
app.listen(port, function(err){
if (err){
  console.log(err);
}else {
  open('http://localhost:'+port);
   console.log('running on 3000...');
}
});
