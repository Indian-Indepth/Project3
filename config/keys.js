// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET
};

const GOOGLE_TOKEN={
  GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET
}

const DB_USER = "";
const DB_PASSWORD = "SOME PASSWPORD";
const MONGODB = {
  MONGODB_URI: process.env.MONGODB_URI
  //MONGODB_URI : `mongodb://localhost/oauth` || mongodb://raj:raj123@ds161764.mlab.com:61764/link-to-lift`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION,
  ...GOOGLE_TOKEN
};

module.exports = KEYS;
