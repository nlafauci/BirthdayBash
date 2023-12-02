const express = require('express')
require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const birthdayController = require('./controllers/BirthdayController')
const userController = require('./controllers/UserController')

const app = express()


// Middleware (express settings)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

//CONTROLLERS
app.use('/birthdays', birthdayController)
app.use('/users', userController)


// BASIC ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// MONGOOSE DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT

//terminal
app.listen(PORT, console.log(`App is listening on ${PORT}`))

