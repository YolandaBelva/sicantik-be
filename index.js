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
const flashcardRoute = require("./src/routes/flashcardRoute");
const workScheduleRoute = require("./src/routes/workScheduleRoute");


// routes
app.use('/social-posts', socialPostRoute);
app.use('/flashcards', flashcardRoute);
app.use('/work-schedules', workScheduleRoute);

// start server
async function startServer() {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();