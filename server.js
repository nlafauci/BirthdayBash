const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
// const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const authRoute = require('./userRoutes/AuthRoute')

//require controllers
const birthdayController = require('./controllers/birthdays')
// const userController = require('./controllers/users')


// Middleware (express settings)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.use(methodOverride('_method'))

//CONTROLLERS
app.use('/birthdays', birthdayController)
// app.use('/users', userController)


// BASIC ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req,res) => {
  res.render('login')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// MONGOOSE DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

//terminal
const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is listening on port ${PORT}`))



app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

