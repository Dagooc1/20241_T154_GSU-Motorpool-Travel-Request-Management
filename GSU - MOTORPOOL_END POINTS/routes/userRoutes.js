const express = require('express');
const user = express.Router();

// Sign In using Office Code
user.post('/SignIn/:Office_Code', function(req, res) {
    
});

// Sign In using Email that already embedded with an Office Code
user.post('/SignIn/:Email', function(req, res) { 

});

// Sign Up with Office Code
user.post('/SignUp/:Office_Code', function(req, res) {

});

// Sign Up with Email that will embedded with an Office Code
user.post('/SignUp/:Email', function(req, res) { 

});

// Dashbord of Users uniquely by Office Code
user.get('/:Office_Code', function(req, res) { 

});

// Showing the Context of the Authority To Travel form
user.get('/Authority_To_Travel_Form', function(req, res) { 
    console.log("Try")
});

// Storing the Filled Form embedded with an Office Code
user.post('/Authority_To_Travel_Filled_Form/:Office_Code', function(req, res) {

});

// Export to PDF
user.get('/Authority_To_Travel_Export/:Office_Code', function(req, res) { 

});

// Showing the Context of the Request To Travel form
user.get('/Request_To_Travel_Form', function(req, res) { 

});

// Upload an Image of Authority to Travel Form
/*user.post("/Upload_Authority_To_Travel_Form", upload.single('image'), function (req, res) { 

});*/

// Storing the Filled Form embedded with an Office Code
user.post('/Request_To_Travel_Filled_Form/:Office_Code', function(req, res) { 
    
});

// Sending the A.T.T and R.T.T filled form to the GSU Supervisor
user.post("/Authority_To_Travel_and_Request_To_Travel_Filled_Form/:Office_Code", function (req, res) { 

});

user.post('/Sign_Out/:Office_Code', function(req, res) {

})

module.exports = user;