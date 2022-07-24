import express from express;

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('testing 123')
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})