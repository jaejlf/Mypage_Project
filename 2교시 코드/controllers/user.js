var express = require('express')
	, passport = require('passport')
	, session = require('express-session')
	, NaverStrategy = require('passport-naver').Strategy;

module.exports = function (app) {
	var client_id = '*****************';
	var client_secret = '*****************';
	var callback_url = '*****************';

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (obj, done) {
		done(null, obj);
	});

	passport.use(new NaverStrategy({
		clientID: client_id,
		clientSecret: client_secret,
		callbackURL: callback_url,
		svcType: 0
	}, function (accessToken, refreshToken, profile, done) {
		process.nextTick(function () {

			user = {
				name: profile.displayName,
				email: profile.emails[0].value,
				username: profile.displayName,
				provider: 'naver',
				naver: profile._json
			};

			console.log(user);
			return done(null, profile);
		});
	}));

	return passport;
}