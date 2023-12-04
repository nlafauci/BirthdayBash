//birthday controller
const router = require('express').Router()
const db = require("../models")

const { Birthdays } = db

// Dashboard Routes
//index
router.get('/', async (req, res) => {
    db.Birthdays.find()
    .then((birthdays) => {
      res.render('birthdays/index', { birthdays })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
// birthday show page
router.get('/:id', (req, res) => {
    db.Birthdays.findById(req.params.id)
    .then(birthday => {
        res.render('birthdays/show', { birthday })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
//create birthday event
router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = ''
    }
    if (!req.body.firstName) {
        req.body.firstName = 'Name'
    }
    if (!req.body.day) {
        req.body.day = '01'
    }
    if (!req.body.month) {
        req.body.month = '12'
    }
    const birthday = await db.create(req.body)
    res.json(birthday)
})
//
router.put('/:birthdayId', async (req, res) => {
    let birthdayId = Number(req.params.birthdayId)
    if (isNaN(birthdayId)) {
        res.status(404).json({ message: `Invalid id "${birthdayId}"` })
    } else {
        const birthday = await Birthdays.findOne({
            where: { birthdayId: birthdayId },
        })
        if (!birthday) {
            res.status(404).json({ message: `Could not find birthday with id "${birthdayId}" `})
        } else {
            Object.assign(birthday, req.body)
            await birthday.save()
            res.json(birthday)
        }
    }
})

module.exports = router