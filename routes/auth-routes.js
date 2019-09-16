const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "https://link-to-lift.herokuapp.com";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

//auth with google

router.get("/google", passport.authenticate("google",{scope:['profile', 'email'] }));


// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "https://link-to-lift.herokuapp.com/auth/twitter/redirect"
  })
);

// redirect to home page after successfully login via twitter
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "https://link-to-lift.herokuapp.com/auth/google/redirect"
  })
);

module.exports = router;
