const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

async function auth(req, res, next){
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: 'Please login to continue' });
    }

    const jwtSecret = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, jwtSecret);
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: 'You are not authorized' });
    }

    const user = await User.findOne({ _id: decoded.userId });
    if (!user) {
      res.status(401).json({ message: 'Unauthorized, username not found' });
    }
    next();
  } catch (error) {
    console.error('Failed to authenticate user', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function admin(req, res, next) {
  try {
    const token = req.cookies.jwt;
    const jwtSecret = process.env.JWT_SECRET || '';
    const decoded = jwt.verify(token, jwtSecret);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized' });
    }
    next();
  } catch (error) {
    console.error('Failed to authorize user', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { auth, admin};
  
