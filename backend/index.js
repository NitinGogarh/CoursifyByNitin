const express = require('express')
const app = express();
const registerRouter = require('./routes/routes');
const courseRouter = require('./routes/course')
const { default: mongoose } = require('mongoose');
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/Course').then(console.log("database is coonected"))
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/courses',courseRouter)
app.use('/',registerRouter)


app.listen('8000',console.log("server started at port 8000"))