var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var userSchema = new Schema({
        first_name: String,
        last_name: String,
        date_of_birth: { type: Date, default: Date.now },
        level: String,
        email: String,
        passwd: String,
        about: String
});

module.exports = mongoose.model( 'User', userSchema );