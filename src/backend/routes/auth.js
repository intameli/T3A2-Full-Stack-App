const express = require("express");
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const router = express.Router();

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
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(201).json({ status: 'success', message: 'You have successfully signed up', token});

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const emailHome = req.body.email;
        const password = req.body.password;

        // Check if email or password is not provided
        if (!emailHome ||!password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Check if user exists
        const user = await User.findOne({ email: emailHome });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        })

        res.json({ status:'success', message: 'Logged in successfully', token });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.post('/recoverAccount', async (req, res) => {
    try {
        const emailHome = req.body.email;

        // Check if email is provided
        if (!emailHome) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Check if user exists
        const user = await User.findOne({ email: emailHome });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Generate a unique reset token
        const resetToken = jwt.sign({ _id: user._id },'resetToken123', { expiresIn: '10m' });

        // Send email with reset link
        //...

        res.json({ status:'success', message: 'Recovery email sent successfully' });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;