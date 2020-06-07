const { Router } = require('express');
const router = Router();
const googleUserRoute = require('./app/routes/google-user.route');
const facebookUserRoute = require('./app/routes/facebook-user.route');
const userRoute = require('./app/routes/user.route');

const initializeRoutes = () => {
  router.use('/google', googleUserRoute);
  router.use('/facebook', facebookUserRoute);
  router.use('/api/user', userRoute);

  return router;
};

module.exports = {
  initializeRoutes,
};
