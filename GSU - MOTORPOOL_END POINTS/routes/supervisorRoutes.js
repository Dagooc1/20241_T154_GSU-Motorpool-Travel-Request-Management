const express = require('express');
const supervisor = express.Router();

// Sign In using Office Code
supervisor.post('/SignIn/:Office_Code', function(req, res) {

});

// Dashbord of Supervisor authenticate by Office Code
supervisor.get('/:Office_Code', function(req, res) {

});

// Showing the Context of the Authority to Travel from the Users
supervisor.get('/Authority_To_Travel_Form/:Office_Code', function(req, res) {

});

// Showing the Context of the Requested Travel from the Users
supervisor.get('/Request_To_Travel_Form/:Office_Code', function(req, res) {

});

// Finalizing the Request by filling the necesaary details from the GSU-Motorpool
supervisor.post('/Request_To_Travel_Finalizing_Form/:Office_Code', function(req, res) {

});

// Showing the Context of the Driver Trip Ticket
supervisor.get('/Driver_Trip_Ticket_Form', function(req, res) {

});

// Creation of the Driver's Trip Ticket
supervisor.post('/Driver_Trip_Ticket_Filled_Form/:Office_Code', function(req, res) {
    
});

// Showing the Context of the Inspection Checklist
supervisor.get('/Inspection_Checklist', function(req, res) {
    
});

// Creation of the Inspection Checklist
supervisor.post('Inspection_Checklist_Filled_Form/:Office_Code', function(req, res) {
    
});

// Sending the R.T.T and D.T.T filled form to the GSU Admin
supervisor.post('/Request_To_Travel_and_Driver_Trip_Ticket_/:Office_Code', function(req, res) {
    
});

supervisor.post('/Sign_Out/:Office_Code', function(req, res) {
    
})

module.exports = supervisor;