const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const GoogleStrategy = require("passport-google-oauth2");
const LocalSrategy = require("passport-local");
const keys = require("./keys");
const User = require("../models/user-model");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});


passport.use("local",
  new GoogleStrategy({
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret:keys.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect'
  },async(accessToken,refreshToken,profile,done)=>{
    const currentUser = await User.findOne({
      socialId : profile._json.sub
    });
    // create new user if the database doesn't have this user
    if (!currentUser) {
      const newUser = await new User({
        name: profile._json.name,
        screenName: profile._json.name,
        socialId: profile._json.sub,
        profileImageUrl: profile._json.picture,
        userType: '',
      }).save();
      if (newUser) {
        done(null, newUser);
      }
    }
    done(null, currentUser);


  }
));


passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/redirect"
    },
    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        socialId: profile._json.id_str
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screenName: profile._json.screen_name,
          socialId: profile._json.id_str,
          profileImageUrl: profile._json.profile_image_url,
          userType: '',
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.use(
  new LocalSrategy({
     usernameField : 'email', 
     passwordField: 'password',
     passReqToCallback: true
     
   },async(req, email,password,done) =>{
    const currentUser = await User.findOne({
      email: email
    });
    if (!currentUser) {
      const newUser = await new User({
        name: req.body.username,
        email:req.body.email,
        password: encryptPassword(req.body.password)
      }).save();
      if (newUser) {
        done(null, newUser);
      }
    }
    done(null, currentUser);
   } 
  )
  );

