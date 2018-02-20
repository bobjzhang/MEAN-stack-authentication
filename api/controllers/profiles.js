var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.getAllUsers = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .find({})
      .exec(function(err, users) {
        res.status(200).json(users);
      });
  }

};
