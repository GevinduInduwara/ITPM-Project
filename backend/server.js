const express = require("express");
const cors = require("cors");
const connectDB = require("./common/config");

require("dotenv").config();

const offerRoute = require("./common/routes/offerRoutes");
const userRoute = require("./common/routes/userRoutes");

const app = express();

// static folder
app.use(express.static("public"));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/offer", offerRoute);
app.use("/api/user", userRoute);
// app.use("/api/login", userRoute);
// app.use("/api/conversation", userRoute);

// DB connection and starting server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`Failed to start the server: ${error.message}`);
    process.exit(1);
  });