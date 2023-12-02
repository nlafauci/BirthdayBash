// // user controller
// const router = require('express').Router()
// const db = require("../models")

// const { User } = db

// // Creates a user (Sign up)
// router.post('/', async(req, res) => {
//     const user = await User.create(req.body)
//     res.json(user)
// })

// // Finds user (Login in)
// router.get('/', async (req, res) => {
//     const users = await User.findAll()
//     res.json(users)
// })

// module.exports = router