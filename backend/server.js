const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3001;
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const configureRoutes = require("./routes");
configureRoutes(app);

app.listen(PORT, error => {
    if (error) throw error;
    console.log("Server running on port " + PORT);
});