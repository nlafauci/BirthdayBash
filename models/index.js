//index hehe
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Birthdays = require('./BirthdayModel')