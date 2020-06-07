const passport = require('passport');
const { findExistingUserOrAddToDB } = require('../helpers/user.helper');
const serializeDeserialize = require('./serialization');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_LINK,
    },
    async (accessToken, refreshToken, profile, done) => {
      const userDataTransform = {
        email: profile._json.email,
        name: profile._json.name,
        picture: profile._json.picture,
        id: profile._json.sub,
      };
      const user = await findExistingUserOrAddToDB(userDataTransform);
      done(null, user);
    }
  )
);
