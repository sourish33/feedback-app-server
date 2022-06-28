const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
var methodOverride = require('method-override')
const connectDB = require('./config/db')

const routes = require('./routes/index')

//Load config
dotenv.config({path: './config/config.env'})
connectDB()

//Crate server
const app = express()

//Body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//routes

app.use(methodOverride('_method'))
app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
