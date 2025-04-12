const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/UserRoutes");

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests before defining routes
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use("/users", router);

// MongoDB connection
mongoose.connect("mongodb+srv://admin:rxuGtFuuJ82X3z5W@cluster0.geaor.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
        // Start the server after successful DB connection
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        // Handle DB connection failure
    });
