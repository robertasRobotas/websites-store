const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const { initializeRoutes } = require('./routes');
const passport = require('passport');
const cookieSession = require('express-session');

mongoose.connect(process.env.MONGO_LINK_MLAB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Headers', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.use(
  cookieSession({
    cookie: { maxAge: 3600000, httpOnly: true },
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    secure: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(initializeRoutes());

module.exports = app;
