//user model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Your email address is required'],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password:{
        type: String,
        required: [true, 'Your password is required'],
    },
    firstName: {
        type: String,
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
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
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

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema)