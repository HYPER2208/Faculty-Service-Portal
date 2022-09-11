import React, { useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
// import validator from 'validator';

const Register = () => {

    const [ user, setUser ]=useState({
        email:"",
        role:"",
        password:"",
        cpassword:""
    })

    const handlechange = e =>{
        const { name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const { email, role, password, cpassword} = user;
        if(email && role && password && (password===cpassword)){
            alert("posted");
            axios.post("http://127.0.0.1:5000/user/add", user);
        }
        else{
            alert("Invalid Response");
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} method="" action="">
                <h2 className={styles.title}>Register a User</h2>
                <input className={styles.form__input} type="text" name="email" value={user.email} placeholder="Email" onChange={handlechange}/>
                <input className={styles.form__input} type="Role" name="role" value={user.role} placeholder="Role" onChange={handlechange}/>
                <input className={styles.form__input} type="password" name="password" value={user.password} placeholder="Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>
                <input className={styles.form__input} type="cpassword" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handlechange}/>

                <button className={styles.button} onClick={register}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
