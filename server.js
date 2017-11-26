const express = require('express');
var history = require('connect-history-api-fallback');

let app = express();

const PORT = process.env.PORT|| 3000;

app.use(express.static('dist'));


app.use(history('index.html','dist'));
app.listen(PORT,function(){
    console.log('Express server is up on port'+PORT);
})