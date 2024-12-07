const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser")
const app = express();
const connectToDb = require("./db/db.js")
const userRoutes = require("./routes/user.route.js")
const captainRoutes = require('./routes/captain.route');
const mapsRoutes = require('./routes/maps.route');



connectToDb()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);


module.exports = app