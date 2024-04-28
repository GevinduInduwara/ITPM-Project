const express = require('express')
const cors = require('cors')
const connectDB = require('./common/config')
//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

require('dotenv').config()

const packageRoute = require('./common/routes/paymentRoutes')
const paymentRoute = require('./common/routes/paymentRoutes') // Assuming you have a paymentRoutes file

const app = express()

// static folder
app.use(express.static('public'))

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/package', packageRoute)
app.use('/api/payment', paymentRoute) // Add this line

// DB connection and starting server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  })
  .catch((error) => {
    console.log(`Failed to start the server: ${error.message}`)
    process.exit(1)
  })