import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
const connectDB = require('./config/db')

dotenv.config()

const app = express();
// initiate DB connection
connectDB()

// connect middleware
app.use(express.json());
app.use(express.urlencoded);
app.use(morgan("dev"));


// assign routes



// connect to database


//listen for port
const PORT = process.env.PORT || 5500
app.listen(PORT, ()=>{
    console.log(` i am running on port:  ${PORT}`)
})