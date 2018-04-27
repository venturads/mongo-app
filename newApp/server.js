const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

const port = 8080;

app.get('/', (req, res) => {
  //response.send('Hello from express')
  res.sendfile('index.html'); //load
})
app.listen(port, (err) => {
  if(err){
    console.log('we got bugs', err); 
  }
  console.log('server gots ears on ${port}')
});