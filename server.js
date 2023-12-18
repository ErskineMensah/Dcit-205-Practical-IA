const express = require('express')
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(3000, () => {
    console.log('Node is running on port 3000')
})


