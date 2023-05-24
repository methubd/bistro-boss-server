const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

//middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bistro Boss Server')
})

app.listen(port, () => {
    console.log(`Bistro Server is Running on Port-${port}`);
})