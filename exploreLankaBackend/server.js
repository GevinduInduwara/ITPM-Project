const express = require('express')
const cors = require('cors')
const connectDB = require('./common/config')

require('dotenv').config()

const packageRoute = require('./common/routes/packageRoutes')

const app = express()

// static folder
app.use(express.static('public'))

// Middleware
app.use(cors())
app.use(express.json())


app.use('/api/package', packageRoute)

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