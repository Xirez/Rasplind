let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let apiRoutes = require('./api-routes');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');

let port = process.env.PORT || 5000;
let db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});