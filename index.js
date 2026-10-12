require("dotenv").config()
const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/youtube', (req, res) =>{
    res.send('<h3>www.youtube.com</h3>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});