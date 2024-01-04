const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils middleware/helpers');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Create a new Sequelize instance
const sequelize = new Sequelize('tech_blog', 'root', 'Halloween1!', {
  host: 'localhost',
  dialect: 'mysql',
  // other options
});

// Set the view engine and views directory
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Set up the express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// ... (other configurations)

// Sample route to render the homepage template
app.get('/', (req, res) => {
  // Fetch your blog posts data from the database
  const posts = []; // Replace with actual data retrieval logic

  // Set the 'user' property in the session
  req.session.user = { /* user data */ };

  res.render('home', { user: req.session.user, posts });
});

// Sample route to render the sign-in template
app.get('/signin', (req, res) => {
  res.render('signin');
});

// Sample route to handle sign-in logic
app.post('/signin', (req, res) => {
  // Implement your sign-in logic here
});

// Sample route to render the sign-up template
app.get('/signup', (req, res) => {
  res.render('signup');
});

// Sample route to handle sign-up logic
app.post('/signup', (req, res) => {
  // Implement your sign-up logic here
});

// ... (other routes)

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});