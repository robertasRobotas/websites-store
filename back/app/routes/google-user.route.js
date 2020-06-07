const express = require('express');
const router = express.Router();
const passport = require('passport');
const googlePassportSetup = require('../configs/passport-google');
const { logger } = require('../helpers/logger.helper');

router.get(
  '/auth',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
    ],
  })
);

router.get(
  '/auth/callback',
  (req, res, next) => {
    logger('LOGGED IN');
    next();
  },
  passport.authenticate('google', {
    failureRedirect: process.env.REDIRECT_AFTER_LOGIN_ON_FAILURE,
  }),
  function (req, res) {
    res.redirect(process.env.REDIRECT_AFTER_LOGIN);
  }
);

module.exports = router;
