var express = require('express');
var app = express();

app.use(express.static('www'));

app.listen(1339, function(){
    console.log('running');
});
