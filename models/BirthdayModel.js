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

//constants for calculating birthdays
const today = new Date();
const birthday = new Date(this.birthday);
const age = today.getFullYear() - birthday.getFullYear();

//adjust age based on the birthdate and current date

if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
    age --;
}

const sentence = `${this.firstname}'s birthday is on ${this.birthday}, making them ${age} years old.`;

module.exports = mongoose.model('Birthdays', birthdaySchema)