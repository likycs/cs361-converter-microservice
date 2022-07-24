const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('testing 123')
});

app.post('/convert', (req, res) => {
    res.send(req.body)
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
