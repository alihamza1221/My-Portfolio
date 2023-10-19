const express = require('express');
const bodyparser = require('body-parser');
const Routes = require('./Routes');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', Routes);



app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
})
