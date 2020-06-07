const UserSchema = require('../models/user');
const passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserSchema.findOne({ id }).then((user) => {
    done(null, user);
  });
});
