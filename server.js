/*      Burger Express App | Composed by John Kim | University of Richmond      */

const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


const app = express();
// Manages app's static content from the "public" directory within application directory.
// app.use(express.static(`${process.cwd()}/public`)); // syntax may not work
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars yay!
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//const router = require('./controllers/burgers_controllers.js');
//app.use('/', router); //

// Open Server
const port = process.env.PORT || 3000;
app.listen(port);