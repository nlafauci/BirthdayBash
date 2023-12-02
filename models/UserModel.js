//user model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required",
        unique: true,
    },
    userEmail: {
        type: String,
        required: [true, 'Your email address is required'],
        unique: true,
    },
    userPassword:{
        type: String,
        required: [true, 'Your password is required]',
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
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

//constants for calculating birthdays
const today = new Date();
const birthday = new Date(this.birthday);
const age = today.getFullYear() - birthday.getFullYear();

//adjust age based on the birthdate and current date

if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
    age --;
}

const sentence = `${this.firstname}'s birthday is on ${this.birthday}, making them ${age} years old.`;

module.exports = mongoose.model('User', userSchema)