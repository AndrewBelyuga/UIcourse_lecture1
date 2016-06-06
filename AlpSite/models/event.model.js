var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: String,
    imageUrl: String,
    description: String,
    start: { type: Date, default: Date.now },
    end: { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Event', eventSchema );