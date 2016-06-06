var path    = require('path');
var Event = require(path.join(__dirname + '/../models/event.model.js'));


exports.list = function(req, res) {
    Event.find(req.url).lean().exec(function(err, results) {
            res.render('calendar', {notes: JSON.stringify(results)});
        });
};

exports.getById = function(req, res) {
    Event.findById(req.url.split('?')[1]).lean().exec(function(err, results) {
            res.render('event', {notes: results});
        });
};

exports.create = function(req, res) {
    var entry = new Event({
        title: req.body.title,
        imageUrl: req.body.url,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end
    });

    entry.save();

    res.redirect(301, '/');
};

