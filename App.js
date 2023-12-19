const express = require('express')
const mongoose = require('mongoose')
const nodemon = require('nodemon')
const bodyparser = require("body-parser")

const Server = new express()

Server.use(bodyparser.json())
mongoose.connect("mongodb://127.0.0.1:27017/demoDb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Not Connected")
});

Server.get("/", (req, res) => {
    res.send('Hi...')
})

Server.get("/users", (req, res) => {
    const users = ["Ashish", "sam"]
    res.send(users)
})

const routes = require('./Routes/Rputes')
Server.use("/api/", routes)

Server.listen(5000, () => {
    console.log("Sercwe Started")
})