const express = require('express');
const app = express();
const path = require('path');

app.use('/swagger.json', express.static(path.join(__dirname, 'swagger.json')));

app.get('/', (req, res) => {
    console.log("Hit");
    const response = {
        id: 1,
        name: 'John Doe'
    };
    res.send(response);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});