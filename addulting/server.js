const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport"), LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);
//passport
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({secret: "fourlights"}));
app.use(passport.initialize());
app.use(passport.session());


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/addulting");

var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

passport.use(new LocalStrategy(
	function (username, password, done) {
	  User.findOne({ username: username }, function (err, user) {
		if (err) { return done(err); }
		if (!user) {
		  return done(null, false, { messsage: 'Incorrect username' });
		}
		if (user.password !=password) {
		  return done(null, false, { message: 'Incorrect password.' });
  
		}
		return done(null, user);
	  });
	}
  ));
  
  
  app.post("/submit", function (req, res) {
	User.create(req.body)
	  .then(function (dbUser) {
		res.json(dbUser);
	  })
	  .catch(function (err) {
		res.json(err);
	  });
  });
  
  passport.serializeUser(function (user, done) {
	done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
	  done(err, user);
	});
  });
  
  app.post('/login',
	passport.authenticate('local', { failureRedirect: '/login' }),
	function (req, res) {
	  res.redirect('/');
	});
// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
