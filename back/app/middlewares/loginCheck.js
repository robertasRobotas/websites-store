const isLoggedIn = (req, res, next) => {
  if (req.user !== undefined) {
    next();
  } else {
    res.status(401).json({ text: 'unauthorized' });
  }
};

module.exports = isLoggedIn;
