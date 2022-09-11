import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// require('dotenv').config();

import userRoutes from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);

// app.use(bodyParser.json({limit:"30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));


const CONNECTION_URL = 'mongodb+srv://HYPER12:Nihal22082000@cluster0.jxo7mki.mongodb.net/UserDetails?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    
})
// app.get('/',(req,res)=>{
//     res.send("Server Running");
// })
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// mongoose.set('useFindAndModify', false);