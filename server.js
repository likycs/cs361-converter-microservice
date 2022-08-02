const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send('testing 123')
})

app.post('/', (req, res) => {
    if (Array.isArray(req.body.number) == false) {
        res.json({Error:'Invalid input for number'})
    }; 

    let numArr = req.body.number;
    let conversions = req.body.convertFrom

    for (let i = 0; i < numArr.length; i++) {
        if (conversions[i] == "kg") {
            numArr[i] = numArr[i] / 2.2
            numArr[i] = numArr[i].toFixed(1)
        } else if (conversions[i] == "lbs") {
            numArr[i] = numArr[i] * 2.2
            numArr[i] = numArr[i].toFixed(1)
        } else {
            res.json({Error: "Incorrect unit conversion format was given"})
        }
    }

    res.json({number: numArr})


})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
