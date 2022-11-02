const express = require('express')
const app = express()
const mongoose = require('mongoose');
const PORT = 8000
const WELCOME_MESSAGE= 'Welcome message DB CONNECTED AND SERVER RUNNING'
const DATABASE_URL = 'mongodb+srv://emmilly:emmilly@cluster0.rruy4ud.mongodb.net/test?retryWrites=true&w=majority'


app.post('/api/todos', (req, res) =>{
res.json({ "users": ["userOne", "userTwo"] }) 

})

app.get('/api/todos', (req, res) =>{

}) ;

// spin up the server 
mongoose.connect(DATABASE_URL).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})
app.listen(9000,()=>{
    console.log("Server listening on port 5000")}
    )