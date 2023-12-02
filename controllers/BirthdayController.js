//birthday controller
const router = require('express').Router()
const db = require("../models")

const { Birthday } = db

// Dashboard Routes
router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = ''
    }
    if (!req.body.name) {
        req.body.name = 'Name'
    }
    if (!req.body.day) {
        req.body.day = '01'
    }
    if (!req.body.month) {
        req.body.month = '12'
    }
    const birthday = await Birthday.create(req.body)
    res.json(birthday)
})

router.get('/', async (req, res) => {
    const birthdays = await Birthday.findAll()
    res.json(birthdays)
})

router.get('/:birthdayId', async (req, res) => {
    let birthdayId = Number(req.params.birthdayId)
    if (isNaN(birthdayId)) {
        res.status(404).json({ message: `Invalid id "${birthdayId}" `})
    } else {
        const birthday = await Birthday.findOne({
            where: { birthdayId: birthdayId },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!birthday) {
            res.status(404).json({ message: `Could not find place with id "${placeId}"` })
        } else {
            res.json(birthday)
        }
    }
})

router.put('/:birthdayId', async (req, res) => {
    let birthdayId = Number(req.params.birthdayId)
    if (isNaN(birthdayId)) {
        res.status(404).json({ message: `Invalid id "${birthdayId}"` })
    } else {
        const birthday = await Birthday.findOne({
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