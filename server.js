const express = require('express')
require('dotenv').config()
const cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/AuthRoute')
const app = express()
const bcrypt = require('bcryptjs')

//require controllers
const birthdayController = require('./controllers/BirthdayController')
const userController = require('./controllers/UserController')







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


app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

//terminal
app.listen(PORT, console.log(`App is listening on ${PORT}`))


app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

