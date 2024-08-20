const express = require('express')
const Tutor = require('../models/tutorModel')
const router = express.Router()


/**
 *@swagger
 * /api/tutor:
 *  get:
 *      description: Retrieve all tutors.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved
 */
router.get('/', (req,res) => {
    res.json({mssg: "Retrieve all Tutors"})
})

/**
 *@swagger
 * /api/tutor/{id}:
 *  get:
 *      description: Retrieve an individual tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved
 */
router.get('/:id', (req,res) => {
    res.json({mssg: "Retrieve a single tutor"})
})

/**
 *@swagger
 * /api/tutor:
 *  post:
 *      description: Create a new tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved user
 */

router.post('/', async (req,res) => {
    const {firstName,lastName,homeNr,mobileNr} = req.body
    try {
        const tutor = await Tutor.create(firstName,lastName,homeNr,mobileNr)
        res.status(200).json(tutor)
    }catch (error){
     res.status(400).json({error: error.message})
    }
router.post('/', (req,res) => {
    res.json({mssg: "Create a new Tutor"})
})

/**
 *@swagger
 * /api/tutor:
 *  delete:
 *      description: Deletes a tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully Deleted
 */
router.delete('/:id', (req,res) => {
    res.json({mssg: "Remove a Tutor"})
})

/**
 *@swagger
 * /api/tutor:
 *  patch:
 *      description: Update a tutor.
 *      responses:
 *          200:
 *          description:  Sucessfully Updated
 */
router.patch('/', (req,res) => {
    res.json({mssg: "Update a tutor"})
})


module.exports = router