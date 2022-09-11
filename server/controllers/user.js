import UserModel from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

const createToken = (_id) => {
    return jsonwebtoken.sign({_id}, "facultyserviceportalforiiitlucknow", { expiresIn: '1d'});
}

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}



export const createUsers = async (req, res) => {
    const user = req.body;

    console.log(user);
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);

    
    try {
        const userExists = await UserModel.findOne({email:user.email});

        if(userExists){
            const updatedUser = await UserModel.findOneAndUpdate({email: user.email}, user);
            res.status(200).json({message:"User Updated Succesfully"});
        }
        else{
            const newUser = new UserModel(user);
            await newUser.save();
            res.status(200).json({message:"New User Added"});
        }

        
    } catch (error) {
        res.status(404).json({message : error.message});
        
    }
}

export const auth = async (req, res) => {
    const user = req.body;
    
    console.log(user);
    try {
        const userExists = await UserModel.findOne({email:user.email});
        
        const token = createToken(user._id);
        console.log("USER.JS 56",userExists); 
        if(userExists){
            
            const match = bcryptjs.compare(user.password, userExists.password);

            if(match){

                res.status(200).json({message:"Login Successfull", email: user.email, token: token});
            }
            else{
                res.status(404).json({message:"Password is incorrect"});
            }
            
        }
        else{
            res.status(404).json({message:"User is not registered"});
        }

        
    } catch (error) {
        res.status(404).json({message : error.message});
        
    }
}
