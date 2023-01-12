// Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');
// Object of express
const app = new express();
const bodyParser = require('body-parser');


// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database Lib Import
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body parser implement
app.use(bodyParser.json());

// Request rate limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000}); // 15 min
app.use(limiter);


// mongoDB database connection
let URI = "mongodb://127.0.0.1:27017/todo";
let OPTION = {user:'', pass:'', autoIndex:true};
mongoose.connect(URI, OPTION, (error)=>{
    console.log('connection success');
    console.log(error);

});


// Routing Implement
app.use("/api/v1", router);

// Undefined route
app.use("*", (req, res)=>{
   res.status(404).json({status:"fail", data:"Not found"}) ;
});

module.exports=app;