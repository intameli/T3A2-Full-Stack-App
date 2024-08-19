const express = require('express')
const router = express.Router()


//GET all Tutors
router.get('/', (req,res) => {
    res.json({mssg: "Retrieve all Tutors"})
})

//GET a single Tutor
router.get('/:id', (req,res) => {
    res.json({mssg: "Retrieve a single tutor"})
})

// POST a new Tutor
router.post('/', (req,res) => {
    res.json({mssg: "Create a new Tutor"})
})

// DELETE a Tutor
router.delete('/:id', (req,res) => {
    res.json({mssg: "Remove a Tutor"})
})

// Update a Tutor
router.patch('/', (req,res) => {
    res.json({mssg: "Update a tutor"})
})


module.exports = router