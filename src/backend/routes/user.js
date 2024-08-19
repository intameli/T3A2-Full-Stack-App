const express = require('express')
const router = express.Router()


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
 */
router.get('/', (req,res) => {
    res.send([
        {id: 1, name: 'John Doe', email: 'john@example.com'},
        {id: 2, name: 'Jane Doe', email: 'jane@example.com'},
        {id: 3, name: 'Bob Smith', email: 'bob@example.com'}
    ])
});

/**
 *@swagger
 * /api/user/id:
 *  get:
 *      description: Retrieve an individual user.
 *      responses:
 *        200:
 *         description:  Sucessfully retrieved
 *        400:
 *          description: Failed to retrieve 
 */
router.get('/:id', (req,res) => {
    res.json({mssg: "Retrieve a single user"})
})

/**
 *@swagger
 * /api/user:
 *  post:
 *      description: Create a new user.
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