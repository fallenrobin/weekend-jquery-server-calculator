const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//starts the server 
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });