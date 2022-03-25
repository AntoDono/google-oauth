const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/HTML/index.html')
})

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/HTML/login.html')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
