var express = require('express');
var router = express.Router();

const customerModel = require('../models/customers.model');
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    res.send({status: res.statusCode,data:'okk'});
});


router.post('/add', function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    console.log(req.body)
    let customerObj = new customerModel({
        firstName: 'habeeb',
        lastName: 'rahman',
        email: 'test@gmail.com',
        phone: '2334346',
        dob: '1/1/3000',
        dept: 'CRM'
    })

    customerObj.save((err,customerObj) => {
        if(err){
            res.send({status: err,message: 'Unable to add customer'});
        }
        else{
            res.send({status: 200,message: 'customer added successfully',customerDetails: customerObj});
        }
    })
});


router.put('/update', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/delete', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
