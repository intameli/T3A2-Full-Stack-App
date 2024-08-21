const mongoose = require('mongoose')
require('mongoose-type-email')
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        work: {type: mongoose.SchemaTypes.Email, allowBlank: true},
        home: {type: mongoose.SchemaTypes.Email, required: true}
    },
    mobileNr:{type: String, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, },
    password:{type: String, required: true}
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)