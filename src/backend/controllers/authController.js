const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signup = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email})        
        if(user){
            return res.status(400).json({message: 'User already exists'})
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const newUser =  await User.create({
            ...req.body,
            password: hashedPassword
        })

        //JWT 
        const token = jwt.sign({_id: newUser._id}, 'secretkey123', {
            expiresIn: '1h'
        })
        res.status(201).json({status: 'success', message: 'You have successfully signed up', token,})
    } catch(err){
        return res.status(500).json({error: err.message})
    }
}

exports.login = async (req, res, next) => {

}