let models = require('models');
let router = require('express').Router();
let _ = require('underscore');
let utils = require('app-utils');
const VIEWS_PATH = 'accounts';
//
function renderView(viewName, res, loclas) {
    loclas = loclas || {};
    if (!loclas.error) {
        loclas.error = null;
    }
    res.render([VIEWS_PATH, viewName].join('\\'), loclas);
}
/**
 *
 * @param token
 * @param cb
 */
function verifyPasswordResetLink(token, cb) {
    models.User.findOne(
        {passwordResetToken: token}
        , function (err, item) {
            console.log(item);
            if (err || !item) {
                return cb("No account !");
            }
            // ok
            console.log(item.passwordResetTokenExpiresAt);
            if (item.passwordResetTokenExpiresAt.getTime() > utils.accounts.getNextHoursDate(1)) {
                cb("Link expired !");
            }
            cb(null, item);
        });
}
/**
 *
 */
router.get('/login', (req, res) => {
    renderView("login", res);
});
/**
 *
 */
router.get('/register', (req, res) => {
    renderView("register", res);
});

/**
 *
 */
router.get('/forgot-password', (req, res) => {
    renderView("forgot_password", res);
});
/**
 *
 */
router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (!_.isEmpty(username) && !_.isEmpty(password)) {
        models.User.findOne(
            {
                $or: [{username: username}, {email: username}]
            }
            , function (err, item) {
                console.log(item);
                if (err || !item) {
                    if (err) {
                        return renderView("login", res, {error: err});
                    } else {
                        return renderView("login", res, {error: "No account !"});
                    }
                }
                if (utils.accounts.verifyDbPasswordHashWithInput(item.passwordHash, item.passwordSalt, password)) {
                    utils.helpers.initUserSession(item, req);
                    if (req.session.isUserAdmin){
                        return res.redirect('/admin');
                    }
                    res.redirect('/');
                }
                else {
                    renderView("login", res, {error: "username/password not match !"});
                }
            });
    }
    else {
        renderView("login", res, {error: "empty fields"});
    }

});

/**
 *
 */
router.post('/register', (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let rePassword = req.body.re_password;
    console.log(username, email, password, rePassword);
    if (_.isEmpty(password) || _.isEmpty(email) || _.isEmpty(username)) {
        renderView("register", res, {error: "empty field "});
    }
    if (password.length < 5) {
        renderView("register", res, {error: "Length nok  "});
    }
    if (!_.isEqual(rePassword, password)) {
        renderView("register", res, {error: "password does'nt much "});
    }
    // check for length
    let newUser = new models.User({
        username: username,
        email: email
    });
    // build link
    newUser.setPassword(password).save(function (err, created) {
        if (err) {
            return renderView("register", res, err)
        }
        renderView("login", res);
    })
});

/**
 *
 */
router.post('/log-out', (req, res) => {
    utils.helpers.cleanUserSession(req);
    res.redirect('/');
});
/**
 *
 */
router.get('/reset-password/:resetLink', (req, res) => {
    let resetLink = req.params.resetLink;
    verifyPasswordResetLink(resetLink, function (err) {
        if (err) {
            return renderView("forgot_password", res, {error: err});
        }
        renderView("reset_password", res, {resetLink: resetLink});
    })
});

/**
 *
 */
router.post('/reset-password', (req, res) => {
    let resetLink = req.body.reset_link;
    verifyPasswordResetLink(resetLink, function (err, user) {
        if (err) {
            return renderView("forgot_password", res, {error: err});
        }
        let password = req.body.password;
        let rePassword = req.body.re_password;
        if (!_.isEmpty(password) && _.isEqual(password, rePassword)) {
            let passwordHashAndSalt = utils.accounts.hashPassword(password);
            // check for length
            user.set({
                passwordHash: passwordHashAndSalt.passwordHash,
                passwordSalt: passwordHashAndSalt.passwordSalt
            });
            user.save(function (err, item) {
                if (!err) {
                    return res.redirect('/accounts/login');
                }
            });
        }
        else {
            renderView("reset_password", res, {resetLink: resetLink, error: "invalid form "});
        }
        //
    })
});
/**
 *
 */
router.post('/forgot-password', (req, res) => {
    let username = req.body.username;
    if (_.isEmpty(username)) {
        renderView("forgot_password", res, {error: "empty username "});
    }
    models.User.findOne(
        {
            $or: [{username: username}, {email: username}]
        }
        , function (err, item) {
            console.log(item);
            if (err || !item) {
                if (err) {
                    return renderView("forgot_password", res, {error: err});
                } else {
                    return renderView("forgot_password", res, {error: "No account !"});
                }
            }
            let resetLink = utils.accounts.getPasswordResetToken();
            console.log(`>>>>>>>>>>>>> ${resetLink}`);
            let nexHourTime = utils.accounts.getNextHoursDate(1);
            item.set({
                passwordResetToken: resetLink,
                passwordResetTokenExpiresAt: new Date(nexHourTime)
            });
            item.save(function (err, entry) {
                // FIXME , should sent by email
                renderView("reset_password_link", res, {resetLink: resetLink});
            })
        });
});

module.exports = router;