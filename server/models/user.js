let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let accounts = require('./../utils/accounts');
let userSchema = mongoose.Schema({
    isVerified: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    isActive: {type: Boolean, default: true},
    username: {
        type: String,
        unique: true,
        minLength: 5
    },
    email: {
        type: String,
        unique: true
    },
    passwordHash: String,
    passwordSalt: String,
    information: Object,
    locale: String,
    lastLogin: Date,
    confirmationLink: String,
    confirmationLinkExpiresAt: String,
    passwordResetToken: String,
    passwordResetTokenExpiresAt: Date,
    resetPasswordLink: String
});
// assign a function to the "methods" object of our userSchema
userSchema.methods.setPassword = function (password) {
    let passwordHashAndSalt = accounts.hashPassword(password);
    this.passwordHash = passwordHashAndSalt.passwordHash;
    this.passwordSalt = passwordHashAndSalt.passwordSalt;
    return this;
};
let userModel = mongoose.model('User', userSchema);
module.exports = {Schema: userSchema, Model: userModel};