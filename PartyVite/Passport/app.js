const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport.setup');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(1337, () => {
    console.log('App now listening for requests on port: 1337');
});