const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const hashPassword = require('../utils/hash.utils');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  });

  userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await hashPassword(user.password);
    }
    next();
  });
  
  userSchema.methods.checkPassword = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
  };
  
  const User = mongoose.model('User', userSchema);

module.exports = User;