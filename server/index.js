//express config
const express = require('express');
const app = express();

//mongodb config
const mongoose = require('mongoose');

//dotenv config
require('dotenv').config()



const port = 8080;

app.listen(port, () => {
    console.log(`app is listening at port http://localhost:${port}`)
});
