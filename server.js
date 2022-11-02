const express = require('express')
const app = express()
const mongoose = require('mongoose');

require('dotenv').config()

app.post('/api/todos', (req, res) =>{
res.json({ "users": ["userOne", "userTwo"] }) 

})

app.get('/api/todos', (req, res) =>{

}) ;

// spin up the server 
mongoose.connect(process.env.DATABASE_URL).then(() => {
    // successful connection
    app.listen(process.env.PORT, ()=> {
        let message = `${process.env.WELCOME_MESSAGE} http://localhost:${process.env.PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})
app.listen(9000,()=>{
    console.log("Server listening on port 5000")}
    )