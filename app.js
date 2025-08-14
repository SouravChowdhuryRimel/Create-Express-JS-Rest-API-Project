const express = require('express');
const router = require('./src/routes/api');

const app = express();

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
// const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


// ENV config
const dotENV = require('dotenv');
dotENV.config();


// Security Middleware implements
app.use(helmet());
// app.use(xss());
app.use(hpp());
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit:'100mb'}));

// Rate limit 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000,
});
app.use(limiter);

// Database



app.use("/api/v1", router);
module.exports = app;