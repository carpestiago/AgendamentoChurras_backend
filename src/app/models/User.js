const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 6);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;