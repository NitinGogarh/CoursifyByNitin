const express = require('express')
const dotenv = require('dotenv')
const app = express();
const registerRouter = require('./routes/routes');
const courseRouter = require('./routes/course')
const { default: mongoose } = require('mongoose');
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(console.log("database is coonected")).catch((error)=>console.log(error))
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/courses',courseRouter)
app.use('/',registerRouter)


app.listen('8000',console.log("server started at port 8000"));;