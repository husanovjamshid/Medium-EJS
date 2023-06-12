const passport = require('passport');
require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

passport.use(
	new GoogleStrategy(
		{
			clientID: client_id,
			clientSecret: client_secret,
			callbackURL: 'http://localhost:5000/google/callback',
			scope: ['email', 'profile'],
		},
		function (req, accessToken, refreshToken, profile, done) {		
			return done(null, profile);
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
