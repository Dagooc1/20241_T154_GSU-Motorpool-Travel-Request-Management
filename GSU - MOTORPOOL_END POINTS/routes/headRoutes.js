const express = require('express');
const head = express.Router();

// Sign In using Office Code
head.post('/SignIn/:Office_Code', function(req, res) {

});

head.get('/:Office_Code', function(req, res) {

});

head.get('/Request_To_Travel_and_Driver_Trip_Ticket/:Office_Code', function(req, res) {

});

head.post('/Approved_Forms/:Office_Code', function(req, res) {

});

head.post('/Sign_Out/:Office_Code', function(req, res) {
    
})

module.exports = head;