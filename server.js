const express = require('express');
const app = express();
app.use(express.json());


app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
