const express = require("express");
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router();

// router.post('/signup', authController.signup)
// router.post('/login', authController.login)

router.post('/signup', async (req, res, next) => {
    try {
        const emailHome = req.body.email;
        if (!emailHome) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Check if user already exists
        const user = await User.findOne({ email : emailHome });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        // Create new user
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        });

        // Generate JWT
        const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
            expiresIn: '1h'
        });

        res.status(201).json({ status: 'success', message: 'You have successfully signed up', token, newUser });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;