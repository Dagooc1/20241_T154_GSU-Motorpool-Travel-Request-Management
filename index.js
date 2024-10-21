const express = require('express')
const app = express()

// ------------------------------------------------------------------------------- //
//                               CREDENTIALS                                       //
// ------------------------------------------------------------------------------- //

// Sign In using Office Code
app.post("/SignIn/Office_Code", authentication, function (req, res) {

});

// Sign In using Email that already embedded with an Office Code
app.post("/SignIn/email", authentication, function (req, res) {

});

// Sign Up with Office Code
app.post("/SignUp/Office_Code", authentication, function (req, res) {

});

// Sign Up with Email that will embedded with an Office Code
app.post("/SignUp/email", authentication, function (req, res) {

});

// ------------------------------------------------------------------------------- //
//                             USER'S HOME PAGE                                    //
// ------------------------------------------------------------------------------- //

// Home Page of Users uniquely by Office Code
app.get("/Home_user/:Office_Code", function (req, res) {

});

// ------------------------------------------------------------------------------- //
//                           AUTHORITY TO TRAVEL                                   //
// ------------------------------------------------------------------------------- //

// Showing the Context of the Authority To Travel form
app.get("/user/authority_to_travel_form", function (req, res) {

});

// Storing the Filled Form embedded with an Office Code
app.post("/user/authority_to_travel_filled_form/:Office_Code", function (req, res) {

});

// Export to PDF
app.get("/user/authority_to_travel_form_export", function (req, res) {

});

// ------------------------------------------------------------------------------- //
//                            REQUEST TO TRAVEL                                    //
// ------------------------------------------------------------------------------- //


// Showing the Context of the Request To Travel form
app.get("/user/request_to_travel_form", function (req, res) {

});

// Upload an Image of Authority to Travel Form
app.post("/user/upload_authority_to_travel_form", upload.single('image'), function (req, res) {

});

// Storing the Filled Form embedded with an Office Code
app.post("/user/request_to_travel_filled_form/:Office_Code", function (req, res) {

});

// Sending the A.T.T and R.T.T filled form to the GSU Supervisor
app.post("/user/authority_to_travel_and_request_to_travel_filled_form/:Office_Code", function (req, res) {

});

// ------------------------------------------------------------------------------- //
//                          SUPERVISOR'S HOME PAGE                                 //
// ------------------------------------------------------------------------------- //

// Home Page of Supervisor authenticate by Office Code
app.get("/Home_supervisor/:Office_Code", function (req, res) {

});

// Showing the Context of the Authority to Travel from the Users
app.get("/supervisor/authority_to_travel/:Office_Code", function (req, res) {

});

// Showing the Context of the Requested Travel from the Users
app.get("/supervisor/request_to_travel/:Office_Code", function (req, res) {

});

// Finalizing the Request by filling the necesaary details from the GSU-Motorpool
app.post("/supervisor/request_to_travel_finalizing/:Office_Code", function (req, res) {

});

// Creation of the Driver's Trip Ticket
app.post("/supervisor/driver_trip_ticket/:Office_Code", function (req, res) {

});

// Creation of the Inspection Checklist
app.post("/supervisor/inspection_checklist/:Office_Code", function (req, res) {

});

// Sending the R.T.T and D.T.T filled form to the GSU Admin
app.post("/supervisor/request_to_travel_and_driver_trip_ticket_filled_form/:Office_Code", function (req, res) {

});

// ------------------------------------------------------------------------------- //
//                             ADMIN'S HOME PAGE                                   //
// ------------------------------------------------------------------------------- //

// Home Page of Admin authenticate by Office Code
app.get("/Home_admin/:Office_Code", function (req, res) {

});

// Showing the Context of the Request to Travel and Driver Trip Ticket from the GSU's Supervisor
app.get("/admin/request_to_travel_and_driver_trip_ticket/:Office_Code", function (req, res) {

});

// Sending back the Approved R.T.T and D.T.T
app.post("/admin/approved_forms/:office_code", function(req, res) {

})



function authentication(req, res, next){
    
}

app.listen(3000)