var path    = require('path');
var User = require(path.join(__dirname + '/../models/user.model.js'));


exports.create = function(req, res) {
    var entry = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        level: req.body.level,
        email: req.body.email,
        passwd: req.body.passwd,
        about: req.body.about
    });

    entry.save();

    // Redirect to the home page...
    res.redirect(301, '/');
};