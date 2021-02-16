const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/familyTree')

mongoose.connection.once('connected', () => {
    console.log('MongoDB Connected!')
})

mongoose.connection.on('error', (err) => {
    console.log(`Database Error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('It is working!')
})

app.listen(3000, () => console.log('Listening on Port 3k'))