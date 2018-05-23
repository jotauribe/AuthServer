// Load required packages
var { User } = require('../models');

// Create endpoint /api/users for POST
exports.addUsers = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) return res.send(err);

    res.json({ message: 'New beer drinker added to the locker room!' });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.find({ userId: req.user._id }, function(err, users) {
    if (err) return res.send(err);

    res.json(users);
  });
};
