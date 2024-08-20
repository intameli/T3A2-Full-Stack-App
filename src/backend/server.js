require('dotenv').config()

const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userRoutes = require('./routes/user');
const tutorRoutes = require('./routes/tutor');
const authRoutes = require('./routes/auth');



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

// routes
app.use('/api/user', userRoutes)
app.use('/api/tutor', tutorRoutes)
app.use('/api/auth', authRoutes)


// Port Listening 
app.listen(4010, () => {
    console.log('Server is running on port 4010')
})