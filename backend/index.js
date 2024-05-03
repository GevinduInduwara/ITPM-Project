const express = require('express');
const cors = require('cors');   
const connectDB = require('./config/DBConnect.js');
const { auth, admin } = require('./middlewares/auth.roles.js');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const path = require('path');

const authRoute = require('./routes/login.routes.js');
const userRoutes = require('./routes/user.routes');
const packageRoute = require('./routes/packageRoutes')
const locationRoute = require('./routes/locationRoutes')
const cookieParser = require('cookie-parser');

const app = express();


//Middleware
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));
app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//login Routes
app.use('/auth', authRoute);

//User Management Route
app.use('/users', auth,userRoutes);
app.use('/api/package', packageRoute)
app.use('/api',locationRoute )

//DB connection and starting server
connectDB()
    .then(()=>{
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch((error) => {
        console.log(`Failed to start the server: ${error.message}`);
        process.exit(1);
    });

