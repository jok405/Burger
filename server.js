/*      Burger Express App | Composed by John Kim | University of Richmond      */


const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

// Manages app's static content from the "public" directory within application directory.
app.use(express.static(process.cwd() + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));        // Parse app | proper url encode
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', router); 


app.listen(port, function() {
    console.log("App listening on PORT " + port);
});