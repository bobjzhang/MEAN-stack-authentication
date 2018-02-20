var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var nodemailer = require('nodemailer');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var sendVerificationEmail = function(mailOptions) {
  return nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass,
        }
    });

    return transporter.sendMail(mailOptions);
  });  
};

module.exports.register = function(req, res) {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  // TODO: Figure out why createTestAccount is not working  
  // }).then(() => {
  //   return sendVerificationEmail({
  //     from: 'MEAN Stack Authentication', 
  //     to: user.email, 
  //     subject: 'Hello', 
  //     text: 'Verify Email',
  //     html: '<b>Verify Email</b>' 
  //   });
  // }).then((error, info) => {
  //   console.log('Message sent: %s', info.messageId);
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));    
  }).catch((error) => {
    console.log(error);
  });
};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
