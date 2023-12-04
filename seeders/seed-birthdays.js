const db = require('../models')
db.Birthdays.deleteMany()
.then(() => {
    db.Birthdays.create([{
        firstName: 'Sara',
        pic:'https://www.shutterstock.com/image-vector/young-girl-anime-style-character-600nw-2235047529.jpg',
        birthday: '03/03/1997',
        notes: 'Is throwing a party... send RSVP soon!'
    },{
        firstName: 'Alison',
        pic:'https://pics.craiyon.com/2023-06-17/6934ea47fe63440c82b3347cc2c71216.webp',
        birthday: '09/10/1999',
        notes: 'Wants Bad Bunny tickets. Look on Ticket Master!'
    }])
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })
})