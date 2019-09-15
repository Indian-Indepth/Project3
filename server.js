const cookieSession = require("cookie-session");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const routes = require("./routes");
const PORT = process.env.PORT || 4000;
const app = express();
var socket = require("socket.io");
var server = app.listen(4001,()=>{
    console.log("Chat app server is running on Port 4001");
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
mongoose.set('useCreateIndex', true)
// Connect to the Mongo DB
mongoose.connect(
  keys.MONGODB_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("MongoDB connected...");
  }
);
//connect to the Mongo DB
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/linktolift");

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(cors({
  origin: "http://localhost:3000", // allow to server to accept request from different origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // allow session cookie from browser to pass through
}));
//app.use(cors());
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// set up routes
app.use("/auth", authRoutes);
//app.use("/profile",profRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

//socket setup

var io = socket(server);
io.on("connection", socket=>{
  console.log("made socket connection");

  socket.on('chat',(data)=>{
    io.sockets.emit("chat",data);

  })

});