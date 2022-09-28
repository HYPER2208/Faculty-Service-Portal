import mongoose from 'mongoose';
// import bcryptjs, { hash } from 'bcryptjs';

const userSchema = new mongoose.Schema({   
    firstName: { type: String},
    middleName: { type: String},
    lastName: { type: String},
    email:{type: String, required: true, trim : true, minlength:3 },
    role:{ type: String},
    phone: { type: String},
    department: { type: String},
    designation: { type: String},
    basicPay: { type: String},
    ta: { type: String},
    hra: { type: String},
    da: { type: String},
    password: { type: String},
},{
    timestamps: true,
}); 


const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel; 
