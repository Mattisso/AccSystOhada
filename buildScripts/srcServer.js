import express from 'express';
import path  from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const  port=5000;
const  app=express();

/*var  express= require('express');
var  path = require('path');
var  open =require('open');

var webpack= require('webpack');
var config =require('../webpack.config.dev');
var  port=5000;
var  app=express();*/
const compiler= webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicpath: config.output.publicpath
}));
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
