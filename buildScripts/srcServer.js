import express from 'express';
import path  from 'path';
import open from 'open';
const port=5000;
const app=express();
app.get('/', function(req,res){

  res.sendfile(path.join(__dirname,'../src/index.html'));
});
app.listen(port, function(err){
if (err){
  console.log(err);
}else {
  open('http://localhost:'+port);
}
});