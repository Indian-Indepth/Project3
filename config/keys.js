// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY||"LejHtwu978T2x6Ir8NkStNDNt",
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET||"uMzF9PYafxdW418I4DfmT3GBHbPWKISEp7i8e9eQfqMJJaj6NE",
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN|| "1152275745328324614-hrLKzoZENGEY0E5Frbvjqs6hwzJQNj",
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET||"aiFS4ynvBKP0UQNJ0dRu2K1S5vLzLcSvcb5adZPlI6vhc"
};

const GOOGLE_TOKEN={
  GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID||'644023583819-tohnrqi3rq4tg93j3t3opq667a9ji2rj.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET||'LxoSh167YR_ssZllzgsLKaUe'
}

const DB_USER = "";
const DB_PASSWORD = "SOME PASSWPORD";
const MONGODB = {
  //MONGODB_URI: `mongodb://raj:raj123@ds161764.mlab.com:61764/link-to-lift`
  MONGODB_URI : `mongodb://localhost/oauth`
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
