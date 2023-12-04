//birthday controller
const router = require('express').Router()
const db = require("../models")


// Dashboard Routes
//GET index page
router.get('/', async (req, res) => {
    await db.Birthdays.find()
    .then((birthdays) => {
      res.render('birthdays/index', { birthdays })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
// GET birthday show page
router.get('/:id', async (req, res) => {
    await db.Birthdays.findById(req.params.id)
    .then(birthday => {
        res.render('birthdays/show', { birthday })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
// GET edit birthday form
router.get('/:id/edit', async (req, res) => {
   await db.Birthdays.findById(req.params._id)
    .then(birthday => {
        res.render('birthdays/edit', { birthday })
    })
    .catch(err => {
        res.render('error404')
    })
  })

// GET new birthday form
router.get('/new', async (req, res) => {
    const birthdays = await db.Birthdays.find()
    res.render('birthdays/new', { birthdays })
  })

// POST create birthday event
// router.post('/', async (req, res) => {
//     if (!req.body.pic) req.body.pic = undefined
//     await db.Birthdays.create(req.body)
//     .then(() => {
//         res.redirect('/birthdays')
//       })
//       .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//       })
// })
  
// router.put('/:id/edit', async (req, res) => {
//     let birthdayId = Number(req.params.birthdayId)
//     if (isNaN(birthdayId)) {
//         res.status(404).json({ message: `Invalid id "${birthdayId}"` })
//     } else {
//         const birthday = await Birthdays.findOne({
//             where: { birthdayId: birthdayId },
//         })
//         if (!birthday) {
//             res.status(404).json({ message: `Could not find birthday with id "${birthdayId}" `})
//         } else {
//             Object.assign(birthday, req.body)
//             await birthday.save()
//             res.json(birthday)
//         }
//     }
// })

module.exports = router