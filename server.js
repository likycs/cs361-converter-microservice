const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send('testing 123')
})

app.post('/', (req, res) => {
    if (typeof req.body.number !== 'number') {
        res.json({Error:'Invalid input for number'})
    }; 

    let num = req.body.number;


    if (req.body.convertTo == 'kg') {
        num = (num * 0.45359237)
        num = num.toFixed(1)
        res.json({convertedFrom: "lbs", number: num})
    } else if (req.body.convertTo == 'lbs') {
        num = (num * 2.2)
        num = num.toFixed(1)
        res.json({convertedFrom: "kg", number: num})
    } else {
        res.json({Error:"Conversion format not supported"})
    };
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
