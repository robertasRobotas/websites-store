const passport = require('passport');
const { findExistingUserOrAddToDB } = require('../helpers/user.helper');
const serializeDeserialize = require('./serialization');

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_LINK,
      profileFields: ['email', 'name', 'photos'],
    },
    async (accessToken, refreshToken, profile, done) => {
      const userDataTransform = {
        email: profile._json.email,
        name: `${profile._json.first_name} ${profile._json.last_name}`,
        picture: profile._json.picture.data.url,
        id: profile._json.id,
      };

      const user = await findExistingUserOrAddToDB(userDataTransform);
      done(null, user);
    }
  )
);
