const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world! this is from warehouse management')
});

app.listen(port, () => {
    console.log('listening to port :', port)
})