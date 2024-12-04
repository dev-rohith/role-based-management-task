import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: String,
    password: String,
    role: String,
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true });

const User = model('User', userSchema)

export default User