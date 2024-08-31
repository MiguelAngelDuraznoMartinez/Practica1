const express = require('express');
require('dotenv').config();
var routes = require('./routes');
var app = express();
const port = process.env.PORT || 3000;


app.use('/', routes);

app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:' + port);
});
