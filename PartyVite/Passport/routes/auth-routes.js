const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.render('logging out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get ('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('You reached the callback URI')
});

module.exports = router;