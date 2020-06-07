const express = require('express');
const router = express.Router();
const passport = require('passport');
const facebookPassportSetup = require('../configs/passport-facebook');
const { logger } = require('../helpers/logger.helper');

router.get(
  '/auth',
  passport.authenticate('facebook', {
    scope: ['public_profile,email,user_friends'],
  })
);

router.get(
  '/auth/callback',
  (req, res, next) => {
    logger('LOGGED IN');
    next();
  },
  passport.authenticate('facebook', {
    failureRedirect: process.env.REDIRECT_AFTER_LOGIN_ON_FAILURE,
  }),
  function (req, res) {
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  }
);

module.exports = router;
