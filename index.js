const express= require('express');
const bodyParser = require('body-parser');
const app = express();

require ('./db');

const apiRouter = require ('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', apiRouter)

app.listen(3000);
