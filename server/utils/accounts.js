'use strict';
let crypto = require('crypto');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
let genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length);
    /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
let sha512 = function (password, salt) {
    let hash = crypto.createHmac('sha512', salt);
    /** Hashing algorithm sha512 */
    hash.update(password);
    let value = hash.digest('hex');
    return {
        passwordSalt: salt,
        passwordHash: value
    };
};
/**
 *
 * @param userpassword
 * @returns {{salt, passwordHash}}
 */
function hashPassword(userpassword) {
    let salt = genRandomString(16);
    /** Gives us salt of length 16 */
    return sha512(userpassword, salt);

}
/**
 *
 * @param dbPasswordHash
 * @param inputPassword
 * @param salt
 * @returns {boolean}
 */
function verifyDbPasswordHashWithInput(dbPasswordHash, salt, inputPassword) {
    console.log(inputPassword);
    let inputPasswordHashAndSalt = sha512(inputPassword, salt);
    return dbPasswordHash === inputPasswordHashAndSalt.passwordHash;
}

/**
 * @returns {String}
 */
function getPasswordResetToken() {
    return genRandomString(20);
}
/**
 *
 * @param h
 * @returns {number}
 */
function getNextHoursDate(h){
    return Date.now() + (h * 60 * 60 * 1000)
}
/**
 *
 * @type {{hashPassword: hashPassword, verifyDbPasswordHashWithInput: verifyDbPasswordHashWithInput}}
 */
module.exports = {
    hashPassword: hashPassword,
    verifyDbPasswordHashWithInput: verifyDbPasswordHashWithInput,
    getPasswordResetToken : getPasswordResetToken,
    getNextHoursDate : getNextHoursDate
};