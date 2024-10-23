const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require("./routes/userRoutes")
const supervisorRoutes = require("./routes/supervisorRoutes")
const headRoutes = require("./routes/headRoutes")

const port = 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/User", userRoutes);
app.use("/Supervisor", supervisorRoutes);
app.use("/Head", headRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });