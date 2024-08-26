const express = require('express')
const router = express.Router()
const User = require('../models/userModel');


/**
 * @swagger
 * /api/user/:
 *  get:
 *      description: Retrieve all users.
 *      responses:
 *          200:
 *              description:  Sucessfully retrieved
 *          400:
 *              description: Failed to retreive
 * 
 */
router.get('/', async (req,res) => {
    try {
        const users = await User.find({});
        
        if (users.length === 0) {
        return res.status(200).json({ message: 'No users found', users: [] });
        }
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });

/**
 *@swagger
 * /api/user/{id}:
 *  get:
 *      description: Retrieve an individual user.
 *      responses:
 *        200:
 *         description:  Sucessfully retrieved
 *        400:
 *          description: Failed to retrieve 
 */
router.get('/:id', (req,res) => {
    
})

/**
 *@swagger
 * /api/user:
 *  post:
 *      description: Create a new user.
 *      parameters:
 *          - name: First Name
 *            description: Registrants First Name
 *            required: true
 *            type: string
 *          - lastName: Last Name
 *            description: Registrants Last Name
 *            required: true
 *            type: string
 *          - userEmail: Contact Email
 *            description: Registrants Email
 *            required: true
 *            type: null
 * 
 *      responses:
 *          200:
 *          description:  Sucessfully retrieved user
 */
router.post('/', (req,res) => {
    res.json({mssg: "Create a new user"})
})

/**
 *@swagger
 * /api/user:
 *  delete:
 *      description: Deletes a user.
 *      responses:
 *          200:
 *          description:  Sucessfully Deleted
 */
router.delete('/:id', (req,res) => {
    res.json({mssg: "Remove a user"})
})

/**
 *@swagger
 * /api/user:
 *  patch:
 *      description: Update a user.
 *      responses:
 *          200:
 *          description:  Sucessfully Updated
 */
router.patch('/', (req,res) => {
    res.json({mssg: "Update a user"})
})

module.exports = router