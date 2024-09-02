require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json())
app.use(cors())
const weatherRouter = require('./routes/weather')
app.use('/api/weather', weatherRouter)



// Port
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Application is running on port ${port}...`);
});