//user model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPassword:{
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    contactPhoto: {
        type: String,
        default: "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",
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

module.exports = mongoose.model('Users', userSchema)