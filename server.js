const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static('public'));


app.listen(3000, () => {
    console.log('Server has started on port 3000');
});