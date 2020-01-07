const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/api.route'); // Imports routes for the products
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://balajipandi:Aara001@api01-bwqka.mongodb.net/Brokerage?retryWrites=true&w=majority';
const mongoDB = dev_db_url;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});