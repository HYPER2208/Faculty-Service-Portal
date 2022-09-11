import mongoose from 'mongoose';
// import bcryptjs, { hash } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim : true,
        minlength:3
    },
    role:{ type: String, required: true},
    password: { type: String, required: true},
},{
    timestamps: true,
}); 


const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel; 
