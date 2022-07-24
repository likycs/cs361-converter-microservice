const express = require('express');
const app = express();
app.use(express.json());


app.post('/', (req, res) => {
    if (typeof req.body.number !== Number) {
        res.send('Invalid input for number')
    };

    let num = req.body.number;

    if (req.body.convertFrom == "lbs") {
        num = (num * 0.45359237)
        console.log(num)
        res.send(num)
    } else {
        num = (num * 2.2)
        console.log(num)
        res.send(num)
    }
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
