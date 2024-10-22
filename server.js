const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Welcome to the REST Api server');
});

app.get('/hello/:data', (req,res) => {
    const data = req.params.data;
    res.send(`Hello ${data}`);
});

const PORT = 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;