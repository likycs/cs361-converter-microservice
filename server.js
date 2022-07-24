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


    if (req.body.convertFrom == 'lbs') {
        num = (num * 0.45359237)
        num = num.toFixed(1)
        res.json({convertedTo: "kg", number: num})
    } else if (req.body.convertFrom == 'kg') {
        num = (num * 2.2)
        res.json({convertedTo: "lbs", number: num})
    } else {
        res.json({Error:"Conversion format not supported"})
    };
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
