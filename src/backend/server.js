require('dotenv').config()

const express = require('express')
// const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const userRoutes = require('./routes/user')
const tutorRoutes = require('./routes/tutor')

// Creating express instance
const app = express();

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'API for Bright Academics Tutoring Services',
            version: '1.0.0',
            description: 'API Documentation for Student and Tutor Management System'
        },
    },
        apis: ['./routes/user.js','./routes/tutor.js'],
        tags: [{
            name: 'User',
            description: 'User Route'
        },{
            name: 'Tutor',
            description: 'Tutor Route'
        } ],

    }

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json())


// For console reporting purposes temp.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/user', userRoutes)
app.use('/api/tutor', tutorRoutes)

// // DB Connection
// mongoose.connect(process.env.MONGO_URI)
//     .then (() => {
//         // Port Listening 
//         app.listen(process.env.PORT, () => {
//         console.log('Connection to DB Successful, listening on port:', process.env.PORT)
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })

app.listen(4000, function() {
    console.log("Server is running on port " + 4000);
});