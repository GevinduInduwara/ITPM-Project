require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const paymentRoutes = require('./common/routes/payments')


// express app
const app = express()

//middleware
app.use (express.json())

//log requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/payments', paymentRoutes)


//connect to mongodb
require('dotenv').config();

//const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully. listening on port 4000'))
  .catch(err => console.log(err));