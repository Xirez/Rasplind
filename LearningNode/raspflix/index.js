const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./api-routes');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/raspflix');
let db = mongoose.connection;

app.get('/', function (req, res) {
    res.json({
       status: 'API is working',
       message: 'Welcome to Raspflix API!',
    });
});
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Raspflix listening on port ${PORT}`));