const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

const generateToken = (
    res,
    userId,
    role,
  ) => {
    const jwtSecret = process.env.JWT_SECRET || '';
    const token = jwt.sign({ userId, role }, jwtSecret, {
      expiresIn: '24h',
    });
  
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    });
  
    return token;
  };
  
  const clearToken = (res) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
  };

async function login(req, res){
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User not found!");
        }
        const isMatch = await user.checkPassword(password);
        if(!isMatch){
            throw new Error("Incorrect credentials!");
        }
        const token = generateToken(res, user._id, user.role);
        res.send({token, userId: user._id});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

async function register(req, res){
    try {
        const {name, email, password, phone,  role} = req.body;
        const user = new User({name, email, password, phone, role});
        await user.save();
        const token = jwt.sign({email: user.email, role: user.role},process.env.JWT_SECRET);
        res.send({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

async function logout(req, res){
    clearToken(res);
    res.send({message: 'Logged out successfully'});
}

module.exports = {login, register, logout};