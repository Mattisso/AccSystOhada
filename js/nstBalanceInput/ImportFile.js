        //import path from 'path';
        //import fs  from 'fs';
        var fs = require("fs");
        var path =require("path");
        var buf= new Buffer(1024);

        const dirname =path.join(__dirname,'./OdaImportFolder/Book06.xls');

        console.log("Going to get file info!");

        fs.stat(dirname, function (err, stats) {
        if (err) {
            return console.error(err);
        }
        console.log(stats);
        console.log("Got file info successfully!");
        
        // Check file type
        console.log("isFile ? " + stats.isFile());

        console.log("isDirectory ? " + stats.isDirectory());    
       

        console.log("Going to open an existing file");

        fs.open(dirname, 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("File opened successfully!");

        console.log("Going to truncate the file after 10 bytes");
        
/*         // Truncate the opened file.
        fs.ftruncate(fd, 10, function(err){
            if (err){
                console.log(err);
            } 
            console.log("File truncated successfully.");
             });
 */
            console.log("Going to read the same file"); 
            
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }

                // Print only read bytes to avoid junk.
                if(bytes > 0){
                    console.log(buf.slice(0, bytes).toString());
                }


                console.log("Going to read directory /tmp");
                fs.readdir(__dirname,function(err, files){
                if (err) {
                    return console.error(err);
                }
                files.forEach( function (file){
                    console.log( file );
                });
                });

                // Close the opened file.
                fs.close(fd, function(err){
                    if (err){
                    console.log(err);
                    } 
                    console.log("File closed successfully.");
                });
           /*              
             console.log("Going to delete an existing file");
                fs.unlink(dirname, function(err) {
                if (err) {
                    return console.error(err);
                }
                console.log("File deleted successfully!");
                });
                     */
            
            });
       
        });
 });








        /*
        const files =fs.readdirSync(dirname, function (err, data){

            if (err){
                return console.error(err);
            }
            console.log("Asynchronous read" +data.toString());


        files.forEach(file=> {
            const filePath=path.join(dirname,file);
            fs.stat(filePath, function(err, stats){
                if (err){
                    return console.error(err);

                }
                console.log(stats);
                console.log("Got file info sucessfully")
                //check file type
                console.log("isFile ? " +stats.isFile());
                console.log("isDirectory ? " +stats.isDirectory())
            });
        });

        });
            
            

        // Asynchronous read
        fs.readFile('C:\SysOhada\Documents\Book06.xls', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        });

        // Synchronous read
        var data = fs.readFileSync('input.txt');
        console.log("Synchronous read: " + data.toString());

        console.log("Program Ended");*/