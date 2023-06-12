const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID1 =
	'422139332781-q1j505m5df7pdop6vla5jntjib5dt7u3.apps.googleusercontent.com';

const clientSecret1 = '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';

passport.use(
	new GoogleStrategy(
		{
			clientID: clientID1,
			clientSecret: clientSecret1,
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
