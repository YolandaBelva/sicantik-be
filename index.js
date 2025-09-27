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
const userRouter = require("./src/routes/userRoute")


// routes
app.use('/user', userRouter)


// start server
async function startServer() {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();