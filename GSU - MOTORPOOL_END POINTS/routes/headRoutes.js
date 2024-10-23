const express = require('express');
const head = express.Router();

// Sign In using Office Code
head.post('/SignIn/:Office_Code', function(req, res) {

});

// Dashbord of Head authenticate by Office Code
head.get('/:Office_Code', function(req, res) {

});

// Showing the Context of the Request to Travel and Driver Trip Ticket from the GSU's Supervisor
head.get('/Request_To_Travel_and_Driver_Trip_Ticket/:Office_Code', function(req, res) {

});

// Sending back the Approved R.T.T and D.T.T
head.post('/Approved_Forms/:Office_Code', function(req, res) {

});

head.post('/Sign_Out/:Office_Code', function(req, res) {
    
})

module.exports = head;