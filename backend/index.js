const express = require('express')
const PORT = require("./config");
const mongoDBURL = require("./config");
const mongoose= require('mongoose');
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("welcom to Mern Stack")
});

mongoose.connect(mongoDBURL)
.then(()=>{
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    });
})

