'use strict';

var app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`);
});