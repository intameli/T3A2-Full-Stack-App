require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/user')
const tutorRoutes = require('./routes/tutor')



// Creating express instance
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/tutor', tutorRoutes)




// Port Listening 
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})