const express = require('express');
const mongoose = require("mongoose")
const router = require('./api/routes/index')
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());
app.use("/", router);

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://bonsick:zvxcAFSD9029@webdmitri.rzml0ll.mongodb.net/?retryWrites=true&w=majority", {dbName:"WEB2023"})
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}
start();