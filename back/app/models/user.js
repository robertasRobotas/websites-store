const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
  displayName: { type: String, required: true, min: 3 },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  },
  id: { type: String, required: true, min: 5 },
  picture: { type: String }
});

module.exports = mongoose.model('User', userSchema);
