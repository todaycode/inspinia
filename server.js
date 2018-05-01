var express = require('express');

var app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, () => console.log('server listening on port 3000!'));