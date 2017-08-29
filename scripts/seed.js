require('../server/db');
let argv = require('minimist')(process.argv.slice(2));
/**
 *
 * @param email
 * @param password
 * @param username
 */
function createAdmin(email, password, username) {
    let models = require('models');
    if (!email || !password) {
        throw new Error('-p|-password password , -email|-e for email');
    }
    // TODO check for email
    let adminUser = new models.User({
        isAdmin: true,
        email: email,
        username: username || email
    });
    // Set password and save
    adminUser
        .setPassword(password)
        .save(function (err, entry) {
            console.log(entry)
            console.log(err)
            if (err) {
                throw  new Error(err);
            }
            console.log(`The user ${email} has been created !`)
        });
}
let MESSAGE_HELPER = 'please specify a task [-t=a for admin] ';
if (argv.t) {
    switch (argv.t) {
        case "admin" :
        case "a" :
            createAdmin(argv.e || argv.email, argv.p || argv.pass, argv.u || argv.username);
            break;
        default :
            throw new Error(MESSAGE_HELPER);
    }
}
else {
    throw new Error(MESSAGE_HELPER);
}
//