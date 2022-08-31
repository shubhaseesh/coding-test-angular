const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4000

mongoose.connect('mongodb://localhost:27017/todo')
.then((x)=>{
    console.log(`connected to ${x.connections[0].name}`)
})
.catch(err=>{
    console.error('Error connecting to mongo', err.reason)
})

const todoRoute = require('./routes/todo.route')
const app = express()
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(cors())
app.use('/api',todoRoute)

const server = app.listen(port, ()=>{
    console.log(`connected to port ${port}`)
})



