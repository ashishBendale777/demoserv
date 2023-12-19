const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    UserName: String,
    UserEmail: String,
    UserPassword: String,
    UserMobno: Number
})

module.exports = mongoose.model("User", UserSchema)