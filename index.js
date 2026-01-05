const express = require('express')
const app = express()
const cors = require('cors');
const { config } = require('dotenv');
const { connectDB } = require('./src/config/database');
config();
const port = process.env.PORT

app.use(cors());
app.use(express.json());

// require routes list
const socialPostRoute = require("./src/routes/socialPostRoute");


// routes
app.use('/social-posts', socialPostRoute)

// start server
async function startServer() {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();