const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchrema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin:{
            type: Boolean,
            required: true,
            default: false
        },
        pic: {
            type: String,
            required: true,
            default:
                'https://icon-library.com/images/141782.svg.svg'
        },
    },
    {
        timestamps: true
    }
);
 
userSchrema.pre('save', async function(next){
    if (!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

userSchrema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
const User = mongoose.model('User', userSchrema);

module.exports = User;