# Google and Facebook authentication template

It is blueprint for small apps which require social login.

Steps to prepare template.

1. Add "secrets.js" to ./back/app

2. Paste into it:

const initializeEnvVariables = () => {
process.env.PORT = xxx;
process.env.MONGO_LINK = 'xxx';
process.env.MONGO_LINK_MLAB =
'xxx';

process.env.GOOGLE_CLIENT_ID =
'xxx';
process.env.GOOGLE_CLIENT_SECRET = 'xxx';
process.env.GOOGLE_CALLBACK_LINK =
'xxx';

process.env.FACEBOOK_CLIENT_ID = 'xxx';
process.env.FACEBOOK_CLIENT_SECRET = 'xxx';
process.env.FACEBOOK_CALLBACK_LINK =
'xxx';

process.env.REDIRECT_AFTER_LOGIN = 'xxx';
process.env.REDIRECT_AFTER_LOGIN_ON_FAILURE = 'xxx';
};

module.exports = initializeEnvVariables;

// You have to create google and facebook api connect account and register

3. Add ".env" to ./front and paste to it :

REACT_APP_SERVER_HOST="xxx"

4. go to ./back , ./front , ./ and run "yarn" or "npm i"
