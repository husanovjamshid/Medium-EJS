const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const { CreateUser, userModel } = require('../model/user.model');
const { postModel } = require('../model/post.model');

function isLogged(req, res, next) {
	req.user ? next() : res.sendStatus(401);
}

router.use(
	session({
		secret: 'cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	}),
);

router.use(passport.initialize());
router.use(passport.session());

// Google Strategy
router.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['email', 'profile'],
	}),
);

router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/home',
	}),
);

router.get('/home', isLogged, async (req, res) => {
	const post = await postModel();
	console.log(post);
	CreateUser(req.user._json);
	res.cookie('id', req.user.id);
	res.render('home', { user: req.user, posts: post });
});

router.use('/auth/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/');
});

// Github Strategy

module.exports = router;
