const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/** ROUTE IMPORTS **/
app.use(cors())
const router = require('./router');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// DB CONNECT
mongoose.connect(process.env.DB_HOST, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    () => console.log('connected to db'));

/** DEFINE ROUTES **/
app.use('/walks', router.Walks);


app.listen(3000);