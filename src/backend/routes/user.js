const express = require('express')
const router = express.Router()

//GET all users
router.get('/', (req,res) => {
    res.json({mssg: "Retrieve all users"})
})

//GET a single user
router.get('/:id', (req,res) => {
    res.json({mssg: "Retrieve a single user"})
})

// POST a new user
router.post('/', (req,res) => {
    res.json({mssg: "Create a new user"})
})

// DELETE a user
router.delete('/:id', (req,res) => {
    res.json({mssg: "Remove a user"})
})

// Update a user
router.patch('/', (req,res) => {
    res.json({mssg: "Update a user"})
})

module.exports = router