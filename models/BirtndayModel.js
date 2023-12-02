//birthday model
const mongoose = require('mongoose')

const birthdaySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    contactPhoto: {
        type: String,
        default: "https://images.unsplash.com/photo-1634037227458-abdbf697806e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    birthday: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    }
})

birthdaySchema.methods.birthdayParagraph = function() {
    return `${this.firstName}'s birthday is on ${this.birthday}, which makes them ${}`
}

module.exports = mongoose.model('Birthdays', birthdaySchema)